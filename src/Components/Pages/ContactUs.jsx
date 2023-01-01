import React, { Component } from 'react';
import WOW from 'wowjs';
import axios from 'axios';
import toast from 'react-hot-toast';
import { APIBaseURL } from '../../shared/APIBaseURL';
import Menu from '../Menu';
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      fullname: '',
      email: '',
      subject: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const tutor = {
      Name: this.state.fullname,
      Email: this.state.email,
      Message: this.state.message,
      Subject: this.state.subject,
    };

    axios
      .post(`${APIBaseURL}/api/WebApis/PostContactUs`, tutor, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data.Status === true) {
          window.scrollTo(0, 0);
          toast.success('Successfully Added!');
          this.setState({
            message: '',
            fullname: '',
            email: '',
            subject: '',
          });
        } else {
          window.scrollTo(0, 0);
          console.log(response, 'else');
          toast.error(response.data.Message);
        }
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        toast.error(error);
        console.log(error, 'catch');
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
  }

  render() {
    return (
      <>
        <Menu />
        <section className='contact'>
          <div className='container'>
            <div className='contactcontent'>
              <div className='contactcontent__left '>
                <img
                  className='contactcontent__map wow kenburns-top-left'
                  src='./assets/images/map_transparent@2x.png'
                />
                <h2 className='contactcontent__title'>
                  <span>ContaCT</span> us
                </h2>
                <div className='contactaddress'>
                  <div className='contactaddress__item'>
                    <img
                      className='contactaddress__image'
                      src='./assets/images/icon_location.svg'
                    />
                    <h5 className='contactaddress__title'>
                      Head Office <br />
                      Building No.: 3658, Al Sharjah Street, Ar Rabiyah
                      district. P.O Box 32437 Dammam 6621
                    </h5>
                  </div>
                  {/* <div className='contactaddress__item'>
                    <img
                      className='contactaddress__image'
                      src='./assets/images/icon_location.svg'
                    />
                    <h5 className='contactaddress__title'>
                      UK <br />
                      The Thistles1 collegeroad Birmingham B13 9LS
                    </h5>
                  </div> */}

                  <div className='contactaddress__item'>
                    <img
                      className='contactaddress__image'
                      src='./assets/images/icon_phone.svg'
                    />
                    <h5 className='contactaddress__title'> 00966593284437</h5>
                  </div>
                  <div className='contactaddress__item'>
                    <img
                      className='contactaddress__image'
                      src='./assets/images/icon_phone.svg'
                    />
                    <h5 className='contactaddress__title'>0092 322 252 2521</h5>
                  </div>

                  <div className='contactaddress__item'>
                    <img
                      className='contactaddress__image'
                      src='./assets/images/iconmessage.svg'
                    />
                    <h5 className='contactaddress__title'>
                      info@clconlinelearning.com
                    </h5>
                  </div>
                </div>
                <form
                  className='form contactcontent__form'
                  onSubmit={(event) => this.handleSubmit(event)}
                >
                  <div className='form-row contactcontent__formrow'>
                    <div className='form-group contactcontent__formgroup col-md-6'>
                      <label for='inputEmail4'>Your Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='inputEmail4'
                        name='fullname'
                        value={this.state.fullname}
                        onChange={this.handleInputChange}
                        placeholder='Enter Name'
                        required
                      />
                    </div>
                    <div className='form-group contactcontent__formgroup col-md-6'>
                      <label for='inputPassword4'>Your Email</label>
                      <input
                        type='email'
                        className='form-control'
                        id='inputPassword4'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder='Enter Email'
                        required
                      />
                    </div>
                  </div>
                  <div className='form-group contactcontent__formgroup'>
                    <label for='inputAddress'>Subject</label>
                    <input
                      type='text'
                      className='form-control'
                      id='inputAddress'
                      name='subject'
                      value={this.state.subject}
                      onChange={this.handleInputChange}
                      placeholder='Enter Subject'
                      required
                    />
                  </div>
                  <div
                    className='form-group contactcontent__formgroup'
                    style={{ marginBottom: '0' }}
                  >
                    <label for='inputAddress2'>Message</label>
                    <textarea
                      type='text'
                      className='form-control'
                      id='inputAddress2'
                      name='message'
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      placeholder='Enter Message'
                      maxLength='250'
                      required
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    className='btn btn-primary contactcontent__submitbtn'
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className='contactcontent__right'>
                <div style={{ width: '100%', height: '100%' }}>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.709705737251!2d50.03523231451102!3d26.46508478558854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ff5c06e44ae3%3A0xa1159d2d5f816f2b!2sATECO%20TWI%20Training%20center!5e0!3m2!1sen!2s!4v1614080200198!5m2!1sen!2s'
                    style={{ border: '0', width: '100%', height: '100%' }}
                    allowfullscreen=''
                    loading='lazy'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContactUs;
