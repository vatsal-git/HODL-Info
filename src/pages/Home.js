import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import Trade from '../components/Trade';
import img1 from '../img/bigimg1.PNG';
import img2 from '../img/bigimg2.PNG';

const Home = () => (
  <main id="home">
    <Navbar />
    <Trade />

    <a href="https://finstreet.in/" className="big-img">
      <img src={img1} alt="big-img" />
    </a>

    <Table />
    <a href="https://ftx.com/" className="big-img">
      <img src={img2} alt="big-img" />
    </a>

    <hr />

    <Footer />

    <section id="sticky">
      <button type="button" className="btn sticky-btn">
        Add hodlineinfo to home screen
      </button>
    </section>
  </main>
);

export default Home;
