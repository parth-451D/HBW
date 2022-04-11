import React from "react";
import "../../styles/About.scss";
import BookWidget from "../booking/BookWidget";
const About = () => {
  return (
    <div className="About">
      <header
        className="header-main"
        style={{
          background:
            ' no-repeat center/cover url("/img/about/about_header.jpg")',
        }}
      >
        <div className="header-content">
          <h2 className="alt-font">About</h2>
          <p>Best user experience in our website</p>
        </div>

        <BookWidget />
      </header>
      <section className="desc">
        <h1 className="alt-font">Comfirt Rooms</h1>
        <span></span>
        <p>Book comfirt rooms at affordable price</p>
      </section>
      <section className="desc_photo">
        <div className="descLeft">
          <h1 className="alt-font">About our webapp</h1>
          <p>
This is MERN project for booking the hotel rooms.
which has been developed in frontend part in react and backend using node js and database is made of using MongoDB.
          </p>
        </div>
        <div className="descRight">
          <img src="/img/about/about.jpg" alt="about_farmer" />
        </div>
      </section>
      <section className="testimonials">
        <h1 className="alt-font">Testimonials</h1>
        <article className="testimonials-card">
          <div className="img-container">
            <img src="/img/about/about.jpg" alt="family_testimonial_1" />
          </div>
          <div className="quote-container">
            <p>
              <em>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                architecto deserunt, facilis optio modi sapiente eum eveniet
                molestias debitis, natus esse quidem nemo doloribus quaerat
                reiciendis aut ipsam? Accusamus, consectetur!
              </em>
            </p>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </article>
        <article className="testimonials-card reversed">
          <div className="img-container">
            <img src="/img/about/about_fam_2.jpg" alt="family_testimonial_2" />
          </div>
          <div className="quote-container">
            <p>
              <em>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eius fuga molestias iusto minus facilis deleniti hic
                aliquam sequi perspiciatis nihil praesentium eaque animi veniam
                voluptate maiores, vel magnam ea, libero enim. Ad aperiam illo
                unde vel iure maxime quo?
              </em>
            </p>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
