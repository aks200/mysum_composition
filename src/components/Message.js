import React, { Component, Fragment } from "react";

const Message = props => {
  return (
    <Fragment>
      <div>{props.message}</div>
    </Fragment>
  );
};
export default Message;

