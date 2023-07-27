import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missionItem } = useSelector((store) => store.missions);

  const reservedMissions = missionItem.filter((mission) => mission.reserved === true);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h2>Missions</h2>
          <table className="table table-bordered">
            { reservedMissions.map((mission) => (
              <tr key={mission.mission_id}><td className="p-2">{ mission.mission_name }</td></tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
