import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";
import {FiSend, fiSend} from 'react-icons/fi'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section">
    <h2 className="section_title">Get In <span>Touch</span></h2>

    <div className="contact_container container grid">
      <div className="contact_data">
        <h3 className="contact_title">Don't be Shy!</h3>
        <p className="contact_description">Feel free to get in touch with me. I am always open to discussing new 
        projects, creative ideas or opportunities to be a part of your vision</p>
        
        <div className="contact_info">
          <div className="info_item">
            <FaEnvelopeOpen className='info_icon'/>
            <div>
              <span className="info_title">Mail me </span>
              <h4 className="info_desc">anshujain8844@gmail.com</h4>
            </div>
          </div>
          <div className="info_item">
            <FaPhoneSquareAlt className='info_icon'/>
            <div>
              <span className="info_title">Call me </span>
              <h4 className="info_desc">+916377130289</h4>
            </div>
          </div>
        </div>

        <div className="contact_socials">
          <a href="https://instagram.com/ans_jain24?igshid=MzMyNGUyNmU2YQ==" className="contact_social-link" target='_blank'>
          <FaInstagram/>
          </a>
          <a href="https://github.com/ItsAnshujain" className="contact_social-link" target='_blank'>
          <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/anshu-jain-8453a8245/" className="contact_social-link" target='_blank'>
          <FaLinkedin/>
          </a>
          <a href="https://leetcode.com/Anshujain24/" className="contact_social-link" target='_blank'>
          <SiLeetcode/>
          </a>

        </div>
      </div>

      <form className="contact_form">
        <div className="form_input-group">
          <div className="form_input-div">
            <input type="text" placeholder='Your name' className='form-control'/>
          </div>
          <div className="form_input-div">
            <input type="email" placeholder='Your email' className='form-control'/>
          </div>
          <div className="form_input-div">
            <input type="text" placeholder='Your subject' className='form-control'/>
          </div>
        </div>
        <div className="form_input-div">
          <textarea type="text" placeholder='Your message' className='form-control textarea'></textarea>
        </div>
        <button className="button">
          Send message
          <span className="button_icon contact_button_icon">
            <FiSend/>
          </span>
        </button>

      </form>
    </div>
    </section>
  )
}

export default Contact
