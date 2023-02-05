import './Select.css'

function Select({ text, name, value, options, handleOnChange }) {
	return (
		<div className='form__container'>
			<label htmlFor={name} className='form__label'>{text}</label>
			<select
				name={name}
				id={name}
				className='form__id'
				onChange={handleOnChange}
				value={value || ''}
			>
				<option>Selecione uma opção</option>
				{options.map((option) => (
					<option value={option.id} key={option.id}>{option.name}</option>
				))}
			</select>
		</div>
	)
}

export default Select