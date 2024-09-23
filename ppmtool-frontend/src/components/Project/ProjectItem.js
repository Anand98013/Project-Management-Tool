import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };

  render() {
    const { project } = this.props;
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div
          className="card card-body bg-light mb-3"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <div className="row align-items-center">
            <div
              className="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#343a40"
              }}
            >
              <span>{project.projectIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3
                style={{
                  fontWeight: "600",
                  color: "#007bff",
                  marginBottom: "10px"
                }}
              >
                {project.projectName}
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#6c757d"
                }}
              >
                {project.description}
              </p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link
                  to={`/projectBoard/${project.projectIdentifier}`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className="list-group-item board"
                    style={{
                      backgroundColor: "#28a745",
                      color: "#fff",
                      marginBottom: "10px",
                      textAlign: "center",
                      borderRadius: "5px",
                      transition: "transform 0.2s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    <i className="fa fa-flag-checkered pr-1" />
                    Project Board
                  </li>
                </Link>

                <Link
                  to={`/updateProject/${project.projectIdentifier}`}
                  style={{ textDecoration: "none" }}
                >
                  <li
                    className="list-group-item update"
                    style={{
                      backgroundColor: "#ffc107",
                      color: "#343a40",
                      marginBottom: "10px",
                      textAlign: "center",
                      borderRadius: "5px",
                      transition: "transform 0.2s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    <i className="fa fa-edit pr-1" />
                    Update Project Info
                  </li>
                </Link>

                <li
                  className="list-group-item delete"
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease"
                  }}
                  onClick={this.onDeleteClick.bind(
                    this,
                    project.projectIdentifier
                  )}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                >
                  <i className="fa fa-minus-circle pr-1" /> Delete Project
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);
