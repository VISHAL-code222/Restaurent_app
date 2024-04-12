import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Contact.css";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

function Contact({classname}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("FEEDBACK SUBMITTED")
    reset();
  };

  return (
    <div className={classname}>
      <div className="top_info">
        <h1 style={{textAlign:"center",position:"relative",top:"5px",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal",letterSpacing:"1px"}}>Contact-Us</h1>
        <p  style={{fontSize:"20px",fontStyle:"italic",fontFamily:"Lobster, sans-serif",fontWeight:"400",fontStyle:"normal",letterSpacing:"2px",position:"relative",bottom:"15px"}}>If you want to give any feedback, so please right it down below.</p>
      </div>
      <section className="iframe-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.6360554829823!2d73.68620703854118!3d24.614304633007293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e51cde507bf9%3A0x9ee04c4ed6c940b4!2sAdinath%20Nagar%2C%20Fatehpura%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1712653746224!5m2!1sen!2sin"
          style={{ border: "0px" }}
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <main className="all-things">
        <section className="contact-body">
          <div className="all-item">
            <div className="icon">
              <i class="bi bi-geo-alt"></i>
            </div>
            ,
            <div className="info">
              <h3>Location:</h3>
              <p>Bangalore,Karnataka-564000</p>
            </div>
          </div>
          <div className="all-item">
            <div className="icon">
              <i class="bi bi-clock"></i>
            </div>

            <div className="info">
              <h3>Open Hours:</h3>
              <p>Monday-Saturday</p>
              <p>11:00am-10:30pm</p>
            </div>
          </div>
          <div className="all-item">
            <div className="icon">
              <i class="bi bi-envelope"></i>
            </div>

            <div className="info">
              <h3>vishaljain@gmail.com</h3>
              <h3>vishal456@gmail.com</h3>
            </div>
          </div>
          <div className="all-item">
            <div className="icon">
              <i class="bi bi-telephone"></i>
            </div>
            <div className="info">
              <h3>+91-7728974564</h3>
              <h3>+91-6376257414</h3>
            </div>
          </div>
        </section>
      </main>

      <main className="main-second">
        <section className="contact-form">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="first-thing">
              <input
                type="text"
                name="full_name"
                placeholder="ENTER YOUR NAME"
                {...register("full_name", {
                  required: { value: true, message: "full name is required" },
                })}
              />
              {errors.full_name && <small>{errors.full_name.message}</small>}

              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL"
                {...register("email", {
                  required: { value: true, message: "full name is required" },
                })}
              />
              {errors.email && <small>{errors.email.message}</small>}
            </div>

            <div className="second-thing">
              <textarea
                name=""
                id=""
               
                placeholder="ENTER YOUR FEEDBACK"
                {...register("feedback")}
              />
            </div>
            <div className="btn">
              <button type="submit">SEND FEEDBACK</button>
            </div>
          </form>
        </section>
      </main>



      <Footer/>
    </div>
  );
}

export default Contact;
