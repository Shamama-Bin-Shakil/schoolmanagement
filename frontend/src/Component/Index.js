import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      {/* <!-- Header Section --> */}
      <div className="header">
        <div className="navbar" id="navbar">
          <div className="brand">
            <Link  to="/">
              <h2 style={{ color: "dodgerblue" }}>LoGo</h2>
            </Link>
          </div>
          <div className="menu">
            {localStorage.getItem("token") && (
              <li>
                <Link  to="/student/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

            <li>
              <Link  to="/">
                Home
              </Link>
            </li>
            <li>
              <Link  to="/service">
                Service
              </Link>
            </li>
            <li>
              <Link  to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link  to="/about">
                About
              </Link>
            </li>
          </div>
          {!localStorage.getItem("token") && (
            <div className="account">
              <Link  to="/sign">
                <button type="button" className="btn btn-primary">
                  Sign
                </button>
              </Link>
              <Link  to="/login">
                <button type="button" className="btn btn-secondary">
                  Login
                </button>
              </Link>
            </div>
          )}
          {/* <!-- <div className="burger"></div> --> */}
        </div>

        <section className="hero-section">
          <main>
            <div className="hero-text">
              <h1>Welcome to My Coaching Learning Center</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                tempora quae, dicta, similique ipsum qui repellat beatae
                doloribus nisi fugit alias corporis, debitis omnis vel quam unde
                placeat autem harum!
              </p>
            </div>
          </main>
        </section>
      </div>
      {/* <!-- First Section --> */}
      <section className="wrapper">
        <main>
          <div className="section-heading">
            <h1>
              Our <span className="fav-color">Service</span>
            </h1>
          </div>
          <div className="section-content">
            <div className="first-content">
              <div className="item">
                <div className="item-icon">
                  <ion-icon name="book-outline"></ion-icon>
                </div>
                <div className="item-heading">
                  <h1>Book Provide</h1>
                </div>
                <div className="item-content">
                  <p>
                    This institution provided book for learn, read and other
                    purpose.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-icon">
                  <ion-icon name="laptop-outline"></ion-icon>
                </div>
                <div className="item-heading">
                  <h1>Laptop Provide</h1>
                </div>
                <div className="item-content">
                  <p>
                    This institution provided laptop, pc for learn, understand
                    and other.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-icon">
                  <ion-icon name="share-social-outline"></ion-icon>
                </div>
                <div className="item-heading">
                  <h1>Share Knowledge</h1>
                </div>
                <div className="item-content">
                  <p>
                    Shares represent ownership of a company. When an individual
                    buys shares in your company, they become one of its owners.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
                <div className="item-heading">
                  <h1>Fast Growth</h1>
                </div>
                <div className="item-content">
                  <p>
                    Self-growth, sometimes referred to as “personal growth” or
                    “personal development,”
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-icon">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </div>
                <div className="item-heading">
                  <h1>Information Computer</h1>
                </div>
                <div className="item-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="item">
                <div className="item-icon">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                </div>
                <div className="item-heading">
                  <h1>Security Protection</h1>
                </div>
                <div className="item-content">
                  <p>
                    Security is protection from, or resilience against,
                    potential harm (or other unwanted coercive change) caused by
                    others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* <!-- Second Section --> */}
      <section className="wrapper">
        <main>
          <div className="section-heading">
            <h1>
              Our <span className="fav-color">Teacher</span>
            </h1>
          </div>
          <div className="section-content">
            <div className="second-content">
              <div className="item">
                <div className="side left-side">
                  <img src={require("../img/teacher1.png")} alt="" />
                </div>
                <div className="side right-side">
                  <h1 className="fav-color">Sir William</h1>
                  <p>
                    Computer teachers are responsible for teaching students
                    about the hardware and software used in modern computer
                    systems. They may also be tasked with helping students
                    develop their digital literacy skills, including how to use
                    a keyboard and mouse effectively, how to navigate a web
                    browser, etc.
                  </p>
                  <br />
                  <button className="btn btn-secondary">Contact Us</button>
                </div>
              </div>

              <div className="item item-reverse">
                <div className="side left-side">
                  <img src={require("../img/teacher2.png")} alt="" />
                </div>
                <div className="side right-side">
                  <h1 className="fav-color">Miss Charlotte</h1>
                  <p>
                    Web development refers in general to the tasks associated
                    with developing websites for hosting via intranet or
                    internet. The web development process includes web design,
                    web content development, client-side/server-side scripting
                    and network security configuration, among other tasks.
                  </p>
                  <br />
                  <button className="btn btn-secondary">Contact Us</button>
                </div>
              </div>

              <div className="item">
                <div className="side left-side">
                  <img src={require("../img/teacher3.png")} alt="" />
                </div>
                <div className="side right-side">
                  <h1 className="fav-color">Miss Isabella</h1>
                  <p>
                    Web development refers in general to the tasks associated
                    with developing websites for hosting via intranet or
                    internet. The web development process includes web design,
                    web content development, client-side/server-side scripting
                    and network security configuration, among other tasks.
                  </p>
                  <br />
                  <button className="btn btn-secondary">Contact Us</button>
                </div>
              </div>

              <div className="item item-reverse">
                <div className="side left-side">
                  <img src={require("../img/teacher4.png")} alt="" />
                </div>
                <div className="side right-side">
                  <h1 className="fav-color">Miss Sophia</h1>
                  <p>
                    Web development refers in general to the tasks associated
                    with developing websites for hosting via intranet or
                    internet. The web development process includes web design,
                    web content development, client-side/server-side scripting
                    and network security configuration, among other tasks.
                  </p>
                  <br />
                  <button className="btn btn-secondary">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* <!-- Third Section --> */}
      <section className="wrapper">
        <div className="third-content">
          <div className="item">
            <div className="feedback-icon">
              <ion-icon name="happy-outline"></ion-icon>
            </div>
            <div className="feedback-text">
              <h2>Happy Client</h2>
              <h3>100+</h3>
            </div>
          </div>

          <div className="item">
            <div className="feedback-icon">
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <div className="feedback-text">
              <h2>Students</h2>
              <h3>1K+</h3>
            </div>
          </div>

          <div className="item">
            <div className="feedback-icon">
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <div className="feedback-text">
              <h2>Share Link</h2>
              <h3>600+</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Fourth Section --> */}
      <section className="wrapper">
        <main>
          <div className="section-heading">
            <h1>
              Our <span className="fav-color">Place</span>
            </h1>
          </div>
          <div className="section-content">
            <div className="fourth-content">
              <div className="item item-1">
                <div className="img-layer">
                  <h2>Best Place</h2>
                </div>
              </div>

              <div className="item item-2">
                <div className="img-layer">
                  <h2>Best Teacher</h2>
                </div>
              </div>

              <div className="item item-3">
                <div className="img-layer">
                  <h2>Best Motivation</h2>
                </div>
              </div>

              <div className="item item-4">
                <div className="img-layer">
                  <h2>Best Practise</h2>
                </div>
              </div>

              <div className="item item-5">
                <div className="img-layer">
                  <h2>Best Playground</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* <!-- Fifth Section --> */}
      <section className="wrapper">
        <main>
          <div className="section-heading">
            <h1>
              Client <span className="fav-color">Feedback</span>
            </h1>
          </div>
          <div className="section-content">
            <div className="fifth-content">
              <div className="item">
                <p>
                  <span className="quote fav-color">"</span> Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Quos, in?
                  <span className="quote fav-color">"</span>
                </p>
              </div>
              <div className="item">
                <p>
                  <span className="quote fav-color">"</span> Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Quos, in?
                  <span className="quote fav-color">"</span>
                </p>
              </div>
              <div className="item">
                <p>
                  <span className="quote fav-color">"</span> Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Quos, in?
                  <span className="quote fav-color">"</span>
                </p>
              </div>
              <div className="item">
                <p>
                  <span className="quote fav-color">"</span> Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Quos, in?
                  <span className="quote fav-color">"</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* <!-- Footer Section --> */}
      <footer>
        <p>&copy; CopyRight Reserved in 2022</p>
      </footer>
    </>
  );
}
