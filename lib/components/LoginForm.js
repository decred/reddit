import React from "react";
import LinkComponent from "./Link";

const LoginForm = ({
  Link = LinkComponent,
  formAction="/post/login",
  username,
  usernameError,
  passwd,
  passwdError,
  onChangeUsername,
  onChangePasswd
}) => (
  <form
    action={formAction}
    className="form-v2"
    id="login-form"
    method="post"
    name="login-form"
  >
    <input name="op" type="hidden" defaultValue="login" />
    <input
      name="dest"
      type="hidden"
      defaultValue="/"
    />
    <div className="c-form-group">
      <label className="screenreader-only" htmlFor="user_login">
        username:
      </label>
      <input
        autoFocus
        className="c-form-control"
        id="user_login"
        maxLength={20}
        name="user"
        placeholder="username"
        tabIndex={3}
        type="text"
        value={username}
        onChange={e => onChangeUsername(e.target.value)}
      />
      <div className="c-form-control-feedback-wrapper">
        {usernameError
          ? <span className="c-form-control-feedback c-form-control-feedback-error" title={usernameError} />
          : null}
      </div>
    </div>
    <div className="c-form-group">
      <label className="screenreader-only" htmlFor="passwd_login">
        password:
      </label>
      <input
        className="c-form-control"
        id="passwd_login"
        name="passwd"
        placeholder="password"
        tabIndex={3}
        type="password"
        value={passwd}
        onChange={e => onChangePasswd(e.target.value)}
      />
      <div className="c-form-control-feedback-wrapper">
        {passwdError
          ? <span className="c-form-control-feedback c-form-control-feedback-error" title={passwdError} />
          : null}
      </div>
    </div>
    <div className="c-checkbox">
      <input id="rem_login" name="rem" tabIndex={3} type="checkbox" />
      <label htmlFor="rem_login">remember me</label>
      <Link className="c-pull-right" href="/password">
        reset password
      </Link>
    </div>
    <div className="c-clearfix c-submit-group">
      <button
        className="c-btn c-btn-primary c-pull-right"
        tabIndex={3}
        type="submit"
      >
        log in
      </button>
    </div>
    <div>
      <div className="c-alert c-alert-danger" />
    </div>
  </form>
);

export default LoginForm;
