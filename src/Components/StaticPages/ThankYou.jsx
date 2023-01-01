import React, { Component } from 'react';
import WOW from 'wowjs';
import Menu from '../Menu';
class ThankYou extends Component {
  state = {};
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
      <div>
        <Menu />

        <section
          className='whyclc'
          style={{ backgroundImage: `url(./assets/images/doodle.svg)` }}
        >
          <table
            align='center'
            border='0'
            cellpadding='0'
            cellspacing='0'
            width='600'
            style={{
              borderCollapse: 'collapse',
              padding: '100px',
              marginBottom: '50px',
              margin: '100px auto 30px auto ',
            }}
          >
            <tr>
              <td
                align='center'
                bgcolor='#fff'
                style={{ padding: '0px 0 30px 0' }}
              >
                <table
                  border='0'
                  cellpadding='0'
                  cellspacing='0'
                  width='100%'
                  style={{ borderCollapse: 'collapse' }}
                >
                  <tr>
                    <td width='40%' valign='top'>
                      <img
                        src='https://clconlinelearning.com/assets/images/left-background.png'
                        alt=''
                        width='100%'
                        height='auto'
                        style={{ display: 'block' }}
                      />
                    </td>
                    <td width='20%' valign='middle'>
                      <a href='https://clconlinelearning.com/' target='_blank'>
                        <img
                          src='https://clconlinelearning.com/assets/images/clc-logo.png'
                          alt='CLC Logo'
                          width='auto'
                          height='auto'
                          style={{ display: 'inline-block' }}
                        />
                      </a>
                    </td>
                    <td width='40%' valign='top'>
                      <img
                        src='https://clconlinelearning.com/assets/images/right-background.png'
                        alt=''
                        width='100%'
                        height='auto'
                        style={{ display: 'block' }}
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor='#ffffff'>
                <img
                  src='https://clconlinelearning.com/assets/images/divider.png'
                  alt=''
                  width='96%'
                  height='auto'
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </td>
            </tr>

            <tr>
              <td
                bgcolor='#ffffff'
                style={{
                  textAlign: 'center',
                  padding: '80px 0px',
                  fontFamily: 'sans-serif',
                }}
              >
                <h1
                  style={{
                    fontSize: '36px',
                    fontFamily: 'system-ui',
                    fontWeight: '700',
                  }}
                >
                  THANK YOU FOR REGISTERING WITH US.
                </h1>
                <h2
                  style={{
                    fontSize: '34px',
                    margin: '20px 0px',
                    fontWeight: '400',
                  }}
                >
                  Welcome on board!
                </h2>
                <p style={{ fontSize: '20px', marginTop: '60px' }}>
                  For more information please visit
                </p>
                <a
                  href='https://clconlinelearning.com/'
                  target='_blank'
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    background: '#2D933F',
                    borderRadius: '8px',
                    padding: '12px 30px',
                    display: 'inline-block',
                    marginTop: '0px',
                    font: 'normal 17px/25px sans-serif',
                    letterSpacing: '0.9px',
                  }}
                >
                  Visit Website
                </a>
              </td>
            </tr>

            <tr>
              <td bgcolor='#ECECEC' style={{ padding: '20px 20px' }}>
                <table
                  border='0'
                  cellpadding='0'
                  cellspacing='0'
                  width='100%'
                  style={{ borderCollapse: 'collapse' }}
                >
                  <tr>
                    <td align='left'>
                      <a href='https://clconlinelearning.com/' target='_blank'>
                        <img
                          src='https://clconlinelearning.com/assets/images/clc-logo-footer.png'
                          alt='Facebook.'
                          width='auto'
                          height='auto'
                          style={{ display: 'block' }}
                          border='0'
                        />
                      </a>
                    </td>

                    <td align='right'>
                      <table
                        border='0'
                        cellpadding='0'
                        cellspacing='0'
                        style={{ borderCollapse: 'collapse' }}
                      >
                        <tr>
                          <td>
                            <a
                              href='https://www.facebook.com/CLC-Online-Learning-101283078524871/'
                              target='_blank'
                            >
                              <img
                                src='https://clconlinelearning.com/assets/images/icon-facebook.png'
                                alt='Facebook.'
                                width='35'
                                height='35'
                                style={{ display: 'block' }}
                                border='0'
                              />
                            </a>
                          </td>
                          <td
                            style={{ fontSize: '0', lineHeight: '0' }}
                            width='10'
                          >
                            &nbsp;
                          </td>
                          <td>
                            <a
                              href='https://instagram.com/clconlinelearning?igshid=9kukks05w98p'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                src='https://clconlinelearning.com/assets/images/icon-instagram.png'
                                alt='Instagram.'
                                width='35'
                                height='35'
                                style={{ display: 'block' }}
                                border='0'
                              />
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}

export default ThankYou;
