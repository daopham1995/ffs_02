import React from 'react';

export default class Footer extends React.Component {
  render(){
    return (
      <div>
        <div className="f-widget">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="title-widget-bg">
                  <div className="title-widget">{I18n.t('views.inform')}</div>
                </div>
                <ul className="tweets">
                  <li>{I18n.t('layouts.footer.company_name')}
                    <a href="http://recruit.framgia.vn">http://recruit.framgia.vn/</a>
                  </li>
                  <li className="lastone">{I18n.t('layouts.footer.company_add')}</li>
                </ul>
                <div className="clearfix"></div>
                <a href="#" className="btn btn-default btn-follow"><i className="fa fa-twitter fa-2x"></i><div>Follow us on twitter</div></a>
              </div>
              <div className="col-md-4">
                <div className="title-widget-bg">
                  <div className="title-widget">{I18n.t('layouts.footer.support')}</div>
                </div>
                <div className="newsletter">
                  <li>
                    {I18n.t('layouts.footer.support_1')}
                  </li>
                  <li>
                    {I18n.t('layouts.footer.support_2')}
                  </li>
                  <form role="form">
                    <div className="form-group">
                      <label>Your Email address</label>
                      <input type="email" className="form-control newstler-input" id="exampleInputEmail1" placeholder="Enter email" />
                      <button className="btn btn-default btn-red btn-sm">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="title-widget-bg">
                  <div className="title-widget-cursive">{I18n.t('views.contact_info')}</div>
                </div>
                <ul className="contact-widget">
                  <li className="fphone"> +387 123 456</li>
                  <li className="fmobile">+0967 648 290</li>
                  <li className="fmail lastone">daopt22@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ul className="footermenu">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="cart.html">My Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="order.html">Completed Orders</a></li>
                  <li><a href="contact.html">Contact us</a></li>
                </ul>
                <div className="f-credit">&copy;All rights reserved by <a href="#">yoursite.com</a></div>
              </div>
              <div className="col-md-3">
                <div className="followon">Follow us on</div>
                <div className="fsoc">
                  <a href="http://twitter.com/minimalthemes" className="ftwitter">twitter</a>
                  <a href="http://www.facebook.com/pages/Minimal-Themes/264056723661265" className="ffacebook">facebook</a>
                  <a href="#" className="fflickr">flickr</a>
                  <a href="#" className="ffeed">feed</a>
                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
