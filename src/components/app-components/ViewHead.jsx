import {_ViewHead} from '../styles/_index'

const ViewHead = () => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]
	const dayNames = [
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri',
		'Sat',
		'Sun',
	]
	const month = monthNames[new Date().getMonth()]
	const dayNumber = new Date().getDate()
	const dayName = dayNames[new Date().getDay() - 1]

	return (
		<_ViewHead>
			<span className='title'>Today</span>
			<span className='date'>
				{dayName} {month} {dayNumber}
			</span>
		</_ViewHead>
	)
}

export default ViewHead
