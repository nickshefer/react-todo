export const dateParse = miliseconds => {
	const date = new Date(miliseconds);
	const month = getString(date.getMonth() + 1);
	const day = getString(date.getDate());
	const hours = getString(date.getHours());
	const minutes = getString(date.getMinutes());
	return [day, month, hours, minutes];
};

function getString(num) {
	if (num < 10) {
		return '0' + num;
	}
	return num;
}
