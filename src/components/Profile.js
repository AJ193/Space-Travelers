import React from 'react';
import { useSelector } from 'react-redux';
import { selectRockets } from '../redux/rocket/rocketsSlice';

const Profile = () => {
  const rocketsList = useSelector(selectRockets);
  const { missionItem } = useSelector((store) => store.missions);
  const { dragons } = useSelector((store) => store.dragons);

  const reservedDragon = dragons.filter((dragon) => dragon.reserved === true);
  const reservedMissions = missionItem.filter((mission) => mission.reserved === true);
  const reservedRockets = rocketsList.filter((b) => b.reserved);
  const generateKey = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h2>Missions</h2>
            <table className="table table-bordered">
              <tbody>
                { reservedMissions.map((mission) => (
                  <tr key={mission.mission_id}><td className="p-2">{ mission.mission_name }</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2 className="Rockets">Rockets</h2>
            <table className="table table-bordered">
              <tbody>
                {reservedRockets.map((rocket) => (
                  <tr key={generateKey()}><td className="p-2">{rocket.rocket_name}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2>Dragons</h2>
            <table className="table table-bordered">
              <tbody>
                { reservedDragon.map((dragon) => (
                  <tr key={dragon.id}><td className="p-2">{ dragon.name }</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;
