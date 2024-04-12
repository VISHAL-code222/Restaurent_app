import React from "react";
import { useForm } from "react-hook-form";

import "../css/BookaTable.css";

function Book_A_Table({classname}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3009/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        alert("Booking is done");
        reset();
        handleOnSubmitEffect(); // 
      } else {
        throw new Error("Failed to book. Please try again later.");
      }
    } catch (error) {
      console.log("Error submitting reservation:", error);
      alert("Failed to book. Please try again later.");
    }
  };

  const handleOnSubmitEffect = () => {
 
    console.log("OnSubmit function called");
  };

 
  return (
    <div className={classname}>
      <main className="book-start">
        <h2
          style={{
            textAlign: "center",
            position: "relative",
            top: "20px",
            fontSize: "30px",
            fontStyle: "italic",
            fontFamily: "Lobster, sans-serif",
            fontWeight: "400",
            fontStyle: "normal",
            letterSpacing: "1px",
          }}
        >
          Book a Table
        </h2>
        <form   onSubmit={handleSubmit(onsubmit)}>
          <div className="first-box">
            <input
              type="text"
              id="name"
              placeholder="ENTER YOUR NAME"
              name="name"
              {...register("name", { required: true, minLength: 2 })}
            />
            {errors.name && (
              <div className="error">
                {errors.name.type === "required"
                  ? "Name is required"
                  : "Name must be at least 2 characters"}
              </div>
            )}
          </div>

          <div className="first-box">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            {errors.email && (
              <div className="error">
                {errors.email.type === "required"
                  ? "Email is required"
                  : "Invalid email format"}
              </div>
            )}
          </div>

          <div className="first-box">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="ENTER YOUR PHONE-NUMBER"
              {...register("phone", { required: true, minLength: 10 })}
            />
            {errors.phone && (
              <div className="error">
                {errors.phone.type === "required"
                  ? "Phone number is required"
                  : "Phone number must be at least 10 digits long"}
              </div>
            )}
          </div>

          <div className="first-box">
            <input
              type="date"
              id="date"
              name=" date"
              placeholder="DATE"
              {...register("date", { required: true })}
            />
            {errors.date && <div className="error">Date is required</div>}
          </div>

          <div className="first-box">
            <input
              type="time"
              id="time"
              name="time"

              placeholder="TIME"
              {...register("time", { required: true })}
            />
            {errors.time && <div className="error">Time is required</div>}
          </div>

          <div className="first-box">
            <input
              type="number"
              id="numberOfGuests"
              name=" numberOfGuests"
              placeholder="ENTER NUMBER OF PEOPLE"
              {...register("numberOfGuests", { required: true })}
            />
            {errors.numberOfGuests && (
              <div className="error">Number of guests is required</div>
            )}
          </div>

          <div className="first-box">
            <textarea
              id="message"
              name="message"
              cols={100}
              rows={5}
              style={{
                textAlign: "center",
                fontSize: "16px",
                borderRadius: "5px",
              }}
              placeholder="ENTER YOUR MESSAGE"
              {...register("message")}
            />
          </div>
          <button type="submit">SUBMIT YOUR ORDER</button>
        </form>
      </main>
     
    </div>
  );
}

export default Book_A_Table;
