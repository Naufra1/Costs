import './Input.css'

function Input({ type, text, name, value, placeholder, handleOnChange }) {
	return (
		<div className='form__container'>
			<label htmlFor={name} className='form__label'>{text}</label>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				name={name}
				id={name}
				className='form__input'
				onChange={handleOnChange}
			/>
		</div>
	)
}

export default Input