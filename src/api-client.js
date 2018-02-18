
const API_KEY = 'e56e781f87bf59e04d08c268f05319c2';
const FORMAT = 'json';
const COUNTRY = 'costa%20rica';
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${COUNTRY}&api_key=${API_KEY}&format=${FORMAT}`;

function getArtists(){
	return fetch(URL)
		.then(res => res.json())
		.then(data => data.topartists.artist)
		.then(artists => 
			artists.map(artist=>{
				return {
					image : artist.image[3]['#text'],
					name : artist.name,
					likes : 200,
					comments : 10
				}
			})
		)
}

export {getArtists}