import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {

    const { validToken, user } = this.props.security;

    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/dashboard"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Dashboard
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/dashboard"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <i
                className="fas fa-user-circle mr-1"
                style={{
                  marginRight: "8px",
                  fontSize: "1.5rem",
                  color: "white",
                }}
              />
              {user.fullName}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/logout"
              onClick={this.logout.bind(this)}
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#ff4d4d",
                padding: "8px 15px",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#e60000")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff4d4d")
              }
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/register"
              style={{
                color: "white",
                fontWeight: "bold",
                padding: "8px 15px",
                borderRadius: "5px",
                backgroundColor: "#4caf50",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#45a049")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#4caf50")
              }
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
              style={{
                color: "white",
                fontWeight: "bold",
                padding: "8px 15px",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                marginLeft: "10px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    );

    let headerLinks;

    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <nav
        className="navbar navbar-expand-sm"
        style={{
          backgroundColor: "#343a40",
          marginBottom: "20px",
          padding: "10px 20px",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            Personal Project Management Tool
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {headerLinks}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
