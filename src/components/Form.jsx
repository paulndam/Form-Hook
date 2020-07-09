import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

const Form = (props) => {
  const [firstname, setfirstname] = useState("firstname");
  const [lastname, setlastname] = useState("lastname");
  const [email, setemail] = useState("email");
  const [password, setpassword] = useState("password");

  //making method to create our user

  const createUser = (e) => {
    e.preventDefault();
    //now line below will create our user
    const newUser = { firstname, lastname, email, password };
    console.log("Bien Venue", newUser);

    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");
  };

  // line below will be using html to implement our form

  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card bg-light mb-3">
            <div className="card-header">Register</div>
            <div class="card-body">
              <form onSubmit={createUser}>
                <div className="form-group">
                  <label for="firstname">First name</label>
                  <input
                    type="firstname"
                    className="form-control"
                    id="firstname"
                    aria-describedby="firstname"
                    onChange={(e) => setfirstname(e.target.value)}
                    // value="firstname"
                  />
                  <small
                    id="firstname"
                    className="form-text text-muted"
                  ></small>
                </div>

                <div className="form-group">
                  <label for="lastname">Last name</label>
                  <input
                    type="lastname"
                    className="form-control"
                    id="lastname"
                    aria-describedby="lastname"
                    onChange={(e) => setlastname(e.target.value)}
                    // value="lastname"
                  />
                  <small id="lastname" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    onChange={(e) => setemail(e.target.value)}
                    // value="email"
                  />
                  <small id="email" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    onChange={(e) => setpassword(e.target.value)}
                    // value="password"
                  />
                  <small id="password" className="form-text text-muted"></small>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={createUser}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-light mb-3">
            <div className="card-header">Log In</div>
            <div class="card-body">
              <form onSubmit={createUser}>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    onChange={(e) => setemail(e.target.value)}
                    //   value="email"
                  />
                  <small id="email" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    onChange={(e) => setpassword(e.target.value)}
                    //   value="password"
                  />
                  <small id="password" className="form-text text-muted"></small>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="row">
          <div className="col">
            <div id="cardtwo" class="card  text-white bg-dark mb-3">
              <div class="card-header">Your Form Data</div>
              <div class="card-body">
                <h5 class="card-title">...</h5>
                <p class="card-text">
                  <p>First name: {firstname}</p>
                  <p>Last name: {lastname}</p>
                  <p>Email: {email}</p>
                  <p>Password: {password}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
