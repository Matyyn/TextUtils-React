import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// imported for routers
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function based component
let name = "Mateen";
function App() {
  // prop is used here for color changing of the navbar
  const [mode, setmode] = useState("light");
  // toggle mode function
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert function will display the alert
      showAlert("Dark mode has been set", "success");
      document.title = "Text Utils: Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      // showAlert function will display the alert
      showAlert("Light mode has been set", "success");
      document.title = "Text Utils: Light Mode";
    }
  };
  //use State for alerts here alert is an object and setAlert is also an object
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 1500);
  };

  return (
    //Routing used here using routes and browser routes are not used so we are commenting it out


    // this is JSX 'html used as js' and use js inside the curly brackets and JSX use Camel case and JSX returns only one element
    <>
      {/* navbar component containing variables (props) */}
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        aboutUs="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* setup of the router here */}
      
        {/* <Routes> */}
          {/* for complete matching of components use exact path not path (uses partial matching) */}
          {/* <Route  exact path="/about" element={<About />} />

          <Route
           exact path="/"
            element={
             
            }
          />
        </Routes>
      </BrowserRouter> */}
       <TextForm heading="Enter the text to analyse: " mode={mode} />
    </>
  );
}

export default App;

// <> </> jsx fragments syntax
