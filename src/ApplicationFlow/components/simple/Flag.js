import React from "react";
import "./flag.css";
const Flag = ({ name, ...rest }) => <i className={`${name} flag`} {...rest} />;

export default Flag;
