import React from "react";
import Notification from "./Notification";

export default ({ style, ...rest }) => (
  <Notification
    className="error"
    style={{
      fontSize: 14,
      padding: 10,
      textAlign: "left",
      paddingLeft: 16,
      ...style
    }}
    {...rest}
  />
);
