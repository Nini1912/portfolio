import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_areh786",
        "template_r193sod",
        form.current,
        "200v8hk6nD2kn_zUx"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-center animate animate-flow-from-bottom">
          Contact Me
        </h2>
        <div className="row justify-content-center">
          <div
            className="col-lg-8 animate animate-flow-from-bottom"
            style={{ transitionDelay: "200ms" }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="from_name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="from_email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
