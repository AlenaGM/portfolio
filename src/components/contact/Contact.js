import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

import { client } from "../../client";
import "./contacts.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="contact__title">
        <span>Contact. </span>Get in touch
      </h2>
      <div className="contact__container">
        <div className="contact__intro">
          <p>
            {" "}
            Dropping a line to say g’day, ask for my resume or see if we can
            build something amazing together? I’d love to hear from you! Fill in
            your info in the form below and I look forward to hearing from you!
          </p>
        </div>

        <div className="contact__phone-mail">
          <div className="card">
            <SocialIcon
              url="mailto:alena.guillaume@yahoo.com"
              target="_blank"
              rel="noreferrer"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <a href="mailto:alena.guillaume@yahoo.com" className="tech-text">
              alena.guillaume@yahoo.com
            </a>
          </div>
          <div className="card">
            <SocialIcon
              network="whatsapp"
              url="tel:+1 (123) 456-7890"
              target="_blank"
              rel="noreferrer"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <a href="tel:+33677674552" className="tech-text">
              +33(0)6 77 67 45 52
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="contact__form card">
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            <button className="button" type="button" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3>Thank you for getting in touch!</h3>
          </div>
        )}

        <div className="contact__social">
          <h4>Feeling social? Find me on these online spaces too!</h4>
          <div>
            <SocialIcon
              url="https://github.com/AlenaGM"
              target="_blank"
              rel="noreferrer"
              fgColor="#fff"
              style={{
                height: 38,
                width: 38,
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.18)",
              }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/alena-guillaume/"
              target="_blank"
              rel="noreferrer"
              fgColor="#fff"
              style={{
                height: 36,
                width: 36,
                borderRadius: "50%",
              }}
            />
            <SocialIcon
              url="https://t.me/alenagm"
              target="_blank"
              rel="noreferrer"
              fgColor="#fff"
              style={{
                height: 36,
                width: 36,
                borderRadius: "50%",
              }}
            />
            <SocialIcon
              url="https://www.instagram.com/alena_bergelv/"
              target="_blank"
              rel="noreferrer"
              fgColor="#fff"
              style={{
                height: 36,
                width: 36,
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
