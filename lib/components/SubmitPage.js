import React from "react";
import MarkdownHelpComponent from "./MarkdownHelp";

const SubmitPage = ({
  MarkdownHelp=MarkdownHelpComponent,
  subreddit,
  siteprefix="r",
  sitename="reddit",
  subname="subreddit",
  title="",
  url="",
  text="",
  is_self=false,
  isShowingMarkdownHelp=false,
  subscribedSubreddits,
  urlError,
  titleError,
  textError,
  subredditError,
  onChangeIsSelf,
  onChangeTitle,
  onChangeUrl,
  onChangeText,
  onChangeSubreddit,
  onChangeSendReplies,
  onSuggestTitle,
  onSubmit
}) => (
  <div className="content" role="main">
    <h1>
      submit to {subreddit ? <a href={`/${siteprefix}/${subreddit}/`}>{subreddit}</a> : sitename}
    </h1>
    <form
      className="submit content warn-on-unload"
      id="newlink"
      method="post"
      onSubmit={onSubmit}
    >
      <input name="uh" type="hidden" defaultValue="AaronSw" />
      <ul className="tabmenu formtab">
        <li className={is_self ? "" : "selected"}>
          <a
            className="link-button choice"
            href=""
            onClick={e => {
              e.preventDefault();
              return onChangeIsSelf && onChangeIsSelf(false);
            }}
          >
            link
          </a>
        </li>
        <li className={is_self ? "selected" : ""}>
          <a
            className="link-button choice"
            href=""
            onClick={e => {
              e.preventDefault();
              return onChangeIsSelf && onChangeIsSelf(true);
            }}
          >
            text
          </a>
        </li>
      </ul>
      <div className="formtabs-content">
        <div className="spacer">
          {is_self ? (
            <div
              className="infobar"
              id="text-desc"
            >
              You are submitting a text-based post. Speak your mind. A title is
              required, but expanding further in the text field is not. Beginning
              your title with "vote up if" is violation of intergalactic law.
            </div>
          ) : (
            <div
              className="infobar"
              id="link-desc"
            >
              You are submitting a link. The key to a successful submission is
              interesting content and a descriptive title.
            </div>
          )}
        </div>
        <div className="spacer">
          <div className="roundfield" id="title-field">
            <span className="title">title</span>
            <div className="roundfield-content">
              <textarea
                name="title"
                required
                rows={2}
                defaultValue={title}
                onChange={onChangeTitle}
              />
              {titleError ? (
                <div className="error field-title">{titleError}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="spacer">
          <div
            className="roundfield"
            id="url-field"
            style={{ display: is_self ? "none" : "block" }}
          >
            <span className="title">url</span>
            <div className="roundfield-content">
              <input
                disabled={is_self ? "disabled" : null}
                name="kind"
                type="hidden"
                defaultValue="link"
              />
              <input
                disabled={is_self ? "disabled" : null}
                id="url"
                name="url"
                required
                type="url"
                defaultValue={url}
                onChange={onChangeUrl}
              />
              {urlError ? (
                <div className="error field-url">{urlError}</div>
              ) : null}
              <div className="error ALREADY_SUB field-url" style={{ display: "none" }} />
              {onSuggestTitle ? (
                <div id="suggest-title">
                  <button tabIndex={100} type="button" >
                    suggest title
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="spacer">
          <div
            className="roundfield"
            id="text-field"
            style={{ display: is_self ? "block" : "none" }}
          >
            <span className="title">text</span>{" "}
            <span className="little gray roundfield-description">
              (optional)
            </span>
            <div className="roundfield-content">
              <input name="kind" type="hidden" defaultValue="self" />
              <div className="usertext">
                <input name="thing_id" type="hidden" defaultValue />
                <div className="usertext-edit md-container" style={{}}>
                  <div className="md">
                    <textarea
                      cols={1}
                      name="text"
                      defaultValue={text}
                      onChange={onChangeText}
                      rows={1}
                      disabled={is_self ? null : "disabled"}
                    />
                  </div>
                  <div className="bottom-area">
                    <span className="help-toggle toggle" style={{}}>
                      <a className="option active" tabIndex={100} >formatting help</a>
                      <a className="option">hide help</a>
                    </span>
                    <a
                      className="reddiquette"
                      href="/help/contentpolicy"
                      tabIndex={100}
                      target="_blank"
                    >
                      content policy
                    </a>
                    {textError ? (
                      <div className="error field-text">{textError}</div>
                    ) : null}
                    <div className="usertext-buttons">
                      <button
                        className="save"
                        style={{ display: "none" }}
                        type="submit"
                      >
                        save
                      </button>
                      <button
                        className="cancel"
                        style={{ display: "none" }}
                        type="button"
                      >
                        cancel
                      </button>
                    </div>
                  </div>
                  {isShowingMarkdownHelp ? <MarkdownHelp /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className="roundfield" id="reddit-field">
            <span className="title">choose a {subname}</span>
            <div className="roundfield-content">
              <div id="sr-autocomplete-area">
                <input
                  autoComplete="off"
                  id="sr-autocomplete"
                  name="sr"
                  required
                  type="text"
                  defaultValue={subreddit}
                  onChange={onChangeSubreddit}
                />
                <ul id="sr-drop-down">
                  <li className="sr-name-row" >nothin</li>
                </ul>
              </div>
              {subredditError ? (
                <div className="error field-sr">{subredditError}</div>
              ) : null}
              {subscribedSubreddits ? (
                <div id="suggested-reddits">
                  <h3>your subscribed subs</h3>
                  <ul>
                    {subscribedSubreddits.map((name, idx) => (
                      <li key={name}>
                        <a tabIndex={100+idx} >{sitename}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className="submit_text roundfield">
            <h1>submitting to /{siteprefix}/{subreddit}</h1>
          </div>
        </div>
        {onChangeSendReplies ? (
          <div className="spacer">
            <div className="roundfield">
              <span className="title">options</span>
              <div className="roundfield-content">
                <input
                  defaultChecked="checked"
                  className="nomargin"
                  data-send-checked="true"
                  id="sendreplies"
                  name="sendreplies"
                  type="checkbox"
                  onChange={onChangeSendReplies}
                />
                <label htmlFor="sendreplies">send replies to my inbox</label>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="roundfield info-notice">
        please be mindful of {sitename}'s{" "}
        <a href="/help/contentpolicy" target="_blank">content policy</a>
        {" and practice "}
        <a href="/wiki/reddiquette" target="_blank">good ediquette</a>.
      </div>
      <input name="resubmit" type="hidden" defaultValue />
      <div className="spacer">
        <button className="btn" name="submit" type="submit" value="form">submit</button>
      </div>
    </form>
  </div>
);

export default SubmitPage;
