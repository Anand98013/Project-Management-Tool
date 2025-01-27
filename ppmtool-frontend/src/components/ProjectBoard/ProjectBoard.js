import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

class ProjectBoard extends Component {
  constructor() {
    super();
    this.state = {
      errors: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.state;

    let BoardContent;

    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        if (errors.projectNotFound) {
          return (
            <div
              className="alert alert-danger text-center"
              role="alert"
              style={{
                marginTop: "20px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              {errors.projectNotFound}
            </div>
          );
        } else if (errors.projectIdentifier) {
          return (
            <div
              className="alert alert-danger text-center"
              role="alert"
              style={{
                marginTop: "20px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              {errors.projectIdentifier}
            </div>
          );
        } else {
          return (
            <div
              className="alert alert-info text-center"
              role="alert"
              style={{
                marginTop: "20px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              No Project Tasks on this board
            </div>
          );
        }
      } else {
        return <Backlog project_tasks_prop={project_tasks} />;
      }
    };

    BoardContent = boardAlgorithm(errors, project_tasks);

    return (
      <div className="container" style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3" style={{ fontSize: "1.2rem", borderRadius: "5px" }}>
          <i className="fas fa-plus-circle" /> Create Project Task
        </Link>
        <br />
        <hr style={{ borderTop: "2px solid #007bff", marginBottom: "20px" }} />
        {BoardContent}
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getBacklog }
)(ProjectBoard);
