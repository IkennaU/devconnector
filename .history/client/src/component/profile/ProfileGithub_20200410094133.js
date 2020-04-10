import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "97a4fffcb55a0ee8872a",
      clientSecret: "4cfab20d2095ba3492ff91689bcda6dc43a89950",
      count: 5,
      sort: "created: asc",
      repos: [],
    };
  }
  componentDidMount() {
    const { username } = this.props;
    const { clientId, clientSecret, count, sort } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ repos: data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { repos } = this.state;
    const reposItem = repos.map((repos) => (
      <div key={repos.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4><Link to={repo.html_url} className="text-info" target="_blank"</h4>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>TODO: PROFILE GITHUB</h1>
      </div>
    );
  }
}

export default ProfileGithub;
