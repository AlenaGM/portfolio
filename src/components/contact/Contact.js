import { SocialIcon } from "react-social-icons";
import React, { useState } from "react";
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
    <section className="app__contact">
      <h2>Contact</h2>
      <h3>Get In Touch</h3>
      <div>
        Dropping a line to say g’day, ask for my resume or see if we can build
        something amazing together? I’d love to hear from you! Fill in your info
        in the form below and I look forward to hearing from you! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Labore id debitis in
        architecto modi adipisci iusto accusamus aliquid ab aliquam fugiat
        dolore harum quidem, totam illo quam. Id magni dignissimos officiis nemo
        rerum provident, nesciunt error, corporis necessitatibus beatae incidunt
        doloremque voluptate dolor quia facere delectus minima. Vero, sunt iste?
      </div>
      <div className="app__contact_telmail">
        <div>
          <SocialIcon
            url="mailto:alena.guillaume@yahoo.com"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <a href="mailto:alena.guillaume@yahoo.com">
            alena.guillaume@yahoo.com
          </a>
        </div>
        <div>
          <SocialIcon
            network="whatsapp"
            url="tel:+1 (123) 456-7890"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <a href="tel:+33677674552">+33(0)6 77 67 45 52</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3>Thank you for getting in touch!</h3>
        </div>
      )}
      <div>
        <p>Feeling social? Find me on these online spaces too!</p>
        <div className="app__contact_social">
          <SocialIcon
            url="https://github.com/AlenaGM"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/alena-guillaume/"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://t.me/alenagm"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.discord.com/Alena24433#7658/"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/alena_bergelv/"
            target="_blank"
            rel="noreferrer"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
