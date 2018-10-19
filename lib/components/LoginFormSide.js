import React from "react";
import LinkComponent from "./Link";

const LoginFormSide = ({
  Link = LinkComponent,
  formAction="/post/login",
  username,
  onChangeUsername,
  onChangePasswd,
  onLogin
}) => (
  <div className="spacer">
    <form
      action={formAction}
      className="login-form login-form-side"
      id="login_login-main"
      method="post"
      onSubmit={onLogin}
    >
      <input name="op" type="hidden" defaultValue="login-main" />
      <input
        maxLength={20}
        name="user"
        placeholder="username"
        tabIndex={1}
        type="text"
        value={username}
        onChange={e => onChangeUsername(e.target.value)}
      />
      <input
        name="passwd"
        placeholder="password"
        tabIndex={1}
        type="password"
        onChange={e => onChangePasswd(e.target.value)}
      />
      <div className="status" />
      <div id="remember-me">
        <input id="rem-login-main" name="rem" tabIndex={1} type="checkbox" />
        <label htmlFor="rem-login-main">remember me</label>
        <Link className="recover-password" href="/password">
          reset password
        </Link>
      </div>
      <div className="submit">
        <button className="btn" tabIndex={1} type="submit">
          login
        </button>
      </div>
      <div className="clear" />
    </form>
  </div>
);

export default LoginFormSide;

