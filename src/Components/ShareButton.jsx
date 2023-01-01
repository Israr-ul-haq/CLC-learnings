import React, { Component } from 'react';
import WOW from 'wowjs';
import '.././App.css';

class ShareButton extends Component {
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
      <>
        <div className='icon-bar'>
          <a
            href='https://www.facebook.com/CLC-Online-Learning-101283078524871/'
            target='_blank'
            className='facebook'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=+92 322 252 2521'
            target='_blank'
            className='whatsapp'
          >
            <i className='fab fa-whatsapp'></i>
          </a>
          <a
            href='https://instagram.com/clconlinelearning?igshid=9kukks05w98p'
            target='_blank'
            className='instagram'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <a
          href='https://api.whatsapp.com/send?phone=+92 322 252 2521.'
          className='float'
          target='_blank'
        >
          <i className='fab fa-whatsapp my-float'></i>
        </a>
      </>
    );
  }
}

export default ShareButton;
