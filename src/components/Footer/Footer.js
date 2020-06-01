import React, { useState, useContext } from 'react'
import Iframe from 'react-iframe'

import './Footer.css'
import DimensionContext from '../../context/dimension'
import { urlMap } from '../../constants/urls'

function Footer() {
	const { width, height } = useContext(DimensionContext)

	const [email, setEmail] = useState('')
	const [msg, setMsg] = useState('')

	return (
		<footer style={{ height: height*(7/8) , width: width, backgroundColor:'#292E56' }}>
			<div className='contactTopView' style={{ height: height/12, width: width }}>
				<p className='contactTitle' style={{ fontSize: height/17 }}>CONTATO</p>
			</div>
			<div className='contactBottomView' style={{ height: height*(6/8), width: width }}>
				<div className='contactBottomLeftView'>
					<div className='contactSubtitleView'>
						<p className='contactSubtitleText'>FALE CONOSCO</p>
					</div>
					<textarea 
						className='contactEmailInput'
						placeholder='Digite seu e-mail'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					></textarea>
					<textarea 
						className='contactMessageInput'
						placeholder='Nos envie uma mensagem!'
						value={msg}
						onChange={(event) => setMsg(event.target.value)}
					></textarea>
					<button 
						className='contactSendButton'
						value='Enviar'>Enviar</button>
				</div>
				<div className='contactBottomRightView'>
					<div className='corner-wrapper'>
						<Iframe
							src={urlMap}
							frameborder="0"
							style={{ border: 0 }}
							allowfullscreen="" 
							aria-hidden="false" 
							tabindex="0"
							width='100%'
							height='100%'>
						</Iframe>
					</div>
					<p className='contactBottomRightText' style={{ marginTop: '2%' }}>Universidade Estadual de Maringá</p>
					<p className='contactBottomRightText'>Avenida Colombo, 5970</p>
					<p className='contactBottomRightText'>ieeeuem@gmail.com</p>
					<a className='contactBottomRightText' href='https://www.instagram.com/ieeeuem/' target="_blank">Instagram IEEE UEM</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer