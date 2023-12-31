import { useDispatch, useSelector } from 'react-redux';
import { selectRockets, reserveRocket } from '../redux/rocket/rocketsSlice';

const Rockets = () => {
  // Grab the rocket array from the state
  const rocketsList = useSelector(selectRockets);
  // function to toggle the ReserveButton textContent
  // dispatch the fetch action only once
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(reserveRocket(id));
  };
  // Render the rockets in the UI
  return (
    <div>
      <ul className="rockets-container">
        { rocketsList.map((rocket) => (
          <li className="rocket-card" key={rocket.id} id={rocket.id}>
            <img className="rocket-img" src={rocket.img[1]} alt="rocket" />
            <div className="rocket-infos-div">
              <h1>{rocket.rocket_name}</h1>
              <p>
                {rocket.reserved && (
                <span className="reservedSpanStyle">
                  Reserved
                </span>
                )}
                {' '}
                {rocket.description}
              </p>
              {rocket.reserved && (
              <button
                type="button"
                className="reservedStyle"
                onClick={() => clickHandler(rocket.id)}
              >
                Cancel Reservation
              </button>
              )}
              {!rocket.reserved && (
              <button
                type="button"
                className="nonReservedStyle"
                onClick={() => clickHandler(rocket.id)}
              >
                Reserve Rocket
              </button>
              )}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Rockets;
