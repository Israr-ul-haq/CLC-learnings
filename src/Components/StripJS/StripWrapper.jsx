import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckOutForm';
// import CheckoutForm from "./CheckoutForm";
import './strip.css';
import Menu from '../Menu';
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
  'pk_test_51I3JkcKZTCN2vCXQa5zE0VbbkhuF7ObvSIoDofyrqVOUsNjKRa4zy588WaZCiww3dAXnGU44b38GwbbsO203XlRO00xwJLFGuU'
);

class StripWrapper extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'StripWrapper');
    this.state = {
      data: this.props.history.location.state,
    };
  }
  render() {
    return (
      <>
        <Menu />

        <div className='my-5 text-center'>
          <div className='col-12'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-sm-12'></div>
                <div className='col-lg-6 col-sm-12'>
                  <h2 className='sectiontitle payment_title focus-in-expand mb-5'>
                    Payment <span>Gateway</span>
                  </h2>
                  <Elements stripe={promise}>
                    <CheckoutForm data={this.state.data} />
                  </Elements>
                </div>
                <div className='col-lg-3 col-sm-12'></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StripWrapper;

// export default function StripWrapper(props) {
//   const [succeeded, setSucceeded] = useState(this.props);

//   return (
//     <div className="App">
//       <Elements stripe={promise}>
//         <CheckoutForm />
//       </Elements>
//     </div>
//   );
// }
