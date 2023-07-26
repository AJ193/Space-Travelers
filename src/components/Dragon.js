import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons, updateDragon } from '../redux/dragons/dragonsSlice';

const Dragon = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  const { dragons, loading } = useSelector((state) => state.dragons);

  const onUpdate = (id) => {
    dispatch(updateDragon(id));
  };

  const onCancel = (id) => {
    dispatch(cancelDragon(id));
  };
  

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5 dragon">
      <div className="list">
        {dragons.map((dragon) => (
          <div key={dragon.id} className="row mb-5">
            <img className="col-md-3 image" src={dragon.flickr_images} alt="falcon1" />
            <div className="col-md-9">
              <h2 className="title">{dragon.name}</h2>
              <p className="title">{dragon.type}</p>
              {
                dragon.reserved ? <button onClick={() => onCancel(dragon.id)} type="button" className="btn btn-outline-primary">Cancel Reservation</button>
                  : <button onClick={() => onUpdate(dragon.id)} type="button" className="btn btn-primary">Reserve Rocket</button>
              }

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dragon;
