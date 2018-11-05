import React from "react";
import TimeAgo from "timeago-react";
import Tooltip from "./Tooltip";

const tipStyle = {
  right: "-10px",
  top: "20px",
  width: "100px",
  textAlign: "center"
};

const dateToString = (createdAt) => new Date(createdAt * 1000).toLocaleString();

const DateTooltip = ({ createdAt }) => (
  <Tooltip text={dateToString(createdAt)} wrapperStyle={{ display: "inline"  }} tipStyle={tipStyle}>
    <TimeAgo style={{ cursor: "pointer" }} datetime={createdAt * 1000}/>
  </Tooltip>);

export default DateTooltip;
