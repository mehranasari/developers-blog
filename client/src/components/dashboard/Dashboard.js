import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../action/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { deleteAccount } from '../../action/profile';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }, deleteAccount }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (loading && profile === null ? <Spinner /> : <Fragment>
    <h1 className="large text-primary">Dashboard</h1>
    <p className="lead">
      <i className="fas fa-user"></i> Hi {user && user.name}
    </p>
    <img class="round-img" src={profile.image} alt="" />
    {profile !== null ?
      <Fragment>
        <DashboardActions></DashboardActions>
        <Experience experience={profile.experience}></Experience>
        <Education education={profile.education}></Education>
      </Fragment> :
      <Fragment>
        <p>You have not yet setup a profile, Please add some info</p>
        <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
      </Fragment>}
    <div class="my-2">
      <button onClick={() => deleteAccount()} class="btn btn-danger">
        <i class="fas fa-user-minus"></i>
        Delete My Account
            </button>
    </div>
  </Fragment>
  );
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
