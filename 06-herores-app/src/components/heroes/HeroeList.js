// import { Link } from "react-router-dom";
import { useMemo } from "react";
import { getHeroesByPublisher } from "../../helpers/getHeroes"
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({publisher=''}) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
	<div className="row animate__animated animate__fadeIn">
		{heroes.map(hero => (
			<HeroeCard key={hero.id} {...hero}/>
		))}
	</div>
  )
}
