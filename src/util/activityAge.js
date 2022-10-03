const acitvityAge = (min, max) => {
	if (max >= 100) return `${min}+ år`;
	return `${min} - ${max} år`;
};
export default acitvityAge;
