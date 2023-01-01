import React, { Component } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { APIBaseURL } from '../shared/APIBaseURL';
import ReactLoading from 'react-loading';
import Menu from './Menu';
class StudentPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      countryStates: [],
      stateCities: [],
      fullName: '',
      formNumber: '',
      email: '',
      country: '',
      selectedState: '',
      city: '',
      address: '',
      encryptFormNumber: '',
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleState(countryName) {
    this.setState({ loading: true });
    fetch(`https://geodata.solutions/restapi?country=${countryName}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ countryStates: [] });
        let el = [...this.state.countryStates];
        for (
          let index = 0;
          index < result.details.regionalBlocs.length;
          index++
        ) {
          el.push(result.details.regionalBlocs[index].state_name);
        }
        this.setState({ countryStates: el });
        this.setState({ loading: false });
      });
  }

  handleCity(stateName) {
    this.setState({ loading: true });
    const countryName = this.state.country;
    fetch(
      `https://geodata.solutions/restapi?country=${countryName}&state=${stateName}`
    )
      .then((res) => res.json())
      .then((result) => {
        let obj = Object.keys(result);
        obj.pop();
        this.setState({ stateCities: [] });
        let el = [...this.state.stateCities];
        for (let index = 0; index < obj.length; index++) {
          el.push(result[index].city_name);
        }
        this.setState({ stateCities: el });
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();

    this.setState({ loading: true });
    fetch(`https://geodata.solutions/restapi`)
      .then((res) => res.json())
      .then((result) => {
        let obj = Object.keys(result);
        obj.pop();
        this.setState({ countries: [] });
        let arr = [...this.state.countries];

        for (let index = 0; index < obj.length; index++) {
          arr.push(result[index].country_name);
        }
        this.setState({ countries: arr });
        this.setState({ loading: false });
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    var val = '';

    if (target.id === 'formNumber' && value.length > 0) {
      val = btoa(value);

      this.setState({
        encryptFormNumber: val,
        [name]: value,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }

    if (target.id === 'country') {
      this.handleState(event.target.value);
    } else if (target.id === 'selectedState') {
      this.handleCity(event.target.value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    console.log(this.state, 'hello state');
    if (this.state.encryptFormNumber.length <= 0) {
      this.setState({ loading: false });
      window.scrollTo(0, 0);
      toast.error('Please add your paid voucher/challan Number!');
    } else {
      axios
        .get(
          `${APIBaseURL}/api/WebApis/CheckChallanDetails?FormNumber=${this.state.encryptFormNumber}`
        )
        .then((response) => {
          if (response.data.Status === true) {
            console.log(this.state, 'If State');
            this.setState({ loading: false });
            this.props.history.push({
              pathname: '/StripWrapper',
              state: {
                data: this.state,
              },
            });
            console.log(response, 'If');
          } else {
            this.setState({ loading: false });
            console.log(response, 'Else');
            toast.error(response.data.Message);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          console.log(error, 'catch');
          toast.error('There is an error!');
          toast.error(error);
        });
    }
  }

  render() {
    return (
      <>
        <Menu />

        {this.state.loading === true ? (
          <div
            style={{
              width: '100%',
              height: '150vh',
              backgroundColor: 'white',
            }}
          >
            <div className='flex-loader'>
              <ReactLoading
                type='spin'
                color='#2D933F'
                height={80}
                width={80}
                className='flex-item-loader'
              />
            </div>
          </div>
        ) : (
          <div>
            <section className='payment-title_section'>
              <div className='container'>
                <h2 className='sectiontitle payment_title wow focus-in-expand '>
                  Payment <span>Gateway</span>
                </h2>
              </div>
            </section>

            <section className='form-toggle mb-4'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <Link className='nav-link' to='/StudentChallan'>
                      <a className='homemodal__btn btn btn-primary bank p-3'>
                        Paid Through Bank
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className='payment_form online-form pb-5'>
              <div className='container'>
                <div className='payment_form__content'>
                  <h2 className='payment_form__title'>
                    <span class='span-black'>Billing </span>Details
                  </h2>
                  <form className='form registernow__form'>
                    <div className='form-row registernow__formrow'>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='fullName'>
                          Full Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='fullName'
                          name='fullName'
                          placeholder='Enter Full Name'
                          value={this.state.fullName}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='email'>
                          Email<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          placeholder='Enter Email'
                          name='email'
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='formNumber'>
                          Voucher number<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='formNumber'
                          placeholder='Enter Voucher number'
                          name='formNumber'
                          value={this.state.formNumber}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label for='country'>
                          Country<span class='text-danger'> *</span>
                        </label>
                        <select
                          class='form-control'
                          id='country'
                          value={this.state.country}
                          name='country'
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value=''>Select Country</option>
                          {this.state.countries.sort().map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='selectedState'>
                          State<span className='text-danger'> *</span>
                        </label>
                        <select
                          className='form-control'
                          id='selectedState'
                          name='selectedState'
                          value={this.state.selectedState}
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value=''>Select State</option>
                          {this.state.countryStates
                            .sort()
                            .map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label for='city'>
                          City<span class='text-danger'> *</span>
                        </label>
                        <select
                          class='form-control'
                          id='city'
                          value={this.state.city}
                          name='city'
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value=''>Select City</option>
                          {this.state.stateCities.sort().map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-12 px-0'>
                        <label htmlFor='address'>Address</label>
                        <textarea
                          className='form-control'
                          id='address'
                          rows='3'
                          name='address'
                          value={this.state.address}
                          onChange={this.handleInputChange}
                          placeholder='Your Address'
                          maxLength='300'
                        ></textarea>
                      </div>

                      <div className='last_part'>
                        <div className='payment_btn col-lg-6'>
                          <button
                            onClick={this.handleSubmit}
                            type='submit'
                            className='btn btn-primary payment__submitbtn mb-5'
                          >
                            Submit
                          </button>

                          {/* <Link
                        to={{
                          pathname: "/StripWrapper",
                          state: {
                            data: this.state,
                          },
                        }}
                        type="submit"
                        className="btn btn-primary payment__submitbtn mb-5"
                      >
                        Submit
                      </Link> */}
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className='image col-lg-12'>
                    <img
                      className='doodle_vector'
                      src='assets/images/doodle8.png'
                      alt='doodle_vector'
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}

export default StudentPayment;
