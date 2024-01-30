import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";

// update button 

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/825018c8-24f4-4d92-96e5-b6dbc9b5d33e", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div className="w-full pb-12" id="contact">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <div className="p-6 flex flex-col md:flex-row justify-center gap-4 md:ml-16 lg:gap-16">
        <div className="lg:w-[40%]">
          <p className="flex gap-6 justify-between text-lg py-4 border-b-[1px] border-b-zinc-800">
            <span className="text-sm  font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Bhubaneswar, India
          </p>
          <p className="flex justify-between text-lg  py-4 border-b-[1px] border-b-zinc-800">
            <span className=" text-gray-700 text-sm  font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +91 7008473231
          </p>
        </div>
        <div className="lg:w-[40%]">
          <p className="flex justify-between  text-lg  py-4 border-b-[1px] border-b-zinc-800">
            <span className=" text-gray-700 text-sm  font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            aditya23jena@gmail.com
          </p>
          <p className="flex justify-between  text-lg  py-4 border-b-[1px] border-b-zinc-800">
            <span className=" text-gray-700 text-sm  font-medium px-2 rounded-md flex items-center justify-center">
              Status:
            </span>
            Open To Work
          </p>
        </div>
      </div>
      <div className="md:ml-16">
        {successMsg ? (
          <p className="text-center text-base p-20">
            {successMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/825018c8-24f4-4d92-96e5-b6dbc9b5d33e"
            method="POST"
            className="p-6 flex flex-col gap-6 md:w-[90%] mx-auto"
          >
            <div className="w-full flex flex-col lg:flex-row gap-4  justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600"
                    : "border-zinc-600"
                } w-full bg-transparent border-2 px-4 py-2 text-base outline-none`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600"
                    : "border-zinc-600"
                } w-full bg-transparent border-2 px-4 py-2 text-base outline-none`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 "
                  : "border-zinc-600"
              } w-full bg-transparent border-2 px-4 py-2 text-base  outline-none duration-300 resize-none`}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base flex items-center gap-1 self-center md:self-end
              text-yellow-500 hover:text-yellow-700 bg-[#3d3b2c] rounded-xl shadow-xl py-4 px-8 font-semibold w-[290px] justify-center"
            >
              Send Message
              <span className="mt-1">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
