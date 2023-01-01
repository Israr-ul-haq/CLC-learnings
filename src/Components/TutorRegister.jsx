import React, { Component } from 'react';
import WOW from 'wowjs';
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { GradeList } from '../shared/GradesList';
import { SubjectList } from '../shared/SubjectList';
import toast from 'react-hot-toast';
import ReactLoading from 'react-loading';
import { APIBaseURL } from '../shared/APIBaseURL';
import Menu from './Menu';
const options = [
  { value: 'Sunday', label: 'Sunday' },
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
];

const drgreeLevel = [
  { value: 'Associate degree', label: 'Associate degree' },
  { value: "Bachelor's degree", label: "Bachelor's degree" },
  { value: "Master's degree", label: "Master's degree" },
  { value: 'Doctoral degree', label: 'Doctoral degree' },
];

const animatedComponents = makeAnimated();

class TutorRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      countryStates: [],
      stateCities: [],
      degreeLevel: '',
      dataGrade: GradeList,
      dataSubject: SubjectList,
      selectedGrade: '',
      selectedSubjects: '',
      selectedCurriculum: '',
      teachDays: '',
      fullName: '',
      lastDegreeName: '',
      universityName: '',
      email: '',
      skypeId: '',
      phone: '',
      country: '',
      selectedState: '',
      city: '',
      nationality: '',
      date: '',
      address: '',
      language: '',
      hear: '',
      Onlinexperience: '',
      Overexperience: '',
      teachOnline: '',
      devices: '',
      organization: '',
      gender: '',
      Profteacher: '',
      subjectexperience: '',
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCity = this.handleCity.bind(this);
  }

  handleGrade(input) {
    let arr = [...this.state.selectedGrade];
    if (input.isSelected === false) {
      input.isSelected = true;
      this.setState((this.dataGrade = input));
      arr.push({ id: input.id, name: input.name });
      this.setState({ selectedGrade: arr });
    } else {
      input.isSelected = false;
      this.setState((this.dataGrade = input));
      let data = arr.filter((x) => x.id !== input.id);
      this.setState({ selectedGrade: data });
    }
  }

  handleSubject(input) {
    let arr = [...this.state.selectedSubjects];
    if (input.isSelected === false) {
      input.isSelected = true;
      this.setState((this.dataSubject = input));
      arr.push({ id: input.id, name: input.name });
      this.setState({ selectedSubjects: arr });
    } else {
      input.isSelected = false;
      this.setState((this.dataSubject = input));
      let data = arr.filter((x) => x.id !== input.id);
      this.setState({ selectedSubjects: data });
    }
  }

  handleChangedegreelevel = (degreeLevel) => {
    this.setState({ degreeLevel: degreeLevel });
  };

  handleChange = (teachDays) => {
    this.setState({ teachDays: teachDays });
  };

  handleChangeGrade = (selectedGrade) => {
    this.setState({ selectedGrade: selectedGrade });
  };

  handleChangeSubjects = (selectedSubjects) => {
    this.setState({ selectedSubjects: selectedSubjects });
  };

  handleInputChange(event) {
    const target = event.target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    if (target.id === 'country') {
      this.handleState(event.target.value);
    } else if (target.id === 'selectedState') {
      this.handleCity(event.target.value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    if (
      this.state.selectedGrade.length <= 0 ||
      this.state.selectedGrade === ''
    ) {
      this.setState({ loading: false });
      window.scrollTo(0, 0);
      console.log(this.state.selectedGrade, 'if 1');
      toast.error('Please select minimum one grade level!');
    } else if (
      this.state.selectedSubjects === '' ||
      this.state.selectedSubjects.length === 0
    ) {
      this.setState({ loading: false });
      window.scrollTo(0, 0);
      console.log(this.state.selectedSubjects, 'else if');
      toast.error('Please select minimum one subject!');
    } else if (this.state.selectedSubjects.length > 2) {
      this.setState({ loading: false });
      window.scrollTo(0, 0);
      console.log(this.state.selectedSubjects, 'else if 2');
      toast.error('Please select maximum two subjects!');
    } else {
      console.log('else');
      const tutor = {
        SelectedGradess: this.state.selectedGrade,
        SelectedSubjectss: this.state.selectedSubjects,
        TeachingDayss: this.state.teachDays,
        FirstName: this.state.fullName,
        Email: this.state.email,
        SkypeID: this.state.skypeId,
        WhatsAppNumber: this.state.phone,
        Country: this.state.country,
        Nationality: this.state.nationality,
        DOB: this.state.date,
        State: this.state.selectedState,
        City: this.state.city,
        Address: this.state.address,
        Language: this.state.language,
        HeardFrom: this.state.hear,
        OnlineTeachExp: this.state.Onlinexperience,
        OverallTeachExp: this.state.Overexperience,
        TeachingHrs: this.state.teachOnline,
        DeviceUse: this.state.devices,
        OrganizationTaught: this.state.organization,
        Gender: this.state.gender,
        ProfessionalTeach: this.state.Profteacher,
        SubjectTeachingExp: this.state.subjectexperience,
        UniversityName: this.state.universityName,
        DegreeLevels: this.state.degreeLevel,
        LastDegree: this.state.lastDegreeName,
      };
      console.log(tutor);
      axios
        .post(`${APIBaseURL}/api/WebApis/PostTutorWeb`, tutor, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.data.Status === true) {
            this.setState({ loading: false });
            toast.success('Successfully Added!');
            window.scrollTo(0, 0);
            this.props.history.push('/');
            event.preventDefault();
            this.setState({
              GradeName: [],
              SelectedSubjects: [],
              CurriculumName: '',
              teachDays: '',
              fullName: '',
              email: '',
              skypeId: '',
              phone: '',
              country: '',
              selectedState: '',
              nationality: '',
              date: '',
              address: '',
              language: '',
              hear: '',
              Onlinexperience: '',
              Overexperience: '',
              teachOnline: '',
              devices: '',
              organization: '',
              gender: '',
              Profteacher: '',
              subjectexperience: '',
              universityName: '',
              degreeLevel: '',
              lastDegreeName: '',
            });
          } else {
            this.setState({ loading: false });
            window.scrollTo(0, 0);
            console.log(response, 'Else');
            toast.error(response.data.Message);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          window.scrollTo(0, 0);
          console.log(error, 'Else');
          toast.error('There is an error!');
          toast.error(error);
        });
    }
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
        if (stateName === 'England') {
          el.push('Manchester');
          el.push('London');
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

  render() {
    return (
      <>
        <Menu />
        {this.state.loading === true ? (
          <div
            style={{ width: '100%', height: '150vh', backgroundColor: 'white' }}
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
            <form
              className='form registernow__form'
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <section>
                <div className='registerhero__content'>
                  <div
                    className='registerheroitem'
                    style={{
                      backgroundImage: 'url(./assets/images/banner_06@2x.png)',
                    }}
                  >
                    <div className='container h-100'>
                      <div className='registerheroitem__content h-100'>
                        <h1 className='registerheroitem__title registerheroitem__title--white wow text-focus-in'>
                          Register as a Tutor
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
                    <p className='mb-5'>
                      Join us and be a part of a passionate teaching team.
                    </p>

                    <div className='form-row registernow__formrow'>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputName'>
                          Full Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='inputName'
                          name='fullName'
                          placeholder='Enter Name'
                          value={this.state.fullName}
                          onChange={this.handleInputChange}
                          required
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
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='skype-id'>Skype ID</label>
                        <input
                          type='text'
                          className='form-control'
                          id='skype-id'
                          name='skypeId'
                          placeholder='Enter Skype ID'
                          value={this.state.skypeId}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='inputPhone'>
                          Phone Number<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='inputPhone'
                          name='phone'
                          placeholder='Enter Phone Number'
                          value={this.state.phone}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='country'>
                          Country<span className='text-danger'> *</span>
                        </label>
                        <select
                          className='form-control'
                          id='country'
                          name='country'
                          value={this.state.country}
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
                        <label htmlFor='city'>
                          City<span className='text-danger'> *</span>
                        </label>
                        <select
                          className='form-control'
                          id='city'
                          name='city'
                          value={this.state.city}
                          onChange={this.handleInputChange}
                        >
                          <option value=''>Select City</option>
                          {this.state.stateCities.sort().map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='nationality'>
                          Nationality<span className='text-danger'> *</span>
                        </label>
                        <select
                          className='form-control'
                          id='nationality'
                          name='nationality'
                          value={this.state.nationality}
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value=''>Select Country</option>
                          <option value='Afghanistan'>Afghanistan</option>
                          <option value='Åland Islands'>Åland Islands</option>
                          <option value='Albania'>Albania</option>
                          <option value='Algeria'>Algeria</option>
                          <option value='American Samoa'>American Samoa</option>
                          <option value='Andorra'>Andorra</option>
                          <option value='Angola'>Angola</option>
                          <option value='Anguilla'>Anguilla</option>
                          <option value='Antarctica'>Antarctica</option>
                          <option value='Antigua and Barbuda'>
                            Antigua and Barbuda
                          </option>
                          <option value='Argentina'>Argentina</option>
                          <option value='Armenia'>Armenia</option>
                          <option value='Aruba'>Aruba</option>
                          <option value='Australia'>Australia</option>
                          <option value='Austria'>Austria</option>
                          <option value='Azerbaijan'>Azerbaijan</option>
                          <option value='Bahamas'>Bahamas</option>
                          <option value='Bahrain'>Bahrain</option>
                          <option value='Bangladesh'>Bangladesh</option>
                          <option value='Barbados'>Barbados</option>
                          <option value='Belarus'>Belarus</option>
                          <option value='Belgium'>Belgium</option>
                          <option value='Belize'>Belize</option>
                          <option value='Benin'>Benin</option>
                          <option value='Bermuda'>Bermuda</option>
                          <option value='Bhutan'>Bhutan</option>
                          <option value='Bolivia'>Bolivia</option>
                          <option value='Bosnia and Herzegovina'>
                            Bosnia and Herzegovina
                          </option>
                          <option value='Botswana'>Botswana</option>
                          <option value='Bouvet Island'>Bouvet Island</option>
                          <option value='Brazil'>Brazil</option>
                          <option value='British Indian Ocean Territory'>
                            British Indian Ocean Territory
                          </option>
                          <option value='Brunei Darussalam'>
                            Brunei Darussalam
                          </option>
                          <option value='Bulgaria'>Bulgaria</option>
                          <option value='Burkina Faso'>Burkina Faso</option>
                          <option value='Burundi'>Burundi</option>
                          <option value='Cambodia'>Cambodia</option>
                          <option value='Cameroon'>Cameroon</option>
                          <option value='Canada'>Canada</option>
                          <option value='Cape Verde'>Cape Verde</option>
                          <option value='Cayman Islands'>Cayman Islands</option>
                          <option value='Central African Republic'>
                            Central African Republic
                          </option>
                          <option value='Chad'>Chad</option>
                          <option value='Chile'>Chile</option>
                          <option value='China'>China</option>
                          <option value='Christmas Island'>
                            Christmas Island
                          </option>
                          <option value='Cocos (Keeling) Islands'>
                            Cocos (Keeling) Islands
                          </option>
                          <option value='Colombia'>Colombia</option>
                          <option value='Comoros'>Comoros</option>
                          <option value='Congo'>Congo</option>
                          <option value='Congo, The Democratic Republic of The'>
                            Congo, The Democratic Republic of The
                          </option>
                          <option value='Cook Islands'>Cook Islands</option>
                          <option value='Costa Rica'>Costa Rica</option>
                          <option value="Cote D'ivoire">Cote D'ivoire</option>
                          <option value='Croatia'>Croatia</option>
                          <option value='Cuba'>Cuba</option>
                          <option value='Cyprus'>Cyprus</option>
                          <option value='Czech Republic'>Czech Republic</option>
                          <option value='Denmark'>Denmark</option>
                          <option value='Djibouti'>Djibouti</option>
                          <option value='Dominica'>Dominica</option>
                          <option value='Dominican Republic'>
                            Dominican Republic
                          </option>
                          <option value='Ecuador'>Ecuador</option>
                          <option value='Egypt'>Egypt</option>
                          <option value='El Salvador'>El Salvador</option>
                          <option value='Equatorial Guinea'>
                            Equatorial Guinea
                          </option>
                          <option value='Eritrea'>Eritrea</option>
                          <option value='Estonia'>Estonia</option>
                          <option value='Ethiopia'>Ethiopia</option>
                          <option value='Falkland Islands (Malvinas)'>
                            Falkland Islands (Malvinas)
                          </option>
                          <option value='Faroe Islands'>Faroe Islands</option>
                          <option value='Fiji'>Fiji</option>
                          <option value='Finland'>Finland</option>
                          <option value='France'>France</option>
                          <option value='French Guiana'>French Guiana</option>
                          <option value='French Polynesia'>
                            French Polynesia
                          </option>
                          <option value='French Southern Territories'>
                            French Southern Territories
                          </option>
                          <option value='Gabon'>Gabon</option>
                          <option value='Gambia'>Gambia</option>
                          <option value='Georgia'>Georgia</option>
                          <option value='Germany'>Germany</option>
                          <option value='Ghana'>Ghana</option>
                          <option value='Gibraltar'>Gibraltar</option>
                          <option value='Greece'>Greece</option>
                          <option value='Greenland'>Greenland</option>
                          <option value='Grenada'>Grenada</option>
                          <option value='Guadeloupe'>Guadeloupe</option>
                          <option value='Guam'>Guam</option>
                          <option value='Guatemala'>Guatemala</option>
                          <option value='Guernsey'>Guernsey</option>
                          <option value='Guinea'>Guinea</option>
                          <option value='Guinea-bissau'>Guinea-bissau</option>
                          <option value='Guyana'>Guyana</option>
                          <option value='Haiti'>Haiti</option>
                          <option value='Heard Island and Mcdonald Islands'>
                            Heard Island and Mcdonald Islands
                          </option>
                          <option value='Holy See (Vatican City State)'>
                            Holy See (Vatican City State)
                          </option>
                          <option value='Honduras'>Honduras</option>
                          <option value='Hong Kong'>Hong Kong</option>
                          <option value='Hungary'>Hungary</option>
                          <option value='Iceland'>Iceland</option>
                          <option value='India'>India</option>
                          <option value='Indonesia'>Indonesia</option>
                          <option value='Iran, Islamic Republic of'>
                            Iran, Islamic Republic of
                          </option>
                          <option value='Iraq'>Iraq</option>
                          <option value='Ireland'>Ireland</option>
                          <option value='Isle of Man'>Isle of Man</option>
                          <option value='Israel'>Israel</option>
                          <option value='Italy'>Italy</option>
                          <option value='Jamaica'>Jamaica</option>
                          <option value='Japan'>Japan</option>
                          <option value='Jersey'>Jersey</option>
                          <option value='Jordan'>Jordan</option>
                          <option value='Kazakhstan'>Kazakhstan</option>
                          <option value='Kenya'>Kenya</option>
                          <option value='Kiribati'>Kiribati</option>
                          <option value="Korea, Democratic People's Republic of">
                            Korea, Democratic People's Republic of
                          </option>
                          <option value='Korea, Republic of'>
                            Korea, Republic of
                          </option>
                          <option value='Kuwait'>Kuwait</option>
                          <option value='Kyrgyzstan'>Kyrgyzstan</option>
                          <option value="Lao People's Democratic Republic">
                            Lao People's Democratic Republic
                          </option>
                          <option value='Latvia'>Latvia</option>
                          <option value='Lebanon'>Lebanon</option>
                          <option value='Lesotho'>Lesotho</option>
                          <option value='Liberia'>Liberia</option>
                          <option value='Libyan Arab Jamahiriya'>
                            Libyan Arab Jamahiriya
                          </option>
                          <option value='Liechtenstein'>Liechtenstein</option>
                          <option value='Lithuania'>Lithuania</option>
                          <option value='Luxembourg'>Luxembourg</option>
                          <option value='Macao'>Macao</option>
                          <option value='Macedonia, The Former Yugoslav Republic of'>
                            Macedonia, The Former Yugoslav Republic of
                          </option>
                          <option value='Madagascar'>Madagascar</option>
                          <option value='Malawi'>Malawi</option>
                          <option value='Malaysia'>Malaysia</option>
                          <option value='Maldives'>Maldives</option>
                          <option value='Mali'>Mali</option>
                          <option value='Malta'>Malta</option>
                          <option value='Marshall Islands'>
                            Marshall Islands
                          </option>
                          <option value='Martinique'>Martinique</option>
                          <option value='Mauritania'>Mauritania</option>
                          <option value='Mauritius'>Mauritius</option>
                          <option value='Mayotte'>Mayotte</option>
                          <option value='Mexico'>Mexico</option>
                          <option value='Micronesia, Federated States of'>
                            Micronesia, Federated States of
                          </option>
                          <option value='Moldova, Republic of'>
                            Moldova, Republic of
                          </option>
                          <option value='Monaco'>Monaco</option>
                          <option value='Mongolia'>Mongolia</option>
                          <option value='Montenegro'>Montenegro</option>
                          <option value='Montserrat'>Montserrat</option>
                          <option value='Morocco'>Morocco</option>
                          <option value='Mozambique'>Mozambique</option>
                          <option value='Myanmar'>Myanmar</option>
                          <option value='Namibia'>Namibia</option>
                          <option value='Nauru'>Nauru</option>
                          <option value='Nepal'>Nepal</option>
                          <option value='Netherlands'>Netherlands</option>
                          <option value='Netherlands Antilles'>
                            Netherlands Antilles
                          </option>
                          <option value='New Caledonia'>New Caledonia</option>
                          <option value='New Zealand'>New Zealand</option>
                          <option value='Nicaragua'>Nicaragua</option>
                          <option value='Niger'>Niger</option>
                          <option value='Nigeria'>Nigeria</option>
                          <option value='Niue'>Niue</option>
                          <option value='Norfolk Island'>Norfolk Island</option>
                          <option value='Northern Mariana Islands'>
                            Northern Mariana Islands
                          </option>
                          <option value='Norway'>Norway</option>
                          <option value='Oman'>Oman</option>
                          <option value='Pakistan'>Pakistan</option>
                          <option value='Palau'>Palau</option>
                          <option value='Palestinian Territory, Occupied'>
                            Palestinian Territory, Occupied
                          </option>
                          <option value='Panama'>Panama</option>
                          <option value='Papua New Guinea'>
                            Papua New Guinea
                          </option>
                          <option value='Paraguay'>Paraguay</option>
                          <option value='Peru'>Peru</option>
                          <option value='Philippines'>Philippines</option>
                          <option value='Pitcairn'>Pitcairn</option>
                          <option value='Poland'>Poland</option>
                          <option value='Portugal'>Portugal</option>
                          <option value='Puerto Rico'>Puerto Rico</option>
                          <option value='Qatar'>Qatar</option>
                          <option value='Reunion'>Reunion</option>
                          <option value='Romania'>Romania</option>
                          <option value='Russian Federation'>
                            Russian Federation
                          </option>
                          <option value='Rwanda'>Rwanda</option>
                          <option value='Saint Helena'>Saint Helena</option>
                          <option value='Saint Kitts and Nevis'>
                            Saint Kitts and Nevis
                          </option>
                          <option value='Saint Lucia'>Saint Lucia</option>
                          <option value='Saint Pierre and Miquelon'>
                            Saint Pierre and Miquelon
                          </option>
                          <option value='Saint Vincent and The Grenadines'>
                            Saint Vincent and The Grenadines
                          </option>
                          <option value='Samoa'>Samoa</option>
                          <option value='San Marino'>San Marino</option>
                          <option value='Sao Tome and Principe'>
                            Sao Tome and Principe
                          </option>
                          <option value='Saudi Arabia'>Saudi Arabia</option>
                          <option value='Senegal'>Senegal</option>
                          <option value='Serbia'>Serbia</option>
                          <option value='Seychelles'>Seychelles</option>
                          <option value='Sierra Leone'>Sierra Leone</option>
                          <option value='Singapore'>Singapore</option>
                          <option value='Slovakia'>Slovakia</option>
                          <option value='Slovenia'>Slovenia</option>
                          <option value='Solomon Islands'>
                            Solomon Islands
                          </option>
                          <option value='Somalia'>Somalia</option>
                          <option value='South Africa'>South Africa</option>
                          <option value='South Georgia and The South Sandwich Islands'>
                            South Georgia and The South Sandwich Islands
                          </option>
                          <option value='Spain'>Spain</option>
                          <option value='Sri Lanka'>Sri Lanka</option>
                          <option value='Sudan'>Sudan</option>
                          <option value='Suriname'>Suriname</option>
                          <option value='Svalbard and Jan Mayen'>
                            Svalbard and Jan Mayen
                          </option>
                          <option value='Swaziland'>Swaziland</option>
                          <option value='Sweden'>Sweden</option>
                          <option value='Switzerland'>Switzerland</option>
                          <option value='Syrian Arab Republic'>
                            Syrian Arab Republic
                          </option>
                          <option value='Taiwan, Province of China'>
                            Taiwan, Province of China
                          </option>
                          <option value='Tajikistan'>Tajikistan</option>
                          <option value='Tanzania, United Republic of'>
                            Tanzania, United Republic of
                          </option>
                          <option value='Thailand'>Thailand</option>
                          <option value='Timor-leste'>Timor-leste</option>
                          <option value='Togo'>Togo</option>
                          <option value='Tokelau'>Tokelau</option>
                          <option value='Tonga'>Tonga</option>
                          <option value='Trinidad and Tobago'>
                            Trinidad and Tobago
                          </option>
                          <option value='Tunisia'>Tunisia</option>
                          <option value='Turkey'>Turkey</option>
                          <option value='Turkmenistan'>Turkmenistan</option>
                          <option value='Turks and Caicos Islands'>
                            Turks and Caicos Islands
                          </option>
                          <option value='Tuvalu'>Tuvalu</option>
                          <option value='Uganda'>Uganda</option>
                          <option value='Ukraine'>Ukraine</option>
                          <option value='United Arab Emirates'>
                            United Arab Emirates
                          </option>
                          <option value='United Kingdom'>United Kingdom</option>
                          <option value='United States'>United States</option>
                          <option value='United States Minor Outlying Islands'>
                            United States Minor Outlying Islands
                          </option>
                          <option value='Uruguay'>Uruguay</option>
                          <option value='Uzbekistan'>Uzbekistan</option>
                          <option value='Vanuatu'>Vanuatu</option>
                          <option value='Venezuela'>Venezuela</option>
                          <option value='Viet Nam'>Viet Nam</option>
                          <option value='Virgin Islands, British'>
                            Virgin Islands, British
                          </option>
                          <option value='Virgin Islands, U.S.'>
                            Virgin Islands, U.S.
                          </option>
                          <option value='Wallis and Futuna'>
                            Wallis and Futuna
                          </option>
                          <option value='Western Sahara'>Western Sahara</option>
                          <option value='Yemen'>Yemen</option>
                          <option value='Zambia'>Zambia</option>
                          <option value='Zimbabwe'>Zimbabwe</option>
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <div id='date-picker-container'></div>
                        <label htmlFor='date'>
                          Date Of Birth<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control datepicker1'
                          data-provide='datepicker'
                          id='date'
                          name='date'
                          placeholder='mm/dd/yyyy'
                          value={this.state.date}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='language'>
                          Language<span className='text-danger'> *</span>
                        </label>
                        <select
                          className='form-control'
                          name='language'
                          id='language'
                          value={this.state.language}
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value=''>Select Language</option>
                          <option value='Afar'>Afar</option>
                          <option value='Abkhazian'>Abkhazian</option>
                          <option value='Avestan'>Avestan</option>
                          <option value='Afrikaans'>Afrikaans</option>
                          <option value='Akan'>Akan</option>
                          <option value='Amharic'>Amharic</option>
                          <option value='Aragonese'>Aragonese</option>
                          <option value='Arabic'>Arabic</option>
                          <option value='Assamese'>Assamese</option>
                          <option value='Avaric'>Avaric</option>
                          <option value='Aymara'>Aymara</option>
                          <option value='Azerbaijani'>Azerbaijani</option>
                          <option value='Bashkir'>Bashkir</option>
                          <option value='Belarusian'>Belarusian</option>
                          <option value='Bulgarian'>Bulgarian</option>
                          <option value='Bihari languages'>
                            Bihari languages
                          </option>
                          <option value='Bambara'>Bambara</option>
                          <option value='Bislama'>Bislama</option>
                          <option value='Bengali'>Bengali</option>
                          <option value='Tibetan'>Tibetan</option>
                          <option value='Breton'>Breton</option>
                          <option value='Bosnian'>Bosnian</option>
                          <option value='Catalan; Valencian'>
                            Catalan; Valencian
                          </option>
                          <option value='Chechen'>Chechen</option>
                          <option value='Chamorro'>Chamorro</option>
                          <option value='Corsican'>Corsican</option>
                          <option value='Cree'>Cree</option>
                          <option value='Czech'>Czech</option>
                          <option value='Church Slavic'>Church Slavic</option>
                          <option value='Chuvash'>Chuvash</option>
                          <option value='Welsh'>Welsh</option>
                          <option value='Danish'>Danish</option>
                          <option value='German'>German</option>
                          <option value='Divehi; Dhivehi; Maldivian'>
                            Divehi; Dhivehi; Maldivian
                          </option>
                          <option value='Dzongkha'>Dzongkha</option>
                          <option value='Ewe'>Ewe</option>
                          <option value='Greek, Modern (1453-)'>
                            Greek, Modern (1453-)
                          </option>
                          <option value='English'>English</option>
                          <option value='Esperanto'>Esperanto</option>
                          <option value='Spanish; Castilian'>
                            Spanish; Castilian
                          </option>
                          <option value='Estonian'>Estonian</option>
                          <option value='Basque'>Basque</option>
                          <option value='Persian'>Persian</option>
                          <option value='Fulah'>Fulah</option>
                          <option value='Finnish'>Finnish</option>
                          <option value='Fijian'>Fijian</option>
                          <option value='Faroese'>Faroese</option>
                          <option value='French'>French</option>
                          <option value='Western Frisian'>
                            Western Frisian
                          </option>
                          <option value='Irish'>Irish</option>
                          <option value='Gaelic; Scottish Gaelic'>
                            Gaelic; Scottish Gaelic
                          </option>
                          <option value='Galician'>Galician</option>
                          <option value='Guarani'>Guarani</option>
                          <option value='Gujarati'>Gujarati</option>
                          <option value='Manx'>Manx</option>
                          <option value='Hausa'>Hausa</option>
                          <option value='Hebrew'>Hebrew</option>
                          <option value='Hindi'>Hindi</option>
                          <option value='Hiri Motu'>Hiri Motu</option>
                          <option value='Croatian'>Croatian</option>
                          <option value='Haitian; Haitian Creole'>
                            Haitian; Haitian Creole
                          </option>
                          <option value='Hungarian'>Hungarian</option>
                          <option value='Armenian'>Armenian</option>
                          <option value='Herero'>Herero</option>
                          <option
                            value='Interlingua (International Auxiliary Language
                        Association)'
                          >
                            Interlingua (International Auxiliary Language
                            Association)
                          </option>
                          <option value='Indonesian'>Indonesian</option>
                          <option value='Interlingue; Occidental'>
                            Interlingue; Occidental
                          </option>
                          <option value='Igbo'>Igbo</option>
                          <option value='Sichuan Yi; Nuosu'>
                            Sichuan Yi; Nuosu
                          </option>
                          <option value='Inupiaq'>Inupiaq</option>
                          <option value='Ido'>Ido</option>
                          <option value='Icelandic'>Icelandic</option>
                          <option value='Italian'>Italian</option>
                          <option value='Inuktitut'>Inuktitut</option>
                          <option value='Japanese'>Japanese</option>
                          <option value='Javanese'>Javanese</option>
                          <option value='Georgian'>Georgian</option>
                          <option value='Kongo'>Kongo</option>
                          <option value='Kikuyu; Gikuyu'>Kikuyu; Gikuyu</option>
                          <option value='Kuanyama; Kwanyama'>
                            Kuanyama; Kwanyama
                          </option>
                          <option value='Kazakh'>Kazakh</option>
                          <option value='Kalaallisut; Greenlandic'>
                            Kalaallisut; Greenlandic
                          </option>
                          <option value='Central Khmer'>Central Khmer</option>
                          <option value='Kannada'>Kannada</option>
                          <option value='Korean'>Korean</option>
                          <option value='Kanuri'>Kanuri</option>
                          <option value='Kashmiri'>Kashmiri</option>
                          <option value='Kurdish'>Kurdish</option>
                          <option value='Komi'>Komi</option>
                          <option value='Cornish'>Cornish</option>
                          <option value='Kirghiz; Kyrgyz'>
                            Kirghiz; Kyrgyz
                          </option>
                          <option value='Latin'>Latin</option>
                          <option value='Luxembourgish; Letzeburgesch'>
                            Luxembourgish; Letzeburgesch
                          </option>
                          <option value='Ganda'>Ganda</option>
                          <option value='Limburgan; Limburger; Limburgish'>
                            Limburgan; Limburger; Limburgish
                          </option>
                          <option value='Lingala'>Lingala</option>
                          <option value='Lao'>Lao</option>
                          <option value='Lithuanian'>Lithuanian</option>
                          <option value='Luba-Katanga'>Luba-Katanga</option>
                          <option value='Latvian'>Latvian</option>
                          <option value='Malagasy'>Malagasy</option>
                          <option value='Marshallese'>Marshallese</option>
                          <option value='Maori'>Maori</option>
                          <option value='Macedonian'>Macedonian</option>
                          <option value='Malayalam'>Malayalam</option>
                          <option value='Mongolian'>Mongolian</option>
                          <option value='Marathi'>Marathi</option>
                          <option value='Malay'>Malay</option>
                          <option value='Maltese'>Maltese</option>
                          <option value='Burmese'>Burmese</option>
                          <option value='Nauru'>Nauru</option>
                          <option value='Bokmål, Norwegian; Norwegian Bokmål'>
                            Bokmål, Norwegian; Norwegian Bokmål
                          </option>
                          <option value='Ndebele, North; North Ndebele'>
                            Ndebele, North; North Ndebele
                          </option>
                          <option value='Nepali'>Nepali</option>
                          <option value='Ndonga'>Ndonga</option>
                          <option value='Dutch; Flemish'>Dutch; Flemish</option>
                          <option value='Norwegian Nynorsk; Nynorsk, Norwegian'>
                            Norwegian Nynorsk; Nynorsk, Norwegian
                          </option>
                          <option value='Norwegian'>Norwegian</option>
                          <option value='Ndebele, South; South Ndebele'>
                            Ndebele, South; South Ndebele
                          </option>
                          <option value='Navajo; Navaho'>Navajo; Navaho</option>
                          <option value='Chichewa; Chewa; Nyanja'>
                            Chichewa; Chewa; Nyanja
                          </option>
                          <option value='Occitan (post 1500)'>
                            Occitan (post 1500)
                          </option>
                          <option value='Ojibwa'>Ojibwa</option>
                          <option value='Oromo'>Oromo</option>
                          <option value='Oriya'>Oriya</option>
                          <option value='Ossetian; Ossetic'>
                            Ossetian; Ossetic
                          </option>
                          <option value='Panjabi; Punjabi'>
                            Panjabi; Punjabi
                          </option>
                          <option value='Pali'>Pali</option>
                          <option value='Polish'>Polish</option>
                          <option value='Pushto; Pashto'>Pushto; Pashto</option>
                          <option value='Portuguese'>Portuguese</option>
                          <option value='Quechua'>Quechua</option>
                          <option value='Romansh'>Romansh</option>
                          <option value='Rundi'>Rundi</option>
                          <option value='Romanian; Moldavian; Moldovan'>
                            Romanian; Moldavian; Moldovan
                          </option>
                          <option value='Russian'>Russian</option>
                          <option value='Kinyarwanda'>Kinyarwanda</option>
                          <option value='Sanskrit'>Sanskrit</option>
                          <option value='Sardinian'>Sardinian</option>
                          <option value='Sindhi'>Sindhi</option>
                          <option value='Northern Sami'>Northern Sami</option>
                          <option value='Sango'>Sango</option>
                          <option value='Sinhala; Sinhalese'>
                            Sinhala; Sinhalese
                          </option>
                          <option value='Slovak'>Slovak</option>
                          <option value='Slovenian'>Slovenian</option>
                          <option value='Samoan'>Samoan</option>
                          <option value='Shona'>Shona</option>
                          <option value='Somali'>Somali</option>
                          <option value='Albanian'>Albanian</option>
                          <option value='Serbian'>Serbian</option>
                          <option value='Swati'>Swati</option>
                          <option value='Sotho, Southern'>
                            Sotho, Southern
                          </option>
                          <option value='Sundanese'>Sundanese</option>
                          <option value='Swedish'>Swedish</option>
                          <option value='Swahili'>Swahili</option>
                          <option value='Tamil'>Tamil</option>
                          <option value='Telugu'>Telugu</option>
                          <option value='Tajik'>Tajik</option>
                          <option value='Thai'>Thai</option>
                          <option value='Tigrinya'>Tigrinya</option>
                          <option value='Turkmen'>Turkmen</option>
                          <option value='Tagalog'>Tagalog</option>
                          <option value='Tswana'>Tswana</option>
                          <option value='Tonga (Tonga Islands)'>
                            Tonga (Tonga Islands)
                          </option>
                          <option value='Turkish'>Turkish</option>
                          <option value='Tsonga'>Tsonga</option>
                          <option value='Tatar'>Tatar</option>
                          <option value='Twi'>Twi</option>
                          <option value='Tahitian'>Tahitian</option>
                          <option value='Uighur; Uyghur'>Uighur; Uyghur</option>
                          <option value='Ukrainian'>Ukrainian</option>
                          <option value='Urdu'>Urdu</option>
                          <option value='Uzbek'>Uzbek</option>
                          <option value='Venda'>Venda</option>
                          <option value='Vietnamese'>Vietnamese</option>
                          <option value='Volapük'>Volapük</option>
                          <option value='Walloon'>Walloon</option>
                          <option value='Wolof'>Wolof</option>
                          <option value='Xhosa'>Xhosa</option>
                          <option value='Yiddish'>Yiddish</option>
                          <option value='Yoruba'>Yoruba</option>
                          <option value='Zhuang; Chuang'>Zhuang; Chuang</option>
                          <option value='Chinese'>Chinese</option>
                          <option value='Zulu'>Zulu</option>
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='degreeLevel'>
                          Degree Level<span className='text-danger'> *</span>
                        </label>
                        <Select
                          className='selectMulti'
                          id='degreeLevel'
                          name='degreeLevel'
                          components={animatedComponents}
                          value={this.state.degreeLevel}
                          onChange={this.handleChangedegreelevel}
                          options={drgreeLevel}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='lastDegreeName'>
                          Last Degree Name
                          <span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='lastDegreeName'
                          name='lastDegreeName'
                          placeholder='Last Degree Name'
                          value={this.state.lastDegreeName}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='universityName'>
                          University Name<span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='universityName'
                          name='universityName'
                          placeholder='University Name'
                          value={this.state.universityName}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='teaching-days'>
                          Preferable Teaching Days
                          <span className='text-danger'> *</span>
                        </label>
                        <Select
                          className='selectMulti'
                          id='teaching-days'
                          name='teachDays'
                          isMulti
                          components={animatedComponents}
                          value={this.state.teachDays}
                          onChange={this.handleChange}
                          options={options}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='how-you-hear'>
                          How did you hear about us?
                          <span className='text-danger'> *</span>
                        </label>
                        <select
                          className='form-control'
                          name='hear'
                          id='how-you-hear'
                          value={this.state.hear}
                          onChange={this.handleInputChange}
                          required
                        >
                          <option value=''>Choose</option>
                          <option value='Social Media'>Social Media</option>
                          <option value='Tv Advertisment'>
                            Tv Advertisment
                          </option>
                          <option value='Any Friend'>Any Friend</option>
                        </select>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='experience'>
                          Overall Teaching Experience
                          <span className='text-danger'> *</span>
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='experience'
                          name='Overexperience'
                          placeholder='Enter Number'
                          value={this.state.Overexperience}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='experience'>
                          Online Teaching Experience
                          <span className='text-danger'> *</span>
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='experience'
                          name='Onlinexperience'
                          placeholder='Enter Number'
                          value={this.state.Onlinexperience}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='hours-per-week'>
                          How many hours per week you can teach online
                          <span className='text-danger'> *</span>
                        </label>
                        <input
                          type='number'
                          className='form-control'
                          id='hours-per-week'
                          name='teachOnline'
                          placeholder='Your Answer'
                          value={this.state.teachOnline}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='devices'>
                          Device you will use to teach online
                          <span className='text-danger'> *</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='devices'
                          name='devices'
                          placeholder='Your Answer'
                          value={this.state.devices}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6 mb-md-0'>
                        <label htmlFor='organisations'>
                          Organisations where you have taught
                          <span className='text-danger'> *</span>
                        </label>
                        <textarea
                          className='form-control'
                          id='address'
                          name='organization'
                          rows='2'
                          placeholder='Your Answer'
                          value={this.state.organization}
                          onChange={this.handleInputChange}
                          required
                        ></textarea>
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='subject-ecperience'>
                          How long you have been teaching the subject that you
                          have chosen here to teach
                          <span className='text-danger'> *</span>
                        </label>
                        <input
                          type='Number'
                          className='form-control'
                          id='subject-experience'
                          name='subjectexperience'
                          placeholder='Your Answer'
                          radio={this.state.subjectexperience}
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-lg-4 col-md-6'>
                        <label htmlFor='professional' className='mt-4 level1'>
                          Are you a professional teacher?
                          <span className='text-danger'> *</span>
                          <div className='options d-block mt-3'>
                            <div className='custom-control custom-radio d-inline'>
                              <input
                                type='radio'
                                id='yes'
                                name='Profteacher'
                                value='true'
                                className='custom-control-input'
                                radio={this.state.Profteacher}
                                onChange={this.handleInputChange}
                                required
                              />
                              <label
                                className='custom-control-label'
                                htmlFor='yes'
                              >
                                Yes
                              </label>
                            </div>
                            <div className='custom-control custom-radio d-inline'>
                              <input
                                type='radio'
                                id='no'
                                name='Profteacher'
                                value='false'
                                className='custom-control-input'
                                radio={this.state.Profteacher}
                                onChange={this.handleInputChange}
                                required
                              />
                              <label
                                className='custom-control-label'
                                htmlFor='no'
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className='form-group registernow__formgroup_gender col-lg-2 col-md-6'>
                        <label htmlFor='gender' className='mt-4'>
                          Gender<span className='text-danger'> *</span>
                          <div className='options d-block mt-3'>
                            <div className='custom-control custom-radio d-inline'>
                              <input
                                type='radio'
                                id='male'
                                name='gender'
                                value='Male'
                                className='custom-control-input'
                                radio={this.state.gender}
                                onChange={this.handleInputChange}
                                required
                              />
                              <label
                                className='custom-control-label'
                                htmlFor='male'
                              >
                                Male
                              </label>
                            </div>
                            <div className='custom-control custom-radio d-inline'>
                              <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='Female'
                                className='custom-control-input'
                                radio={this.state.gender}
                                onChange={this.handleInputChange}
                                required
                              />
                              <label
                                className='custom-control-label'
                                htmlFor='female'
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className='form-group registernow__formgroup'>
                      <label htmlFor='address'>Address</label>
                      <textarea
                        className='form-control'
                        id='address'
                        name='address'
                        rows='3'
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        placeholder='Enter Your Address Here'
                        maxLength='300'
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>
              <section className='registernow pb-5 pt-0'>
                <div className='container'>
                  <div className='registernow__content'>
                    <h2 className='registernow__title'>
                      <span className='span-black'>Select</span> Option
                    </h2>
                    <div className='form-row registernow__formrow'>
                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='selectedGrade'>
                          Level that you want to teach
                          <span className='text-danger'> *</span>
                        </label>
                        <Select
                          className='selectMulti'
                          id='selectedGrade'
                          name='selectedGrade'
                          isMulti
                          components={animatedComponents}
                          value={this.state.selectedGrade}
                          onChange={this.handleChangeGrade}
                          options={this.state.dataGrade}
                          required
                        />
                      </div>

                      <div className='form-group registernow__formgroup col-md-6'>
                        <label htmlFor='selectedSubjects'>
                          Subject that you want to teach
                          <span className='text-danger'> *</span>
                        </label>
                        <Select
                          className='selectMulti'
                          id='selectedSubjects'
                          name='selectedSubjects'
                          isMulti
                          components={animatedComponents}
                          value={this.state.selectedSubjects}
                          onChange={this.handleChangeSubjects}
                          options={this.state.dataSubject}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <button
                        type='submit'
                        className='btn btn-primary registernow__submitbtn mt-3 mb-5'
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default TutorRegister;
