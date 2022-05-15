import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components/Navbar';
import { MarvelScreen } from '../views/MarvelScreen';
import { SearchScreen } from '../views/SearchScreen';
import { DcScreen } from '../views/DcScreen';
import { HeroeScreen } from '../views/HeroeScreen';

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<MarvelScreen />} />
				<Route path="/marvel" element={<MarvelScreen />} />
				<Route path="/dc" element={<DcScreen />} />
				<Route path="/heroe" element={<HeroeScreen />} />
				<Route path="/search" element={<SearchScreen />} />
			</Routes>
		</>
	)
}
