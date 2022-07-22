const MyButton = ({children, ...props}) => {
	return (
		<button {...props} className={[props.className, "button"].join(" ")}>
			{children}
		</button>
	);
};

export default MyButton;
