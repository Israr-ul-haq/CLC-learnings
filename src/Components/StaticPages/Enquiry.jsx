import React, { Component,useState } from "react";

import Swal from 'sweetalert2';

function Enquiry() {
  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }



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
      <div>
        <div className="counter-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="enquiry-heading">
                  <h1 className="enquiry-headline">Enquire Now</h1>
                  <p className="enqury-para">
                    To find out more about CLC Learning, call our team, or
                    complete the form below.
                  </p>
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="enquiry-form">
                        <label htmlfor="fname"></label>
                        <input
                          type="text"
                          className="enquiry_fname-input"
                          placeholder="First Name*"
                          id="fname"
                          name="firstName"
                          required
                          value={enquiry.FirstName}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.FirstName = e.target.value;
                      setEnquiry(c);
                    }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="enquiry-form">
                        <label htmlfor="lname"></label>
                        <input
                         
                          type="text"
                          className="enquiry_fname-input"
                          placeholder="Last Name*"
                          id="lname"
                          name="lastName"
                          required
                          value={enquiry.LastName}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.LastName = e.target.value;
                      setEnquiry(c);
                    }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="enquiry-form">
                        <label htmlfor="Email"></label>
                        <input
                          type="email"
                          className="enquiry_fname-input"
                          placeholder="Enter Email*"
                          id="Email"
                          name="email"
  
                          required
                          value={enquiry.Email}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.Email = e.target.value;
                      setEnquiry(c);
                    }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="enquiry-form">
                        <label htmlfor="lname"></label>
                        <input
                         maxLength="11"
                          onInput={maxLengthCheck}
                          type="number"
                          className="enquiry_fname-input"
                          placeholder="Phone Number*"
                          required
                          value={enquiry.Phone}
                    onChange={(e) => {
                      const c = { ...enquiry };
                      c.Phone = e.target.value;
                      setEnquiry(c);
                    }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="enquiry-form">
                        <label htmlfor="message"></label>
                        <input
                          type="text"
                          className="enquiry_tname-input"
                          placeholder="Enter Message"
                          id="message"
                          name="message"
                          required
                          
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="enquiry-btn">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="enquiry_img_section">
                  <img
                    src="./assets/images/Capture.PNG"
                    className="enquiry-img"
                    alt="enquiry-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Enquiry;
