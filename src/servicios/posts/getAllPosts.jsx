export function getAllPosts () {

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5daae4bcf2msh320b03f3aa8dc51p136bc7jsn3ae10bc8113a',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
    // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
    // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
    // una promesa, la respuesta de la REST API es los que devolvemos
    return fetch(url, options)
      .then(response => {
          const data = response.json();
          console.log(data);
          return data;
    })
}