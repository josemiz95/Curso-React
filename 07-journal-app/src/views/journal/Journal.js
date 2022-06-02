import React from 'react';
import { SideBar } from '../../components/journal/SideBar';
import { Notes } from '../../components/notes/Notes';
// import { NothingSelected } from './NothingSelected';

export const Journal = () => {
    return (
		<div className='journal__main-content'>
			<SideBar/>

			<main>
				{/* <NothingSelected /> */}
				<Notes />
			</main>
		</div>
    )
}
