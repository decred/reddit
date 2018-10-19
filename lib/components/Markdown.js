import React from "react";

const Markdown = ({ html, className }) =>
  html ? (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : null;

export default Markdown;

