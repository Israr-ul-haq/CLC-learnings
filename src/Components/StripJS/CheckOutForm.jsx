import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import toast from 'react-hot-toast';
import { APIBaseURL } from '../../shared/APIBaseURL';
import Menu from '../Menu';
export default function CheckoutForm(props) {
  if (props.data === undefined) {
    window.location.href = '/StudentPayment';
    toast.error('Please fill all fields.');
  }
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  // const feeAmount = props.data.data.feeAmount;
  const propsfullName = props.data.data.fullName;
  const propsformNumber = props.data.data.formNumber;
  const propsemail = props.data.data.email;
  const propscountry = props.data.data.country;
  const propscity = props.data.data.city;
  const propsaddress = props.data.data.address;
  const selectState = props.data.data.selectedState;
  const propFormNumberEncrypt = props.data.data.encryptFormNumber;

  const [fullName, setFullName] = useState(propsfullName);
  const [formNumber, setFormNumber] = useState(propsformNumber);
  const [formNumberEncrypt, setFormNumberEncrypt] = useState(
    propFormNumberEncrypt
  );
  const [email, setEmail] = useState(propsemail);
  const [country, setCountry] = useState(propscountry);
  const [selectCountryState, setSelectCountryState] = useState(selectState);
  const [city, setCity] = useState(propscity);
  const [address, setAddress] = useState(propsaddress);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(
        `${APIBaseURL}/api/WebApis/CreateStripPayment?FormNo=${formNumberEncrypt}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: [{ id: 'clconlinevoucher' }] }),
        }
      )
      .then((res) => {
        return res.json();
      })
      .then((mes) => {
        setClientSecret(mes.Message);
      });
  }, []);

  const cardStyle = {
    hidePostalCode: true,
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      const payment = {
        FullName: fullName,
        FormNumber: formNumberEncrypt,
        Email: email,
        Country: country,
        City: city,
        State: selectCountryState,
        Address: address,
      };

      axios
        .post(`${APIBaseURL}/api/WebApis/PostPayThroughOnline`, payment, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.Status === true) {
            window.scrollTo(0, 0);
            toast.success('Successfully Added!');
            window.location.href = '/';
            setFullName('');
            setFormNumber('');
            setFormNumberEncrypt('');
            setEmail('');
            setCountry('');
            setSelectCountryState('');
            setCity('');
            setAddress('');
          } else {
            console.log(response, 'from else');
            window.scrollTo(0, 0);
            toast.error(response.data.Message);
            window.location.href = '/StudentPayment';
          }
        })
        .catch((error) => {
          console.log(error, 'from catch');
          window.scrollTo(0, 0);
          toast.error(error);
          window.location.href = '/StudentPayment';
        });

      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <>
      <Menu />

      <form id='payment-form' onSubmit={handleSubmit}>
        <CardElement
          id='card-element'
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className='strip-button'
          disabled={processing || disabled || succeeded}
          id='submit'
        >
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
      </form>
    </>
  );
}
