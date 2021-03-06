import React from "react";
import { Link } from "react-router-dom";

function ProfileActions() {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="edit-profile.html" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile
      </Link>
      <a href="add-experience.html" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1"></i>
        Add Experience
      </a>
      <a href="add-education.html" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1"></i>
        Add Education
      </a>
    </div>
  );
}

export default ProfileActions;
