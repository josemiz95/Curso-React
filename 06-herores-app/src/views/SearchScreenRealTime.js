import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { HeroeCard } from '../components/heroes/HeroeCard';
import { getHeroesByName } from '../helpers/getHeroes';
import { useForm } from '../hooks/useForm'

export const SearchScreenRealTime = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const {q = ''} = queryString.parse(location.search);

	const [{searchText}, handleInputChange,] = useForm({searchText:q});

	const heroes = getHeroesByName(searchText);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
	}

	// Test
	useEffect(() => {
		if (window.history.replaceState) {
			const url = window.location.protocol+"//"+window.location.host+window.location.pathname;
			const query ="?q="+ searchText;
			window.history.replaceState({}, "", url+query);
		}
	}, [searchText])

	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Buscar</h4>
					<hr/>
					<form onSubmit={handleSearch}>
						<input type="text" className="form-control" placeholder="Buscar..." name='searchText' value={searchText} onChange={handleInputChange} />

						<button type='submit' className='btn btn-primary mt-1'>Buscar</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Resultados</h4>
					<hr/>
					<ul className="list-group">
						{ 	heroes.length > 0 ?
							heroes.map(hero => <HeroeCard key={hero.id} {...hero} /> ):
							<div className="alert alert-danger">No hay resultados</div>
						}
					</ul>
				</div>
			</div>
		</>
	)
}
