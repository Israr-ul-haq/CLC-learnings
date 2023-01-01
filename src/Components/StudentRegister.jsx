import React, { Component } from 'react';
import WOW from 'wowjs';
import axios from 'axios';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import Select, { components } from 'react-select';
import SelectSearch from 'react-select-search';
import { APIBaseURL } from '../shared/APIBaseURL';
import Menu from './Menu';
let countriesSelect = [];
let statesSelect = [];
let citiesSelect = [];

class StudentRegister extends Component {
  constructor(props) {
    super(props);
    if (this.props.history.location.state === undefined) {
      this.state = {
        selectedGrade: '',
        selectedSubjects: '',
        selectedCurriculum: '',
        countries: [],
        countryStates: [],
        stateCities: [],
        isFilled: false,
        image: '',
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        selectedState: '',
        city: '',
        whatsAppNo: '',
        dOB: '',
        school: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentWhatsAppNo: '',
        loading: false,
        disabledState: true,
        disabledCity: true,
      };
      this.props.history.push('/Curriculum');
      // toast.error("Please select Curriclum, Grades and Subject First.");
    } else {
      this.state = {
        selectedGrade: this.props.history.location.state.selectedGrade,
        selectedSubjects: this.props.history.location.state.selectedSubjects,
        selectedCurriculum:
          this.props.history.location.state.selectedCurriculum,
        countries: [],
        countryStates: [],
        stateCities: [],
        isFilled: false,
        image: '',
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        selectedState: '',
        city: '',
        whatsAppNo: '',
        dOB: '',
        school: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentWhatsAppNo: '',
        loading: false,
        disabledState: true,
        disabledCity: true,
      };
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCity = this.handleCity.bind(this);
  }

  handleInputChange(event) {
    debugger;
    if (event.target.type === 'file') {
      this.setState({
        fakeImage: URL.createObjectURL(event.target.files[0]),
      });

      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    debugger;
    if (target.id === 'country') {
      this.handleState(event.target.value);
    } else if (target.id === 'selectedState') {
      this.handleCity(event.target.value);
    }
  }

  handleCountryChange = (data) => {
    this.setState({ country: data.value });
    this.handleState(data.value);
  };

  handleStateChange = (data) => {
    this.setState({ selectedState: data.value });
    this.handleCity(data.value);
  };

  handleCityChange = (data) => {
    this.setState({ city: data.value });
    // this.handleCity(data.value);
  };

  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    let bas64img = btoa(binaryString);
    this.setState({ image: bas64img });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });

    if (this.state.image.length === 0) {
      this.setState({ loading: false });
      console.log(this.state.image.length);
      toast.error('Please add your image!');
    } else {
      const student = {
        GradeName: this.state.selectedGrade,
        SelectedSubjects: this.state.selectedSubjects,
        CurriculumName: this.state.selectedCurriculum,
        Image: this.state.image,
        Email: this.state.email,
        ReturningUser: this.state.isFilled,
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        Country: this.state.country,
        State: this.state.selectedState,
        City: this.state.city,
        WhatsAppNumber: this.state.whatsAppNo,
        DOB: this.state.dOB,
        School: this.state.school,
        P_FirstName: this.state.parentFirstName,
        P_LastName: this.state.parentLastName,
        P_Email: this.state.parentEmail,
        P_WAPhoneNumber: this.state.parentWhatsAppNo,
      };
      axios
        .post(`${APIBaseURL}/api/WebApis/PostStudentWeb`, student, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.Status === true) {
            this.setState({ loading: false });
            window.scrollTo(0, 0);
            this.props.history.push('/');
            toast.success('Successfully Added!');
            this.setState({
              selectedGrade: '',
              selectedSubjects: '',
              selectedCurriculum: '',
              isFilled: false,
              image: '',
              img: '',
              firstName: '',
              lastName: '',
              email: '',
              country: '',
              selectedState: '',
              city: '',
              whatsAppNo: '',
              dOB: '',
              school: '',
              parentFirstName: '',
              parentLastName: '',
              parentEmail: '',
              parentWhatsAppNo: '',
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
  }

  handleState(countryName) {
    // this.setState({ loading: true });
    this.setState({ disabledState: true });
    fetch(`https://geodata.solutions/restapi?country=${countryName}`)
      .then((res) => res.json())
      .then((result) => {
        statesSelect = [];
        this.setState({ countryStates: [] });
        let el = [...this.state.countryStates];
        for (
          let index = 0;
          index < result.details.regionalBlocs.length;
          index++
        ) {
          el.push(result.details.regionalBlocs[index].state_name);
          statesSelect.push({
            value: result.details.regionalBlocs[index].state_name,
            label: result.details.regionalBlocs[index].state_name,
          });
        }
        this.setState({ countryStates: el });
        this.setState({ disabledState: false });
        // this.setState({ loading: false });
      });
  }

  handleCity(stateName) {
    // this.setState({ loading: true });
    this.setState({ disabledCity: true });
    const countryName = this.state.country;
    fetch(
      `https://geodata.solutions/restapi?country=${countryName}&state=${stateName}`
    )
      .then((res) => res.json())
      .then((result) => {
        citiesSelect = [];
        let obj = Object.keys(result);
        obj.pop();
        this.setState({ stateCities: [] });
        let el = [...this.state.stateCities];
        for (let index = 0; index < obj.length; index++) {
          el.push(result[index].city_name);
          citiesSelect.push({
            value: result[index].city_name,
            label: result[index].city_name,
          });
        }
        if (stateName === 'England') {
          el.push('Manchester');
          el.push('London');
        }
        this.setState({ stateCities: el });
        this.setState({ disabledCity: false });
        // this.setState({ loading: false });
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
        console.log(result);
        countriesSelect = [];
        let obj = Object.keys(result);
        obj.pop();
        this.setState({ countries: [] });
        let arr = [...this.state.countries];

        for (let index = 0; index < obj.length; index++) {
          arr.push(result[index].country_name);
          countriesSelect.push({
            value: result[index].country_name,
            label: (
              <div>
                <img
                  className='countryflag'
                  src={
                    './assets/images/' +
                    result[index].country_name.toLowerCase() +
                    '.jpg'
                  }
                />{' '}
                {result[index].country_name}
              </div>
            ),
          });
        }
        debugger;
        this.setState({ countries: arr });
        this.setState({ loading: false });
      });
  }

  render() {
    const img = this.state.image;
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
            <section className='Progress'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='glyphprogress'>
                      <div className='connecting-line'></div>
                      <ul>
                        <li>
                          <span className='glyphstep'>
                            <i className='glyphicon glyphicon-user'></i>
                            <span className='step-text'>Curriculum</span>
                          </span>
                        </li>
                        <li>
                          <span className='glyphstep'>
                            <i className='glyphicon glyphicon-phone'></i>
                            <span className='step-text'>Class</span>
                          </span>
                        </li>
                        <li>
                          <span className='glyphstep'>
                            <i className='glyphicon glyphicon-envelope'></i>
                            <span className='step-text'>Subject</span>
                          </span>
                        </li>
                        <li className='remaining'>
                          <span className='glyphstep'>
                            <i className='glyphicon glyphicon-envelope'></i>
                            <span className='step-text'>Register</span>
                          </span>
                        </li>
                      </ul>
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
                      <div className='form-group col-md-12'>
                        <div className='options d-block'>
                          <div className='custom-control custom-checkbox  d-inline'>
                            <input
                              type='checkbox'
                              className='custom-control-input'
                              id='customCheck1'
                              name='isFilled'
                              checked={this.state.isFilled}
                              onChange={this.handleInputChange}
                            />
                            <label
                              className='custom-control-label'
                              htmlFor='customCheck1'
                            >
                              Have you filled the form before ?
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className='form-group registernow__formgroup col-md-12 mb-0'></div>

                      <div className='form-group registernow__formgroup col-md-12'>
                        <label htmlFor='file-upload'>Upload Picture</label>
                        <label
                          htmlFor='et_pb_contact_brand_file_request_0'
                          className='et_pb_contact_form_label'
                        ></label>
                        <input
                          type='file'
                          id='et_pb_contact_brand_file_request_0'
                          className='file-upload'
                          accept='image/*'
                          src={`data:image/png;base64,${this.state.image}`}
                          name='image'
                          onChange={this.handleInputChange}
                        />
                        {img === '' ? (
                          <div></div>
                        ) : (
                          <img
                            src={`data:image/png;base64,${this.state.image}`}
                            disabled
                            className='img-thumbnail'
                            style={{
                              width: '107px',
                              height: '107px',
                              objectFit: 'cover',
                            }}
                          />
                        )}
                      </div>
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
                        <label htmlFor='country'>
                          Country<span className='text-danger'> *</span>
                        </label>
                        <Select
                          options={countriesSelect}
                          defaultValue='Pakistan'
                          name='country'
                          id='country'
                          required
                          onChange={this.handleCountryChange}
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

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='selectedState'>
                          State<span className='text-danger'> *</span>
                        </label>
                        <Select
                          options={statesSelect}
                          defaultValue='Pakistan'
                          name='selectedState'
                          id='selectedState'
                          required
                          onChange={this.handleStateChange}
                        />
                        {/* <select
                          className="form-control"
                          id="selectedState"
                          name="selectedState"
                          value={this.state.selectedState}
                          onChange={this.handleInputChange}
                          required
                          disabled={this.state.disabledState}
                        >
                          <option value="">Select State</option>
                          {this.state.countryStates
                            .sort()
                            .map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                        </select> */}
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputcity'>
                          City<span className='text-danger'> *</span>
                        </label>
                        <Select
                          options={citiesSelect}
                          defaultValue='Pakistan'
                          name='city'
                          id='inputcity'
                          required
                          onChange={this.handleCityChange}
                        />
                        {/* <select
                          className="form-control"
                          id="inputcity"
                          value={this.state.city}
                          name="city"
                          onChange={this.handleInputChange}
                          disabled={this.state.disabledCity}
                        >
                          <option value="">Select City</option>
                          {this.state.stateCities.sort().map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select> */}
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputWhatsapp'>
                          Whatsapp Number<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='inputWhatsapp'
                          placeholder='Enter Your Whatsapp Number'
                          required
                          name='whatsAppNo'
                          value={this.state.whatsAppNo}
                          onChange={this.handleInputChange}
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6 '>
                        <div id='date-picker-container'></div>
                        <label htmlFor='date'>Date Of Birth</label>
                        <input
                          type='text'
                          className='form-control datepicker1'
                          data-provide='datepicker'
                          id='date'
                          name='dOB'
                          placeholder='mm/dd/yyyy'
                          value={this.state.dOB}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputSchool'>School</label>
                        <input
                          type='text'
                          name='school'
                          className='form-control'
                          id='inputSchool'
                          placeholder='Enter School name'
                          value={this.state.school}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <h2 className='registernow__title mt-5 mb-5'>
                      <span className='span-black'>parent/guardian</span>{' '}
                      Information
                    </h2>

                    <div className='form-row registernow__formrow'>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputParentName'>
                          First Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          name='parentFirstName'
                          className='form-control'
                          id='inputParentName'
                          placeholder='Enter First Name'
                          required
                          value={this.state.parentFirstName}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputParentLastName'>
                          Last Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          name='parentLastName'
                          className='form-control'
                          id='inputParentLastName'
                          placeholder='Enter Last Name'
                          required
                          value={this.state.parentLastName}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputParentEmail'>
                          Email<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='email'
                          name='parentEmail'
                          className='form-control'
                          id='inputParentEmail'
                          placeholder='Enter Email'
                          required
                          value={this.state.parentEmail}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputParentWhatsapp'>
                          Whatsapp Number<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='number'
                          name='parentWhatsAppNo'
                          className='form-control'
                          id='inputParentWhatsapp'
                          placeholder='Enter Whatsapp Number'
                          required
                          value={this.state.parentWhatsAppNo}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary registernow__submitbtn mt-3 mb-5'
                    >
                      Submit
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

export default StudentRegister;
