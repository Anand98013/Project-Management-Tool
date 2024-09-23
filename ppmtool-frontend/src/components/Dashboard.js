import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;

    return (
      <div className="projects" style={{ backgroundColor: "#785656", minHeight: "100vh", padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1
                className="display-4 text-center"
                style={{
                  marginBottom: "30px",
                  fontWeight: "700",
                  color: "#343a40"
                }}
              >
                Projects
              </h1>
              <CreateProjectButton />

              <br />
              <hr style={{ borderTop: "2px solid #007bff", marginBottom: "30px" }} />
              
              {projects.length > 0 ? (
                projects.map(project => (
                  <ProjectItem key={project.id} project={project} />
                ))
              ) : (
                <h5 className="text-center" style={{ color: "#6c757d" }}>
                  No projects found. Start creating one!
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  project: state.project,
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);
