export const searchCities = (query) => {
    return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?q=${query}`);
};