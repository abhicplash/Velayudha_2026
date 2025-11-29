import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="Home-container">
        <div className="text-wrapper">
          <span className="heading">Velayudha Pharmacy & Clinic</span>
          <span className="subtext">Embracing Holistic Healing Since 1948</span>
          <span className="desctitle">
            For over 70 years, Velayudha Pharmacy & Clinic has been a trusted
            name in Ayurveda, offering authentic treatments rooted in tradition
            to heal the cause, not just the symptoms.
          </span>
          <button className="homebtn">Explore our care</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
