import { event } from "jquery";
import React, { Component } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";
import { APIBaseURL } from "../shared/APIBaseURL";
import Menu from './Menu';
class StudentChallan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      feeAmount: "",
      formNumber: "",
      encryptFormNumber: "",
      loading: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }

  handleInputChange(event) {
    if (event.target.type === "file") {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    const target = event.target;
    const value = target.value;
    const name = target.name;

    var val = "";

    if (target.id === "inputChallanNumber") {
      console.log(value);
      val = btoa(value);
      console.log(val);

      this.setState({
        encryptFormNumber: val,
        [name]: value,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  _handleReaderLoaded(readerEvt) {
    let binaryString = readerEvt.target.result;
    let bas64img = btoa(binaryString);
    this.setState({ image: bas64img });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    if (this.state.image.length <= 0) {
      this.setState({ loading: false });
      window.scrollTo(0, 0);
      console.log(this.state.image, "if");
      toast.error("Please add your paid voucher/challan image!");
    } else {
      const challan = {
        Image: this.state.image,
        FeeAmount: this.state.encryptFormNumber,
        FormNumber: this.state.formNumber,
      };

      axios
        .post(`${APIBaseURL}/api/WebApis/PostPayThroughBank`, challan, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.Status === true) {
            this.setState({ loading: false });
            toast.success("Successfully Added!");
            window.scrollTo(0, 0);
            this.props.history.push("/");
            event.preventDefault();
            this.setState({
              image: "",
              feeAmount: "",
              formNumber: "",
            });
          } else {
            this.setState({ loading: false });
            window.scrollTo(0, 0);
            console.log(response, "Else");
            toast.error(response.data.Message);
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          window.scrollTo(0, 0);
          console.log(error, "catch");
          toast.error("There is an error!");
          toast.error(error);
        });
    }
  }

  render() {
    const img = this.state.image;
    return (
      <>

<Menu />
        {this.state.loading === true ? (
          <div
            style={{
              width: "100%",
              height: "150vh",
              backgroundColor: "white",
            }}
          >
            <div className="flex-loader">
              <ReactLoading
                type="spin"
                color="#2D933F"
                height={80}
                width={80}
                className="flex-item-loader"
              />
            </div>
          </div>
        ) : (
          <div>
            <section className="payment-title_section">
              <div className="container">
                <h2 className="sectiontitle payment_title wow focus-in-expand ">
                  Payment <span>Gateway</span>
                </h2>
              </div>
            </section>

            <section className="form-toggle mb-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <Link className="nav-link" to="/StudentPayment">
                      <a className="homemodal__btn btn btn-primary bank p-3">
                        Paid Through Online
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="payment_form bank-form pb-5">
              <div className="container">
                <div className="payment_form__content">
                  <h2 className="payment_form__title">
                    <span class="span-black">Challan </span>Details
                  </h2>
                  <form
                    className="form registernow__form"
                    onSubmit={(event) => this.handleSubmit(event)}
                  >
                    <div className="form-row registernow__formrow">
                      <div className="form-group registernow__formgroup col-md-12">
                        <label htmlFor="file-upload">Upload Challan</label>
                        <label
                          htmlFor="et_pb_contact_brand_file_request_0"
                          class="et_pb_contact_form_label"
                        ></label>
                        <input
                          type="file"
                          id="et_pb_contact_brand_file_request_0"
                          className="file-upload"
                          accept="image/*"
                          src={`data:image/png;base64,${this.state.image}`}
                          name="image"
                          onChange={this.handleInputChange}
                        />
                        {img === "" ? (
                          <div></div>
                        ) : (
                          <img
                            src={`data:image/png;base64,${this.state.image}`}
                            disabled
                            className="img-thumbnail"
                            style={{ width: "100px" }}
                          />
                        )}
                      </div>
                      <div className="form-group registernow__formgroup col-md-12 mb-0"></div>

                      <div className="form-group registernow__formgroup col-md-6">
                        <label htmlFor="inputAmout">
                          Fee Amount<span className="text-danger"> *</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputAmout"
                          name="feeAmount"
                          value={this.state.feeAmount}
                          onChange={this.handleInputChange}
                          placeholder="Enter Amount"
                          required
                        />
                      </div>
                      <div class="form-group registernow__formgroup col-md-6">
                        <label htmlFor="inputChallanNumber">
                          Challan Reference Number
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputChallanNumber"
                          name="formNumber"
                          value={this.state.formNumber}
                          onChange={this.handleInputChange}
                          placeholder="Enter Amount"
                          placeholder="Enter Reference Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="last_part">
                      <div className="payment_btn col-lg-6">
                        <button
                          type="submit"
                          className="btn btn-primary payment__submitbtn mb-5"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="image col-lg-6">
                        <img
                          className="doodle_vector"
                          src="assets/images/doodle8.png"
                          alt="doodle_vector"
                        />
                      </div>
                    </div>
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

export default StudentChallan;
