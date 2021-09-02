import {__ButtonPlusNew} from '../styles/_index'

const BtnAddTask = ({onToggle}) => {
	return (
		<__ButtonPlusNew onClick={onToggle}>
			<span>
				<svg width='13' height='13'>
					<path
						fill='var(--color-primary)'
						d='M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z'
					></path>
				</svg>
			</span>
			Add new task
		</__ButtonPlusNew>
	)
}

// BtnAddTask.propTypes = {
//   onClick: PropTypes.func,
// }

export default BtnAddTask
