// import { Link } from "react-router-dom";
import { getHeroesByPublisher } from "../../helpers/getHeroes"
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({publisher=''}) => {
	const heroes = getHeroesByPublisher(publisher);
  return (
	<div className="row">
		{heroes.map(hero => (
			<HeroeCard key={hero.id} {...hero}/>
		))}
	</div>
  )
}
