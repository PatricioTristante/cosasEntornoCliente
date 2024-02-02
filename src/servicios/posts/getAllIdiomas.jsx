export function getAllIdiomas () {

    const url = 'https://run.mocky.io/v3/3ee642e8-870e-453b-82b7-e945523f74d2';
    
    return fetch(url)
      .then(response => {
          const data = response.json();
          return data;
    })
}