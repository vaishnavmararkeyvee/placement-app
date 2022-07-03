import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div className='text-center p-3' style={{backgroundColor:'grey'}}>
      <h5>ICT ACADEMY HQ</h5>
      <p>L-9, Thejaswini Building,Technopark,</p>
      <p> Thiruvananthapuram,Kerala,India.</p>
      <p>Mobile: 7594051437</p>
      © 2020 Copyright :
      <a className='text-dark' href="https://ictacademy.com/">@ictacademy.com</a>
    </div>
  );
}

export default Footer;