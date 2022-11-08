import React, { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { SocialIcon } from "react-social-icons";

import "./contacts.scss";

const Contact = () => {
  const { sendForm, isFormSubmitted, loading } = useContext(DataContext);

  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    message: " ",
  });

  const { username, email, message } = formData;
  const empty = !username || !email || !message;

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.name]: e.target.value.toLowerCase(),
    });
  };

  const clearForm = () => {
    setFormData({
      name: " ",
      email: " ",
      message: " ",
    });
  };

  const handleSubmit = () => {
    if (empty) return;
    sendForm(formData);
    clearForm();
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
              fgColor="#00cccc"
              bgColor="transparent"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: "solid 2px #00cccc",
              }}
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
              fgColor="#00cccc"
              bgColor="transparent"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: "solid 2px #00cccc",
              }}
            />
            <a href="tel:+33677674552" className="tech-text">
              +33(0)6 77 67 45 52
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <>
            <form className="contact__form">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  data-name="username"
                  value={username || ""}
                  onChange={handleChangeInput}
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  data-name="email"
                  value={email || ""}
                  onChange={handleChangeInput}
                />
              </div>
              <textarea
                placeholder="Your Message*"
                value={message || ""}
                data-name="message"
                onChange={handleChangeInput}
              />
              <button className="button" type="button" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </form>
            <div className="contact__form_disclaimer">
              <p className="tech-text">
                * I do not share your personal details with anyone
              </p>
              <p className="tech-text">** All fields are required</p>
            </div>
          </>
        ) : (
          <div className="contact__thanks">
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
              fgColor="#00cccc"
              bgColor="transparent"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: "solid 2px #00cccc",
              }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/alena-guillaume/"
              target="_blank"
              rel="noreferrer"
              fgColor="#00cccc"
              bgColor="transparent"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: "solid 2px #00cccc",
              }}
            />
            <SocialIcon
              url="https://t.me/alenagm"
              target="_blank"
              rel="noreferrer"
              fgColor="#00cccc"
              bgColor="transparent"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: "solid 2px #00cccc",
              }}
            />
            <SocialIcon
              url="https://www.instagram.com/alena_bergelv/"
              target="_blank"
              rel="noreferrer"
              fgColor="#00cccc"
              bgColor="transparent"
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                border: "solid 2px #00cccc",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
