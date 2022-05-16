import React from 'react';
import { Link } from 'react-router-dom';

export const HeroeCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

	const imagePath = `/assets/heroes/${id}.jpg`;

  return (
	<div className='col col-12 col-md-4 col-lg-3 p-2'>
		<div className='card'>
			<div className='row no-gutters'>
				<div className='col-md-4'>
					<img src={imagePath} className='card-img' alt={superhero} />
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>{superhero}</h5>
						<p className='card-text'>{alter_ego}</p>
						{
							(alter_ego !== characters) && <p className='text-muted'>{characters}</p>
						}
						<p className='card-text'><small className='text-muted'>{first_appearance}</small></p>
						<Link to={`/hero/${id}`}>Mas...</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
