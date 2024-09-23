import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div
        className="landing"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#785656",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="light-overlay landing-inner text-dark"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "50px",
            borderRadius: "10px"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  className="display-3 mb-4"
                  style={{ fontWeight: "bold", color: "#343a40" }}
                >
                  Personal Project Management Tool
                </h1>
                <p className="lead" style={{ fontSize: "1.2rem" }}>
                  Create your account to join active projects or start your own
                </p>
                <hr />
                <Link
                  className="btn btn-lg btn-primary mr-2"
                  to="/register"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1.1rem"
                  }}
                >
                  Sign Up
                </Link>
                <Link
                  className="btn btn-lg btn-secondary mr-2"
                  to="/login"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#6c757d",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1.1rem",
                    color: "#fff"
                  }}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  security: state.security
});

export default connect(mapStateToProps)(Landing);
