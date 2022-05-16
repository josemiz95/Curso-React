import { heroes } from "../data/heroes";

const getHeroesById = (id) => heroes.find(hero => hero.id === id);

const getHeroesByPublisher = (publisher) => {
	const validPublishers = ['DC Comics', 'Marvel Comics'];
	
	if (!validPublishers.includes(publisher)) {
		throw new Error(`Invalid publisher: ${publisher}`);
	}

	return heroes.filter(hero => hero.publisher === publisher);
}

export { 
	getHeroesById, 
	getHeroesByPublisher 
};