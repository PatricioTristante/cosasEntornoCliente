export function getAllProyectos () {

    const url = 'https://run.mocky.io/v3/4ff9988f-ae98-4678-a536-360d28b7c0fa';
    
    return fetch(url)
      .then(response => {
          const data = response.json();
          return data;
    })
}