import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Footer() {
  const [enquiry, setEnquiry] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://admin.clconlinelearning.com/api/WebApis/SaveEnquiry", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
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
            title: "Success!",
            text: "Email Saved!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        setEnquiry({ FirstName: "", LastName: "", Email: "", Phone: "" });
      });
  };
  return (
    <div>
      <div className="container">
        <div className="footer_section">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-12">
              <div className="footer-icon">
                <img
                  src="./assets/images/clc logo.png"
                  className="footer-image"
                  alt="logo"
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <ul className="footer_home_links">
                <li className="footer_link_list-1">
                  <div  className="footer_link_name_1">
                    Home
                  </div>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    LMS
                  </Link>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    How it works
                  </Link>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    Faculty
                  </Link>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    Curriculum
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <ul className="footer_home_links-1">
                <li className="footer_link_list-1">
                  <div  className="footer_link_name_1">
                    More info
                  </div>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    FAQ
                  </Link>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    Privacy policy
                  </Link>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    CLC online pay
                  </Link>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    Become a tutor
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <ul className="footer_home_links-2">
                <li className="footer_link_list-1">
                  <div to="/" className="footer_link_name_1">
                    Get Newsletter
                  </div>
                </li>
                <li className="footer_link_list">
                  <Link to="/" className="footer_link_name">
                    Get updates from CLC
                  </Link>
                </li>
                <li className="footer_link_list">
                  <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="footer_btn_container">
                      <label htmlFor="email"></label>
                      <input
                        value={enquiry.Email}
                        onChange={(e) => {
                          const c = { ...enquiry };
                          c.Email = e.target.value;
                          setEnquiry(c);
                        }}
                        type="text"
                        placeholder="Enter Email"
                        className="footer_email_input"
                        name="email"
                        required
                      />
                      <button type="submit" className="footer-submit-btn">
                        <img
                          src="./assets/images/Email button.png"
                          alt="email-btn"
                          className="footer_btn_img"
                        />
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="reserved-clc"></div>
        </div>
        <div className="reseved-content">
          <p className="reseved_text">
            All rights reserved by CLC online learning
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
