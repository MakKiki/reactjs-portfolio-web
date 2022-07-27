import { useState } from "react";
import Dialog from "@mui/material/Dialog";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    props.setIsLoginPage(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      setEmail("");
      setPassword("");
      setError("");
      props.setIsLoginPage(false);
      props.setHasUser(true);
    } else {
      setError("Invalid Email or Password.");
    }
  };

  return (
    <Dialog onClose={handleClose} open={props.isLoginPage} fullWidth={true}>
      <div
        className="container text-center"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        {/* <DialogTitle> */}
        <h2 className="text-uppercase" style={{ marginBottom: "3rem" }}>
          Admin Login
        </h2>
        {/* </DialogTitle> */}

        {/* <DialogContent> */}
        <form id="loginForm">
          <div className="justify-content-center row align-items-stretch mb-5">
            <div className="col-md-8" style={{ marginBottom: "2rem" }}>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email *"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="form-group">
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password *"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            {error === "" ? null : (
              <p style={{ marginTop: "2rem", color: "red" }}>{error}</p>
            )}
          </div>
        </form>
        {/* </DialogContent> */}

        {/* <DialogActions> */}
        <button
          className="btn btn-primary btn-xl text-uppercase"
          data-bs-dismiss="modal"
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        {/* </DialogActions> */}
      </div>
    </Dialog>
  );
}

export default Login;
