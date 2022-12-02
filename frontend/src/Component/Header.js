import React from 'react'
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
  {/* <!-- Header Section --> */}
  <div className="header">
    <Navbar />
    <section className="hero-section">
      <main>
        <div className="hero-text">
          <h1>Welcome to My Coaching Learning Center</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            tempora quae, dicta, similique ipsum qui repellat beatae doloribus
            nisi fugit alias corporis, debitis omnis vel quam unde placeat
            autem harum!
          </p>
        </div>
      </main>
    </section>
  </div>

    </>
  )
}
