import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import { getMissionData } from '../../redux/missions/missionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionData());
  }, [dispatch]);

  const { missionItem, isLoading } = useSelector((store) => store.missions);

  if (isLoading) {
    return (
      <div className="loader-container">
        Loading...
      </div>
    );
  }

  return (
    <div className="container-fluid mt-5">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th aria-label=""> </th>
          </tr>
        </thead>
        <tbody>
          {missionItem.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved || false}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Missions;
