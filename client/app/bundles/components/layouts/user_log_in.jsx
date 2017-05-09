import React from 'react';

export default class UserLogIn extends React.Component {
  render(){
    return (
      <div className="regwrap">
        <div className="row">
          <div className="col-md-6 regform">
            <div className="title-widget-bg">
              <div className="title-widget">{I18n.t('login')}</div>
            </div>
            <form role="form">
              <div className="form-group">
                <input type="text" className="form-control" id="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="password" />
              </div>
              <div className="form-group">
                <button className="btn btn-default btn-red btn-sm">Sign In</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="title-widget-bg">
              <div className="title-widget">Register</div>
            </div>
            <p>
              New User? By creating an account you be able to shop faster, be up to date on an order
            </p>
            <button className="btn btn-default btn-yellow">Register Now</button>
          </div>
        </div>
      </div>
    );
  }
}
