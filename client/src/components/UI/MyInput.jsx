import React from "react";

const InputField = React.forwardRef((props, ref) => {
	return <input ref={ref} {...props} />;
});

export default InputField;
