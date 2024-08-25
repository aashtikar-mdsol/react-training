import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlace } from '../httpHelper.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [errored, updateErrored] = useState(false);
  const [places, setPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlace();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setPlaces(sortedPlaces);
          setIsFetching(false);
        })
      } catch (e) {
        updateErrored(true);
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);

  return (
    <>
      {errored && <Error message={"Some this went wrong"} title={"some thing wrong"} onConfirm={() => { updateErrored(false) }} />}
      <Places
        title="Available Places"
        places={places}
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}
        isFetching={isFetching}
      />
    </>
  );
}
