import { get } from './httpClient';

export async function getUserById(id, signal) {
  const response = await get(`people/${id}/`, signal);
  return {
    id: response.url.split('/').slice(-2, -1)[0],
    name: response.name,
    height: response.height,
    mass: response.mass,
    hair_color: response.hair_color,
    eye_color: response.eye_color,
    gender: response.gender,
    homeworld: response.homeworld,
    starships: response.starships,
  };
};


