import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers/getHeroes";

// import batman from "../assets/heroes/dc-batman.jpg"; // imagenes estaticas
const heroImages = require.context('../assets/heroes', true);

export const HeroeScreen = () => {
	const {id: heroId} = useParams();
	const navigate = useNavigate();

	const hero = useMemo(() => getHeroeById(heroId), [heroId]);
	if(!hero) return <Navigate to="/"/>

	// const imagePath = `/assets/heroes/${hero.id}.jpg`;

	const handleReturn = () => navigate(-1);


	return (
		<div className="row mt-5">
			<h1>{hero?.superhero}</h1>
			<div className="col-md-4">
				{/* <img src={imagePath} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/> */}

				{/* NOTE: Desde el archivo de assets en src */}
				{/* <img src={batman} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/> */}

				{/* NOTE: Obtener desde directorio */}
				<img src={heroImages(`./${hero.id}.jpg`)} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft"/>
			</div>
			<div className="col-md-8 animate__animated animate__fadeInRight">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
					<li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
					<li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
					<li className="list-group-item"><b>Characters: </b>{hero.characters}</li>
				</ul>
				<button className="btn btn-outline-info mt-2" onClick={handleReturn}>Return</button>
			</div>
		</div>
	)
}
