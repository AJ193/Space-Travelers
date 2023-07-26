import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ id, name, description }) => (
  <tr id={id}>
    <td>{name}</td>
    <td>{description}</td>
    <td className="text-center"><span className="badge badge-info bg-info">Active Member</span></td>
    <td className="w-15 text-center"><button type="button" aria-label="Leave Mission" className="btn btn-sm btn-outline-danger">Leave Mission</button></td>
  </tr>
);

MissionItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
