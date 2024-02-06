import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [mode, setMode] = useState("buyer"); // 'buyer' or 'seller'

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    conformPassword: "",
    location: "",
    shopName: "",
    images: [], // Use this state to store uploaded images
  });

  const signUp = () => {
    setShowLoader(true);
    createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setShowLoader(false);
        setFormFields({
          email: "",
          password: "",
          conformPassword: "",
          location: "",
          shopName: "",
          images: [],
          ownerName: "",
          phoneNumber: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const onChangeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    // Handle the uploaded images and update the state accordingly
  };

  return (
    <>
      <section className="signIn mb-5">
        <div class="breadcrumbWrapper res-hide">
          <div class="container-fluid">
            <ul class="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link to="/">Home</Link>{" "}
              </li>
              <li>SignUp</li>
            </ul>
          </div>
        </div>

        <div className="loginWrapper">
          <div className="card shadow">
            <Backdrop
              sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoader}
              className="formLoader"
            >
              <CircularProgress color="inherit" />
            </Backdrop>

            <h3>SignUp</h3>
            <form className="mt-4">
              <div className="toggle">
                <Button onClick={() => setMode("buyer")}>Buyer</Button>
                <Button onClick={() => setMode("seller")}>Seller</Button>
              </div>

              {mode === "buyer" && (
                <div className="buyer-form">
                  <div className="form-group mb-4 w-100">
                    <TextField
                      id="email"
                      type="email"
                      name="email"
                      label="Email"
                      className="w-100"
                      onChange={onChangeField}
                      value={formFields.email}
                    />
                  </div>
                  <div className="form-group mb-4 w-100">
                    <div className="position-relative">
                      <TextField
                        id="password"
                        type={showPassword === false ? "password" : "text"}
                        name="password"
                        label="Password"
                        className="w-100"
                        onChange={onChangeField}
                        value={formFields.password}
                      />
                      <Button
                        className="icon"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword === false ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="form-group mb-4 w-100">
                    <div className="position-relative">
                      <TextField
                        id="conformPassword"
                        type={showPassword1 === false ? "password" : "text"}
                        name="conformPassword"
                        label="Confirm Password"
                        className="w-100"
                        onChange={onChangeField}
                        value={formFields.conformPassword}
                      />
                      <Button
                        className="icon"
                        onClick={() => setShowPassword1(!showPassword1)}
                      >
                        {showPassword1 === false ? (
                          <VisibilityOffOutlinedIcon />
                        ) : (
                          <VisibilityOutlinedIcon />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {mode === "seller" && (
                <div className="seller-form">
                  <div className="form-group mb-4 w-100">
                    <TextField
                      id="name"
                      name="name"
                      label="name"
                      className="w-100"
                      onChange={onChangeField}
                      value={formFields.ownerName}
                    />
                  </div>
                  <div className="form-group mb-4 w-100">
                    <TextField
                      id="phone number"
                      name="Phone Number"
                      label="Phone Number"
                      className="w-100"
                      onChange={onChangeField}
                      value={formFields.phoneNumber}
                    />
                  </div>

                  <div className="form-group mb-4 w-100">
                    <TextField
                      id="location"
                      name="location"
                      label="Location"
                      className="w-100"
                      onChange={onChangeField}
                      value={formFields.location}
                    />
                  </div>
                  <div className="form-group mb-4 w-100">
                    <TextField
                      id="shopName"
                      name="shopName"
                      label="Shop Name"
                      className="w-100"
                      onChange={onChangeField}
                      value={formFields.shopName}
                    />
                  </div>
                  {/* Add file input for image upload */}
                  <div className="form-group mb-4 w-100">
                    <input
                      type="file"
                      id="images"
                      name="images"
                      multiple
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              )}

              <div className="form-group mt-5 mb-4 w-100">
                <Button className="btn btn-g btn-lg w-100" onClick={signUp}>
                  Sign Up
                </Button>
              </div>

              <p className="text-center">
                Already have an account
                <b>
                  {" "}
                  <Link to="/signIn">Sign In</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
