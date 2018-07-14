import React from "react";
import LinkComponent from "./Link";

const CommentForm = ({
  Link = LinkComponent,
  body,
  defaultBody,
  onChangeBody,
}) => (
  <form
    className="usertext cloneable warn-on-unload"
    id="form-t5_mza2"
  >
    <input name="thing_id" type="hidden" defaultValue="t5_m" />
    <div className="usertext-edit md-container" style={{}}>
      <div className="md">
        <textarea
          cols={1}
          data-event-action="comment"
          data-type="link"
          name="text"
          rows={1}
          defaultValue={defaultBody}
          body={body}
          onChange={onChangeBody && ((e) => onChangeBody(e.target.value))}
        />
      </div>
      <div className="bottom-area">
        <span className="help-toggle toggle" style={{}}>
          <a
            className="option active"
            tabIndex={100}
          >
            formatting help
          </a>
          <a className="option">
            hide help
          </a>
        </span>
        <Link
          className="reddiquette"
          href="/help/contentpolicy"
          tabIndex={100}
          target="_blank"
        >
          content policy
        </Link>
        <div className="usertext-buttons">
          <button className="save" type="submit">
            save
          </button>
          <button
            className="cancel"
            style={{
              display: "none"
            }}
            type="button"
          >
            cancel
          </button>
        </div>
      </div>
      <div
        className="markhelp"
        style={{
          display: "none"
        }}
      >
        <p>
          reddit uses a slightly-customized version of{" "}
          <a href="http://daringfireball.net/projects/markdown/syntax">
            Markdown
          </a>{" "}
          for formatting. See below for some basics, or check{" "}
          <a href="/wiki/commenting">the commenting wiki page</a> for more
          detailed help and solutions to common issues.
        </p>
        <table className="md">
          <tbody>
            <tr
              style={{
                backgroundColor: "#ffff99",
                textAlign: "center"
              }}
            >
              <td>
                <em>you type:</em>
              </td>
              <td>
                <em>you see:</em>
              </td>
            </tr>
            <tr>
              <td>*italics*</td>
              <td>
                <em>italics</em>
              </td>
            </tr>
            <tr>
              <td>**bold**</td>
              <td>
                <b>bold</b>
              </td>
            </tr>
            <tr>
              <td>[reddit!](https://reddit.com)</td>
              <td>
                <a href="https://reddit.com">reddit!</a>
              </td>
            </tr>
            <tr>
              <td>
                * item 1<br />
                * item 2<br />
                * item 3
              </td>
              <td>
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>> quoted text</td>
              <td>
                <blockquote>quoted text</blockquote>
              </td>
            </tr>
            <tr>
              <td>
                Lines starting with four spaces<br />
                are treated like code:<br />
                <br />
                <span className="spaces">    </span>if 1 * 2 != 3:<br />
                <span className="spaces">        </span>print "hello, world!"<br />
              </td>
              <td>
                Lines starting with four spaces<br />
                are treated like code:<br />
                <pre>
                  if 1 * 2 != 3:<br />    print "hello, world!"{"\n"}
                </pre>
              </td>
            </tr>
            <tr>
              <td>~~strikethrough~~</td>
              <td>
                <strike>strikethrough</strike>
              </td>
            </tr>
            <tr>
              <td>super^script</td>
              <td>
                super<sup>script</sup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </form>
);

export default CommentForm;
