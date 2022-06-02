import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const Notes = () => {
  return (
	<div className='notes__main-content'>
		<NotesAppBar />
		<div className='notes__content'>
			<input type="text" placeholder='Some awesome title' className='notes__title-input' autoComplete='off'/>

			<textarea placeholder='Some awesome text' className='notes__textarea'></textarea>

			<div className='notes__image'>
				<img src='https://www.juntadeandalucia.es/averroes/centros-tic/21200025/myscrapbook/userimages/4d75ab13927a.png' alt=''></img>
			</div>
		</div>
	</div>
  )
}
