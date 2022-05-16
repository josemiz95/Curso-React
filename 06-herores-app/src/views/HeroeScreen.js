import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroes";

export const HeroeScreen = () => {
	const {id} = useParams();

	const hero = getHeroeById(id);

	if(!hero)
		return <Navigate to="/"/>

  return (
	<div>
		<h1>{hero?.superhero}</h1>
	</div>
  )
}
