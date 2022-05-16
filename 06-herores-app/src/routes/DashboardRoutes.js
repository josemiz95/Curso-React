import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { MarvelScreen } from '../views/MarvelScreen';
import { SearchScreen } from '../views/SearchScreen';
import { DcScreen } from '../views/DcScreen';
import { HeroeScreen } from '../views/HeroeScreen';

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/marvel" element={<MarvelScreen />} />
					<Route path="/dc" element={<DcScreen />} />
					<Route path="/heroe" element={<HeroeScreen />} />
					<Route path="/search" element={<SearchScreen />} />
					
					<Route path="/*" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	)
}
