import React from 'react'
import { HeroeList } from '../components/heroes/HeroeList'

export const DcScreen = () => {
  	return (
		<div>
			<h1>DC</h1>
			<hr />
			<HeroeList publisher='DC Comics' />
		</div>
	)
}
