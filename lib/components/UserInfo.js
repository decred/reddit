import React from "react";
import LinkComponent from "./Link";

const UserInfo = ({
  Link = LinkComponent,
  username = "AaronSw",
  link_karma = 4671,
  onLogout
}) => (
  <div id="header-bottom-right">
    <span className="user">
      <Link href={`/user/${username}/`}>{username}</Link>{" "}
      (<span className="userkarma" title="post karma" >{link_karma}</span>)
    </span>
    <span className="separator">|</span>
    <Link
      className="nohavemail"
      href="/message/inbox/"
      id="mail"
      title="no new mail"
    >
      messages
    </Link>
    <span className="separator">|</span>
    <ul className="flat-list hover">
      <li>
        <Link className="pref-lang choice" href="/prefs">
          preferences
        </Link>
      </li>
    </ul>
    <span className="separator">|</span>
    <form className="logout hover" >
      <input name="uh" type="hidden" defaultValue={username} />
      <input name="top" type="hidden" defaultValue="off" />
      <input name="dest" type="hidden" defaultValue={"/r/{subreddit}/"} />
      <a onClick={onLogout}>logout</a>
    </form>
  </div>
);

export default UserInfo;

