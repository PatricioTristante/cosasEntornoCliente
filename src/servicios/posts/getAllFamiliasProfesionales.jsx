export function getAllFamiliasProfesionales () {

    const url = 'https://run.mocky.io/v3/46574f3f-f0cb-490d-b90c-8f079d29dde9';
    
    return fetch(url)
      .then(response => {
          const data = response.json();
          return data;
    })
}