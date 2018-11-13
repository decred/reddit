import React from "react";
import SrHeaderAreaComponent from "./SrHeaderArea";
import HeaderBottomLeftComponent from "./HeaderBottomLeft";
import UserInfoComponent from "./UserInfo";
import { optional } from "../util";

const Header = ({
  SrHeaderArea = SrHeaderAreaComponent,
  HeaderBottomLeft = HeaderBottomLeftComponent,
  UserInfo = UserInfoComponent,
  ...props
}) => (
  <div id="header" role="banner">
    {optional(SrHeaderArea, props)}
    {optional(HeaderBottomLeft, props)}
    {optional(UserInfo, props)}
  </div>
);

export default Header;
