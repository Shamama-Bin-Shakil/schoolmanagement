import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TopSideBar from './TopSideBar'

export default function AddStudent() {
  const host = `http://localhost:8080`
    const [detail, setDetail] = useState({
        name: "",
        email: "",
        password: "",
        conf_password: "",
        birth_date: "",
      });
      const EventHandle = (e) => {
        const { value, name } = e.target;
        setDetail((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      };
      const options = [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
      ];
    
      const [selected, setSelected] = useState(options[0].value);
      const handleChange = (e) => {
        setSelected(e.target.value);
      };

      
      const FormSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({name: detail.name, email: detail.email, password: detail.password, gender: selected, birth_date: detail.birth_date}),
        });
        const result = await response.json();
        console.log(result);
      };
  return (
    <div>
      <div className="admin-header">
      <TopSideBar />
      <div className="main-content">
        <div className="content">
          <div className="container-profile">
            <h2>Create Student Account</h2>
            <div className="contact-form">
          <form onSubmit={FormSubmit} autoComplete="off">
          <input
              type="text"
              value={detail.name}
              onChange={EventHandle}
              name="name"
              placeholder="Username"
            />
            <input
              type="email"
              onChange={EventHandle}
              value={detail.email}
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={EventHandle}
              name="password"
              value={detail.password}
              placeholder="Password"
            />
            <input
              type="password"
              className=""
              placeholder="Confirm Password"
              name="conf_password"
              onChange={EventHandle}
              value={detail.conf_password}
            />

            <select onChange={handleChange} value={selected}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.text}</option>
              ))}
            </select>

            <input
              type="date"
              value={detail.birth_date}
              onChange={EventHandle}
              name="birth_date"
              placeholder="Birth Of Date"
            />
            <button className="button btn-primary">Register</button>
            <br />
            <p>
              <Link to="/login">
                Already Account? Login
              </Link>
            </p>
          </form>
        </div>
       
          </div>
        </div>
      </div>

      </div>      
    </div>
  )
}
