import React from 'react'
import { SideBar } from '../../components/journal/SideBar'

export const Journal = () => {
    return (
		<div className='journal__main-content'>
			<SideBar/>

			<main>
				<h1>Main content</h1>
			</main>
		</div>
    )
}
