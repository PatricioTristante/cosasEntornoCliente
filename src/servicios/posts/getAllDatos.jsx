export function getAllDatos () {

    const url = 'https://run.mocky.io/v3/b964e7a4-a408-43a7-afaa-eddf0dbf18bf';
    
    return fetch(url)
      .then(response => {
          const data = response.json();
          return data;
    })
}