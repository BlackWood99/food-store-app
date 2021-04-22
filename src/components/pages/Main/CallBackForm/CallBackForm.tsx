import React from "react"

function CallBackForm() {
	return (
		<div className='callBackFormWrapper'>
			<h2>Форма заявки</h2>
			<form action='post' className='callBackForm'>
				<div className='callBackForm_item input'>
					<label htmlFor='cb-input-name'>Имя</label>
					<input type='text' id='cb-input-name' />
				</div>
				<div className='callBackForm_item input'>
					<label htmlFor='cb-input-phone'>Телефон</label>
					<input type='text' id='cb-input-phone' />
				</div>
				<div className='callBackForm_item'>
					<button type='submit'>Отправить</button>
				</div>
			</form>
		</div>
	)
}

export default CallBackForm
