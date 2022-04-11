import React from "react";
import { Link } from "react-router-dom";
import BookWidget from "../booking/BookWidget";
import "../../styles/Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <header
        className="header-main"
        style={{
          background: ' no-repeat center/cover url("/img/home/home.jpg")',
        }}
      >
        <BookWidget />
      </header>

      <section className="desc">
        <h1 className="alt-font">Welcome to Comfirt Rooms</h1>
        <p>
          Experience the best user interface and functionality for booking the
          various rooms.
        </p>
      </section>
      <section className="desc_main">
        <article className="descLeft">
          <div className="bg-light"></div>
          <h1 className="alt-font">Luxury Rooms</h1>
          <p>
            Luxury room features: High-quality furnishings with opulent,
            expensive touches, attention to aesthetic detail, a quiet room with
            fresh air, original art on the walls, windows that open, robes and
            slippers, adequate storage, hangers, desk, reading chair, safe,
            good-size flat-screen TV, iPhone/iPod dock, coffee maker,
            full-length mirror, effective heating/AC system…And of course a King
            bed with a good mattress, high-quality sheets and a variety of
            pillow types (or a pillow menu)!
          </p>
          <Link to="/rooms">
            <button className="btn contrast">Discover More</button>
          </Link>
        </article>
        <div className="descRight">
          <img src="/img/home/home_resort.jpg" alt="home_resort" />
        </div>
      </section>
    </div>
  );
};

export default Home;
