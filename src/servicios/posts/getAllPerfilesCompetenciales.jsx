export function getAllPerfilesCompetenciales () {

    const url = 'https://run.mocky.io/v3/89bda0a9-d7ce-4841-a092-3de8bdbd3210';
    
    return fetch(url)
      .then(response => {
          const data = response.json();
          return data;
    })
}