import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
function Enquire() {
  const [enquiry, setEnquiry] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://admin.clconlinelearning.com/api/WebApis/SaveEnquiry', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiry),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.Id !== 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Enquiry Saved!',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        }
        setEnquiry({ FirstName: '', LastName: '', Email: '', Phone: '' });
      });
  };
  return (
    <div id='enquire'>
      <form
        className='form registernow__form'
        onSubmit={(event) => handleSubmit(event)}
      >
        <section className='registernow ' style={{ background: '#DAF0DD' }}>
          <div className='container'>
            <div className='registernow__content'>
              <h2 className='registernow__title'>
                <span className='span-black'>ENQUIRE NOW</span>
              </h2>
              <p
                style={{
                  marginBottom: '45px',
                  fontFamily: 'Poppins',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: '#263844',
                }}
              >
                To find out more about CLC Online Learning, call our team, or
                complete the form below.
              </p>

              <div className='form-row registernow__formrow'>
                <div className='form-group registernow__formgroup col-md-6'>
                  <label htmlFor='inputName'>
                    First Name<span className='text-danger'> *</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputName'
                    name='fullName'
                    placeholder='Enter First Name'
                    required
                    value={enquiry.FirstName}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.FirstName = e.target.value;
                      setEnquiry(c);
                    }}
                  />
                </div>
                <div className='form-group registernow__formgroup col-md-6'>
                  <label htmlFor='inputName'>
                    Last Name<span className='text-danger'> *</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputName'
                    name='fullName'
                    placeholder='Enter Last Name'
                    required
                    value={enquiry.LastName}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.LastName = e.target.value;
                      setEnquiry(c);
                    }}
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
                    value={enquiry.Email}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.Email = e.target.value;
                      setEnquiry(c);
                    }}
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
                    required
                    value={enquiry.Phone}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.Phone = e.target.value;
                      setEnquiry(c);
                    }}
                  />
                </div>
                <div className='form-group registernow__formgroup col-md-12 mb-0'>
                  <button
                    type='submit'
                    className='btn btn-primary registernow__submitbtn mt-0'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Enquire;
