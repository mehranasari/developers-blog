import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ education: { school, degree, feildofstudy, from, to, current, description } }) =>
  <div>
    <h3>{school}</h3>
    <Moment format="YYYY-MM-DD">{from}</Moment> - {' '}
    {!to ? ('Now') : (<Moment format="YYYY-MM-DD">{to}</Moment>)}
    <p><strong>Degree: </strong>{degree}</p>
    <p><strong>Field Of Study: </strong>{feildofstudy}</p>
    <p><strong>Description: </strong>{description}</p>
  </div>

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
}

export default ProfileEducation;
