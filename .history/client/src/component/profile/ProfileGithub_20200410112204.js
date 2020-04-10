import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { repos } = this.state;
    var repoItem = repos.map((repo) => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars:{repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers:{repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks:{repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItem}
      </div>
    );
  }
}
ProfileGithub.propTypes = { username: PropTypes.string.isRequired };

export default ProfileGithub;
