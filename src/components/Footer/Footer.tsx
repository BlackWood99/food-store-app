import React from "react"

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer_wrapper'>
				<div className='footer_wrapper_contacts'>
					<h3>+7(999)123-45-67</h3>
					<span>qwerty@company.ru</span>
				</div>
				<div className='footer_wrapper_links'>
					<ul>
						<li>
							<a href='/'>Политика конфиденциальности и оферта</a>
						</li>
						<li>
							<a href='/'>Пользовательское соглашение</a>
						</li>
						<li>
							<a href='/'>Условия обмена и возврата</a>
						</li>
						<li>
							<a href='/'>Блог</a>
						</li>
						<li>
							<a href='/'>Обратная связь</a>
						</li>
					</ul>
				</div>
				<div className='footer_wrapper_social'>
					<ul>
						<li>
							<a href='/' className='material-icons'>
								facebook
							</a>
						</li>
						<li>
							<a href='/' className='material-icons'>
								facebook
							</a>
						</li>
						<li>
							<a href='/' className='material-icons'>
								facebook
							</a>
						</li>
						<li>
							<a href='/' className='material-icons'>
								facebook
							</a>
						</li>
						<li>
							<a href='/' className='material-icons'>
								facebook
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
