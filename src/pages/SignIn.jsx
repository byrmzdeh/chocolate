import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import { LinkContainer } from "react-router-bootstrap";
import { LangContext } from "../context/LangContext";
import CustomAlert from "../components/CustomAlert";

const SignIn = () => {
  const [lang] = useContext(LangContext);
  const navigate = useNavigate();
  const [alertState, setAlertState] = useState("none");

  const customAlert = () => {
    if (alertState !== "none") {
      setTimeout(() => {
        setAlertState("")
      }, 10000);
      if (alertState === "gap") {
        return <CustomAlert text="Fill the gap" />;
      }
      if (alertState === "wrong") {
        return <CustomAlert text="Wrong Email or Password !" />;
      }
      if (alertState === "success") {
        return <CustomAlert text="Sucess " />;
      }
    }
  };

  const admin = [
    {
      user_mail: "aydan2003@gmail.com",
      user_name: "Aydan",
      user_pass: "2003",
      user_status: "admin",
    },
  ];

  var users = [
    {
      user_mail: "aydan@gmail.com",
      user_name: "Aydan",
      user_pass: "123",
      user_status: "user",
    },
  ];

  // if (!localStorage.getItem("users")) {
  //   users = admin;
  // } else {

  //   users.push(JSON.parse(localStorage.getItem("users")));
  //   console.log(users);
  //   users.push(...admin);

  // }

  console.log(users);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = [...users, ...admin].find((user) => user.user_mail === email);
    console.log(currentUser, "userDefined");
    if (!email || !pass) {
      setAlertState("gap");
    } else {
      if (currentUser === undefined) {
        setAlertState("wrong");
      } else {
        if (email === currentUser.user_mail && pass === currentUser.user_pass) {
          setAlertState("success");
          localStorage.setItem("user", JSON.stringify(currentUser));
          if (currentUser.user_status === "admin") {
            navigate("/");
          } else {
            navigate("/");
          }

          window.location.reload();
        } else {
          setAlertState("wrong");
        }
      }
    }
  };

  return (
    <>




      <div className="signin d-flex align-items-center justify-content-start flex-column py-5 authorization" style={{ backgroundColor: "#0f0e0f", height: "130vh" }}>
        <div class="sweet d-flex align-items-center justify-content-center mt-5">
          <div class="products d-flex align-items-center justify-content-center ">
            <p>{lang==='en'? 'Chocolate' :'Şokolad'}</p>
          </div>
          <div class="online text-center ">

            <h2 class="p2"> {lang==='en'? 'Sign In' :'Daxil Ol'}</h2><span>~~~~~~~~</span>
          </div>
        </div>
        <div className="col-lg-6 col-sm-4">


          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 py-5">
              <span className="input-group-text" id="basic-addon1">
                {lang === "en" ? "Email" : "Mail"}
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                {lang === "en" ? "Password" : "Şifrə"}
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn fw-bold text-light " style={{ backgroundColor: "#b88939" }}
              LOG In
            >
              {lang === "en" ? "Send" : "Göndər"}
            </button>
          </form>
         
            <a href="/signup" className="signup-btn mt-2 text-white ">{lang === "en" ? "Sign Up" : "Qeydiyyatdan Kec"}</a>
          

          {customAlert()}


        </div>
      </div>
    </>
  );
  
};

export default SignIn;





