import './SubmitButton.css'

function SubmitButton({ text }) {
	return (
		<div>
			<button type="submit" className='button'>{text}</button>
		</div>
	)
}

export default SubmitButton