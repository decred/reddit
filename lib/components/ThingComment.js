import React from "react";
import compose from "lodash/fp/compose";

import CommentFormComponent from "./CommentForm";
import DateTooltip from "./DateTooltip";
import LinkComponent from "./Link";
import MarkdownComponent from "./Markdown";
import NestedListingComponent from "./NestedListing";

const getChildComments = replies =>
  (replies && replies.data && replies.data.children) || [];

const cursorNotAllowed = {
  "pointer-events": "none"
};

const ThingComment = ({
  NestedListing = NestedListingComponent,
  Markdown = MarkdownComponent,
  CommentForm = CommentFormComponent,
  Link = LinkComponent,
  onShowReply,
  onPermalinkClick,
  censored = false,
  grayBody = false,
  showReply = true,
  showArrows = true,
  showCensorLink = false,
  onCensorComment,
  replyTo,
  name,
  author,
  id,
  user,
  token,
  handleVote,
  authorHref,
  score,
  downs,
  score_hidden,
  ups,
  body,
  body_html,
  permalink,
  showPermalink = true,
  replies,
  banned_by,
  meta_thing,
  uservote,
  stickied,
  distinguished,
  controversiality,
  blockvote,
  created_utc,
  showCommentForm,
  onCloseCommentForm,
  highlightcomment
}) => (
  <div
    className={[
      "thing id-t1_h1 noncollapsed comment",
      (banned_by && "spam") || "",
      (stickied && "stickied") || "",
      (controversiality && "controversial") || "",
      score_hidden & "score-hidden" || "",
      distinguished || "",
      highlightcomment ? "comment-highlight" : "white-comment"
    ].join(" ")}
    data-author={author}
    data-author-fullname="t2_19"
    data-fullname="t1_h1"
    data-subreddit="pics"
    data-subreddit-fullname="t4_5"
    data-type="comment"
    id="thing_t1_h1"
  >
    <div className="inner-comment">
      <p className="parent">
        <a name="h1" />
      </p>
      {showArrows &&
      <div className="midcol unvoted">
        <div
          aria-label="upvote"
          className={`arrow ${uservote === "1" ? "upmod" : "up"} login-required access-required`}
          data-event-action="upvote"
          role="button"
          key={"upvotearrow"}
          tabIndex={0}
          style={blockvote ? cursorNotAllowed : {}}
          onClick={() => handleVote(user, token, id, "1")}
        />
        <div
          aria-label="downvote"
          className={`arrow ${uservote === "-1" ? "downmod" : "down"} login-required access-required`}
          data-event-action="downvote"
          role="button"
          key={"downvotearrow"}
          tabIndex={0}
          style={blockvote ? cursorNotAllowed : {}}
          onClick={() => handleVote(user, token, id, "-1")}
        />
      </div>
      }
      <div className="entry unvoted">
        <div className="tagline">
          <a className="expand">[–]</a>
          <a
            className={`author may-blank id-t2_ ${distinguished || ""}`}
            href={authorHref}
          >
            {author}
          </a>
          {distinguished && (
            <span className="userattrs">
						[<a
                className={distinguished}
                title={distinguished}
                href={"/r/{subreddit}/about/moderators"}
              >
							M
              </a>]{" "}
            </span>
          )}
          {score_hidden ? (
            <span
              className="score-hidden"
              title="scores are currently hidden for this comment"
            >
						[score hidden]
            </span>
          ) : (
            [
              <span className="score dislikes" key="dislikes">
                {downs} points
              </span>,
              <span className="score unvoted" key="unvoted">
                {score} points
              </span>,
              <span className="score likes" key="likes">
                {ups} points
              </span>
            ]
          )}{" "}
          <DateTooltip createdAt={created_utc}/>
          {stickied && (
            <span className="stickied-tagline" title="stickied">
						stickied comment
            </span>
          )}
          <a className="numchildren">{getChildComments(replies).length}</a>
        </div>
        <form action="#" className="usertext warn-on-unload" id="form-t1_h1835">
          <input name="thing_id" type="hidden" defaultValue="t1_h1" />
          <Markdown
            body={body}
            html={body_html}
            className={`usertext-body may-blank-within md-container${grayBody ? " comment-gray" : ""} `}
          />
        </form>
        <ul className="flat-list buttons">
          <li className="first">
            {showPermalink &&
          <Link
            className="access-required"
            data-event-action="permalink"
            href={permalink}
            onClick={onPermalinkClick}
            rel="nofollow"
          >
            permalink
          </Link>
            }
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
          {showReply &&
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
          }
          {showCensorLink &&
        <li>
          <a
            className="access-required"
            data-event-action="comment"
            href={permalink}
            onClick={onCensorComment}
          >
          censor
          </a>
        </li>
          }
          {censored && (
            <li title="[censored]">
              <b>[censored by moderators]</b>
            </li>
          )}
          {meta_thing && (
            <li>
              <Link
                href={meta_thing.data.permalink}
                title={`${meta_thing.data.score} points`}
              >
                {meta_thing.data.num_comments} comments on r/{
                  meta_thing.data.subreddit
                }
              </Link>
            </li>
          )}
        </ul>
        <div className="reportform report-t1_h1" />
      </div>
      <div className="child">
        {showCommentForm && <CommentForm onClose={onCloseCommentForm} thingId={name} key="replyform" />}
        {compose(
          allChildren => <NestedListing {...{ allChildren, name, replyTo }} />,
          getChildComments
        )(replies)}
      </div>
      <div className="clearleft" />
    </div>
  </div>
);

export default ThingComment;
