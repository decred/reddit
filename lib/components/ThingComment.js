import React from "react";
import LinkComponent from "./Link";
import NestedListingComponent from "./NestedListing";
import MarkdownComponent from "./Markdown";
import compose from "lodash/fp/compose";

const getChildComments = replies => ((replies && replies.data && replies.data.children) || []);

const ThingComment = ({
  NestedListing = NestedListingComponent,
  Markdown = MarkdownComponent,
  Link = LinkComponent,
  Timestamp = ({ created_utc }) => created_utc,
  onShowReply,
  replyTo,
  name,
  author,
  authorHref,
  score,
  downs,
  score_hidden,
  ups,
  body,
  body_html,
  permalink,
  replies,
  banned_by,
  meta_thing,
  stickied,
  distinguished,
  controversiality,
  created,
  created_utc
}) => (
  <div
    className={[
      "thing id-t1_h1 noncollapsed comment",
      ((banned_by && "spam") || ""),
      ((stickied && "stickied") || ""),
      ((controversiality && "controversial") || ""),
      ((score_hidden & "score-hidden") || ""),
      (distinguished || "")
    ].join(" ")}
    data-author={author}
    data-author-fullname="t2_19"
    data-fullname="t1_h1"
    data-subreddit="pics"
    data-subreddit-fullname="t4_5"
    data-type="comment"
    id="thing_t1_h1"
  >
    <p className="parent">
      <a name="h1" />
    </p>
    <div className="midcol unvoted">
      <div
        aria-label="upvote"
        className="arrow up login-required access-required"
        data-event-action="upvote"
        role="button"
        tabIndex={0}
      />
      <div
        aria-label="downvote"
        className="arrow down login-required access-required"
        data-event-action="downvote"
        role="button"
        tabIndex={0}
      />
    </div>
    <div className="entry unvoted">
      <p className="tagline">
        <a
          className="expand"
        >
          [–]
        </a>
        <a
          className={`author may-blank id-t2_ ${distinguished || ""}`}
          href={authorHref}
        >
          {author}
        </a>
        {distinguished && (
          <span className="userattrs">
            [<a className={distinguished} title={distinguished} href={`/r/{subreddit}/about/moderators`}>M</a>]
            {" "}
          </span>
        )}
        {score_hidden ? (
          <span className="score-hidden" title="scores are currently hidden for this comment">
            [score hidden]
          </span>
        ) : [
          <span className="score dislikes" key="dislikes">{downs} points</span>,
          <span className="score unvoted" key="unvoted">{score} points</span>,
          <span className="score likes" key="likes">{ups} points</span>
        ]}{" "}
        <Timestamp {...{ created, created_utc }} /> 
        {stickied && (<span className="stickied-tagline" title="stickied">stickied comment</span>)}
        <a className="numchildren" >
          {getChildComments(replies).length}
        </a>
      </p>
      <form
        action="#"
        className="usertext warn-on-unload"
        id="form-t1_h1835"
      >
        <input name="thing_id" type="hidden" defaultValue="t1_h1" />
        <Markdown body={body} html={body_html} className="usertext-body may-blank-within md-container" />
      </form>
      <ul className="flat-list buttons">
        <li className="first">
          <Link
            className="bylink"
            data-event-action="permalink"
            href={permalink}
            rel="nofollow"
          >
            permalink
          </Link>
        </li>
        <li className="comment-save-button save-button">
          <a title="save">save</a>
        </li>
        <li className="report-button">
          <a
            className="action-thing reportbtn access-required"
            data-event-action="report"
          >
            report
          </a>
        </li>
        <li className="give-gold-button">
          <a
            className="give-gold login-required access-required"
            data-event-action="gild"
            href={`/gold?goldtype=gift&months=1&thing=${name}`}
            title="give reddit gold in appreciation of this post."
          >
            give gold
          </a>
        </li>
        <li className="reply-button">
          <a
            className="access-required"
            data-event-action="comment"
            href={permalink}
            onClick={onShowReply}
          >
            reply
          </a>
        </li>
        {banned_by && <li title="[removed]"><b>[removed by moderators]</b></li>}
        {meta_thing && (
          <li><Link href={meta_thing.data.permalink} title={`${meta_thing.data.score} points`}>
            {meta_thing.data.num_comments} comments on r/{meta_thing.data.subreddit}
          </Link></li>
        )}
      </ul>
      <div className="reportform report-t1_h1" />
    </div>
    <div className="child">
      {compose(
        (allChildren) => (
          <NestedListing {...{ allChildren, name, replyTo }} />
        ),
        getChildComments
      )(replies)}
    </div>
    <div className="clearleft" />
  </div>
);

export default ThingComment;
