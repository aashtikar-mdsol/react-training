export async function fetchAvailablePlace() {
    const response = await fetch('http://localhost:3000/places');
    if (!response.ok) {
        throw new Error();
    }
    const placesResp = await response.json();
    return placesResp.places;
}

export async function addSelectedPlaces(places) {
    let resp = await fetch(
        'http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ 'places': places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (resp.ok) {
        console.log(resp)
    }
}