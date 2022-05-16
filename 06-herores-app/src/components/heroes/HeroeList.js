import { Link } from "react-router-dom";
import { getHeroesByPublisher } from "../../helpers/getHeroes"

export const HeroeList = ({publisher=''}) => {
	const heroes = getHeroesByPublisher(publisher);
  return (
	<>
		<ul>
			{heroes.map(hero => (
				<li key={hero.id}>
					<Link to={`/heroe/${hero.id}`}>
						{hero.superhero}
					</Link>
				</li>
			))}
		</ul>
	</>
  )
}
