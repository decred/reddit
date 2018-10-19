import React from "react";
import ThingComponent from "./Thing";
import { optional } from "../util";

const NestedListing = ({
  Thing = ThingComponent,
  allChildren,
  className="",
  name,
  replyTo,
  ...props
}) => [
  <div className={`sitetable ${className}`} id={`siteTable_${name}`} key="listing">
    {(allChildren || []).map((thing, idx) => [
      optional(Thing, { ...props, ...thing, key: thing.data.id, rank: idx + 1, replyTo }),
      <div className="clearleft" key={thing.data.id+"clear"} />
    ])}
  </div>
];

export default NestedListing;

