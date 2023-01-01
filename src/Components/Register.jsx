import React, { Component } from 'react';
import WOW from 'wowjs';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import Select, { components } from 'react-select';
import SelectSearch from 'react-select-search';
import { APIBaseURL } from '../shared/APIBaseURL';
import { GradeList } from '../shared/GradesList';
import InputMask from 'react-input-mask';
import Menu from './Menu';
let curriculumSelect = [];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    }).init();

    for (let i = 0; i < GradeList.length; i++) {
      curriculumSelect.push({
        value: GradeList[i].value,
        label: GradeList[i].label,
      });
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleCurriculumChange = (data) => {
    this.setState({ course: data.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });

    const student = {
      Email: this.state.email,
      FirstName: this.state.firstName,
      LastName: this.state.lastName,
      Phone: this.state.phone ?? '',
    };
    axios
      .post(`${APIBaseURL}/api/WebApis/SaveStudentInfo`, student, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data > 0) {
          this.setState({ loading: false });
          window.scrollTo(0, 0);
          this.props.history.push('/thank-you');
          toast.success('Successfully Added!');
          this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            curriculum: '',
          });
        } else {
          this.setState({ loading: false });
          window.scrollTo(0, 0);
          console.log(response, 'else');
          toast.error(response.data.Message);
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        window.scrollTo(0, 0);
        toast.error(error);
        console.log(error, 'catch');
      });
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
            <section className='registerhero'>
              <div className='registerhero__content'>
                <div
                  className='registerheroitem'
                  style={{
                    backgroundImage: 'url(./assets/images/banner_REGISTER.jpg)',
                  }}
                >
                  <div className='container h-100'>
                    <div className='registerheroitem__content h-100'>
                      <h1 className='registerheroitem__title registerheroitem__title--white wow text-focus-in'>
                        Register as a Student
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className='registernow pb-5'
              style={{ backgroundImage: 'url(./assets/images/doodle.svg)' }}
            >
              <div className='container'>
                <div className='registernow__content'>
                  <h2 className='registernow__title'>
                    <span className='span-black'>Register</span> Now
                  </h2>
                  <p className='mb-4'>
                    Join us and be a part of a CLC Online Learning.
                  </p>
                  <form
                    className='form registernow__form'
                    onSubmit={(event) => this.handleSubmit(event)}
                  >
                    <div className='form-row registernow__formrow'>
                      <div className='form-group registernow__formgroup col-md-12 mb-0'></div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputName'>
                          First Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='inputName'
                          placeholder='Enter First Name'
                          required
                          name='firstName'
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputLastName'>
                          Last Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='inputLastName'
                          name='lastName'
                          placeholder='Enter Last Name'
                          required
                          value={this.state.lastName}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputEmail'>
                          Email<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='inputEmail'
                          name='email'
                          placeholder='Enter Email'
                          required
                          value={this.state.email}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputPhone'>Phone</label>
                        <input
                          type='number'
                          className='form-control'
                          id='inputPhone'
                          name='phone'
                          placeholder='Enter Phone'
                          value={this.state.phone}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='country'>
                          Curriculum<span className='text-danger'> *</span>
                        </label>
                        <Select
                          options={curriculumSelect}
                          name='curriculum'
                          id='curriculum'
                          required
                          onChange={this.handleCurriculumChange}
                        />
                        {/* <select
                          className='form-control select21'
                          id='country'
                          required
                          value={this.state.country}
                          name='country'
                          onChange={this.handleInputChange}
                        >
                          <option value=''>Select Country</option>

                          {this.state.countries.sort().map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select> */}
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary registernow__submitbtn mt-3 mb-5'
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}

export default Register;
