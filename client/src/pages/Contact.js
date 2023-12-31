import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contact">
        <div className="col-md-6">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center"> Contact US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime 24/7
            available
          </p>
          <p className="mt-3">
            <BiMailSend />
            :www.help@ecoomerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />
            :161-2023456
          </p>
          <p className="mt-3">
            <BiSupport />
            :1800-0000-0000 (toll-Free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
