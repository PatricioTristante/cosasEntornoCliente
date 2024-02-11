export function getAllALumnos () {

    const url = 'https://run.mocky.io/v3/3d8e46e0-bac4-4aed-8fa2-69db9e53373d';
    
    return fetch(url)
      .then(response => {
          const data = response.json();
          return data;
    })
}