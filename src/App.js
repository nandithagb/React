import React, { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "sucess");
      document.title='TextUtils-Dark mode'
      setInterval(()=>{
        document.title='the amazing mode is on '
      },2000)
      setInterval(()=>{
        document.title='The DARK MODE'
      },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "sucess");
      document.title='TextUtils-Light mode'
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about"
            element={<About />}>
          </Route>
          
          <Route exact path="/"
          element={<TextForm
          showAlert={showAlert}
          heading="Enter the text to Anaylze"
          mode={mode}
        />}>
          </Route>
        </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;