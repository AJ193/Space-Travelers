import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missionSlice';

const MissionItem = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td className="text-center"><span className="badge badge-secondary bg-secondary">NOT A MEMBER</span></td>
      <td className="w-15 text-center">
        <button type="button" aria-label={reserved ? 'Leave Mission' : 'Join Mission'} className={reserved ? 'btn btn-sm btn-outline-info' : 'btn btn-sm btn-outline-secondary'} onClick={!reserved ? handleJoinMission : ''}>
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
