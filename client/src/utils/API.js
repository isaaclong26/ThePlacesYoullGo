export const searchCities = (query) => {
    return fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?q=${query}`, {
        method:'GET',
        headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': '8da32efd36msh11a150c1fbd2094p137c85jsnce6ceda52200'
        }
    })
}