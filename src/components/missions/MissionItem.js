import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionSlice';

const MissionItem = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td className="text-center"><span className={`badge ${reserved ? ' badge-info bg-info' : ' badge-secondary bg-secondary'}`}>{ reserved ? 'Active Member' : 'NOT A MEMBER' }</span></td>
      <td className="w-15 text-center">
        <button type="button" aria-label={reserved ? 'Leave Mission' : 'Join Mission'} className={reserved ? 'btn btn-sm btn-outline-info' : 'btn btn-sm btn-outline-secondary'} onClick={!reserved ? handleJoinMission : handleLeaveMission}>
          {' '}
          {reserved ? 'Leave Mission' : 'Join Mission'}
          {' '}
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
