export const getSavedCityIds = () => {
    const savedCityIds = localStorage.getItem('saved_cities')
      ? JSON.parse(localStorage.getItem('saved_cities'))
      : [];
  
    return savedCityIds;
  };
  
  export const saveCityIds = (cityIdArr) => {
    if (cityIdArr.length) {
      localStorage.setItem('saved_cities', JSON.stringify(cityIdArr));
    } else {
      localStorage.removeItem('saved_cities');
    }
  };