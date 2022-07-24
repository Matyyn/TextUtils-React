import React from "react";

export default function Alert(props) {  
  return (
    // here if props.alert is null then it will return false and will not be evaluated
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
    </div>
  );
}
