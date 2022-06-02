import React from 'react'

export const JournalEntry = () => {
  return (
	<div className='journal__entry pointer'>
		<div className='journal__entry-picture' 
			style={{
				backgroundSize:'cover', 
				backgroundImage:'url(https://www.juntadeandalucia.es/averroes/centros-tic/21200025/myscrapbook/userimages/4d75ab13927a.png)'
			}}>
		</div>
		<div className='journal__entry-content'>
			<p className='journal__entry-title'> Hola mundo</p>
			<p className="journal__entry-content">
				lorem ipsum dolor sit amet, consectetur adipiscing elit
			</p>
		</div>
		<div className='journal__entry-date-box'>
			<span>Lunes</span>
			<h4>12</h4>
		</div>
	</div>
  )
}
