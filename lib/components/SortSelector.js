import React from "react";
import LinkComponent from "./Link";

const SortSelector = ({
  Link = LinkComponent,
  hideSortOptions,
  sortOptions,
  currentSort,
  permalink
}) => (
  <div className="menuarea">
    <div className="spacer">
      <span className="dropdown-title lightdrop">sorted by:</span>
      <div className="dropdown lightdrop">
        <span className="selected">{currentSort}</span>
      </div>
      {
        !hideSortOptions &&
        <div className="drop-choices lightdrop">
          {sortOptions.map(sortName => (sortName !== currentSort) && (
            <Link
              key={sortName}
              className="choice"
              href={`${permalink}?sort=${sortName}`}
            >
              {sortName}
            </Link>
          ))}
        </div>
      }
    </div>
    <div className="spacer" />
  </div>
);

export default SortSelector;
