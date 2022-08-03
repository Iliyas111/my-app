import React from "react";
import "./LoginPage.css";

const Loginpage = () => {
  return (
    <div className="main">
      <div className="first">
        <div>
          <img
            src="./images/Rectangle4580.png"
            alt=""
            className="Rectangle4580"
          />
        </div>
        <img src="./images/Logo.png" alt="" className="Logo" />
        <div className="first1">
          <img src="./images/Home.png" alt="" className="Home" />
          <img src="./images/Categories.png" alt="" className="Categories" />
          <img src="./images/Vector.png" alt="" className="Vector" />
          <img src="./images/AboutUs.png" alt="" className="AboutUs" />
          <img src="./images/Group19095.png" alt="" className="Group19095" />
          <img
            src="./images/Register-now.png"
            alt=""
            className="Register-now"
          />
        </div>
      </div>
      <div className="second">
        <img
          src="./images/Rectangle4585.png"
          alt=""
          className="Rectangle4585"
        />
        <img
          src="./images/Tabletlogin-amico1.png"
          alt=""
          className="Tabletlogin-amico1"
        />
      </div>
      <div className="third">
        <img
          src="./images/LogintoProsofos.png"
          alt=""
          className="LogintoProsofos"
        />
        <img
          src="./images/Please-login-using-your-credentials!.png"
          alt=""
          className="Please-Login"
        />
        <input
          type="text"
          placeholder="        Email"
          className="Rectangle175"
        />
        <input type="password"
          placeholder="         Password"
          className="Password"
        />

        <img
          src="./images/By-clicking-on-“Login”,you-agree-to-our-terms-&-conditions.png"
          alt=""
          className="Conditions"
        />
        <img
          src="./images/Rectangle4584.png"
          alt=""
          className="Rectangle4584"
        />
        <img src="./images/Login.png" alt="" className="Login" />
        {/* <img src="./images/Log-in.png" alt="" className="Log-in" /> */}
        <img
          src="./images/Forgot-Password_.png"
          alt=""
          className="Forgot-Password"
        />
        <img
          src="./images/Forgot-Username_.png"
          alt=""
          className="Forgot-Username"
        />
        <img src="./images/Line1.png" alt="" className="Line1" />
        <img src="./images/Or.png" alt="" className="Or" />
        <img src="./images/Line2.png" alt="" className="Line2" />
        {/* <img src="./images/Rectangle4587.png" alt="" className="Rectangle4587"/>
          <img src="./images/Rectangle4586.png" alt="" className="Rectangle4586"/> */}

        <button className="facebook">
          <img src="./images/Facebook.png" className="face" /> sign up with
          Facebook
        </button>
        <button className="google">
          {" "}
          <img src="./images/google-2015-seeklogo1.png" className="goog" /> sign
          up with Google
        </button>
      </div>
      <div className="email-rectangle"> </div>
      <img src="./images/Rectangle1.png" alt="" className="Rectangle1" />
      <img src="./images/Vector3.png" alt="" className="Vector3" />
      <img src="./images/Rectangle5.png" alt="" className="Rectangle5" />
      <img src="./images/Ellipse6.png" alt="" className="Ellipse6" />
      <img src="./images/Vector5.png" alt="" className="Vector5" />
      <img src="./images/Sign_in_squre.png" alt="" className="Sign_in_squre" />
    </div>
  );
};

export default Loginpage;
