import React, { useState } from "react";
import emailjs from "emailjs-com";


function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vic8ikp', 'template_2gwhh2b', e.target, 'user_GG84CNzsZDVOhtV2WCoKA')
            .then((result) => {
                alert("Message send succesfully.")
                console.log(result.text);
            }, (error) => {
                alert("Message cannot send.");
                console.log(error.text);
            })
        }


    return (
        <section className="page-section c_contact" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <form id="contactForm" onSubmit={sendEmail}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <!-- Name input--> */}
                                <input class="form-control" id="name" name="name" type="text" placeholder="Your Name *"
                                    data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                                {/* <!-- Email address input--> */}
                                <input className="form-control" id="email" name="email" type="email" placeholder="Your Email *"
                                    data-sb-validations="required,email"/>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            {/* <div className="form-group mb-md-0">
                        <!-- Phone number input-->
                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone *"
                            data-sb-validations="required" />
                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.
                        </div>
                    </div> */}
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                {/* <!-- Message input--> */}
                                <textarea className="form-control" id="message" name="message" placeholder="Your Message *"
                                    data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required" >A message is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            {/* <Link
                        to="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</Link> */}
                        </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>

                    {/* <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled"
                    id="submitButton my_send_me" type="submit">Send Message</button></div> */}
                    <div className="text-center"><button className="btn btn-primary">SEND MESSAGE</button></div>
                </form>
            </div>
        </section>
    )
}
export default Contact;