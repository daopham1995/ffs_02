import React from 'react';

export default class HeaderUser extends React.Component {
  render(){
    return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-4 main-logo">
              <a href="index.html"><img src="../assets/logo.png" alt="logo" className="logo img-responsive" /></a>
            </div>
            <div className="col-md-8">
              <div className="pushright">
                <div className="top">
                  <a href="#" id="reg" className="btn btn-default btn-dark">Login<span>-- Or --</span>Register</a>
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
                  <div className="srch-wrap">
                    <a href="#" id="srch" className="btn btn-default btn-search"><i className="fa fa-search"></i></a>
                  </div>
                  <div className="srchwrap">
                    <div className="row">
                      <div className="col-md-12">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <div className="col-sm-10">
                              <input type="text" className="form-control" id="search" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashed"></div>
      </div>

      <div className="main-nav">
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="index.html" className="active">Home</a><div className="curve"></div></li>
                    <li className="dropdown menu-large">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mega Menu</a>
                      <ul className="dropdown-menu megamenu container row">
                        <li className="col-sm-4">
                          <h4>Page Template</h4>
                          <ul>
                            <li><a href="index.html">Home Page</a></li>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="category-list.html">Category List Page</a></li>
                            <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                            <li><a href="product.html">Detail Product Page</a></li>
                            <li><a href="page-sidebar.html">Page with sidebar</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="order.html">Order Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                          </ul>
                          <div className="dashed-nav"></div>
                        </li>
                        <li className="col-sm-4">
                          <h4>Page Template</h4>
                          <ul>
                            <li><a href="index.html">Home Page</a></li>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="category-list.html">Category List Page</a></li>
                            <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                            <li><a href="product.html">Detail Product Page</a></li>
                            <li><a href="page-sidebar.html">Page with sidebar</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="order.html">Order Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                          </ul>
                          <div className="dashed-nav"></div>
                        </li>
                        <li className="col-sm-4">
                          <h4>Page Template</h4>
                          <ul>
                            <li><a href="index.html">Home Page</a></li>
                            <li><a href="category.html">Category Page</a></li>
                            <li><a href="category-list.html">Category List Page</a></li>
                            <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                            <li><a href="product.html">Detail Product Page</a></li>
                            <li><a href="page-sidebar.html">Page with sidebar</a></li>
                            <li><a href="register.html">Register Page</a></li>
                            <li><a href="order.html">Order Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="contact.html">Contact Page</a></li>
                          </ul>
                          <div className="dashed-nav"></div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="index.html">Home Page</a></li>
                        <li><a href="category.html">Category Page</a></li>
                        <li><a href="category-list.html">Category List Page</a></li>
                        <li><a href="category-fullwidth.html">Category fullwidth</a></li>
                        <li><a href="product.html">Detail Product Page</a></li>
                        <li><a href="page-sidebar.html">Page with sidebar</a></li>
                        <li><a href="register.html">Register Page</a></li>
                        <li><a href="order.html">Order Page</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                        <li><a href="contact.html">Contact Page</a></li>
                      </ul>
                    </li>
                    <li><a href="page-sidebar.html">About</a></li>
                    <li><a href="category.html">Product</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 machart">
                <button id="popcart" className="btn btn-default btn-chart btn-sm "><span className="mychart">Cart</span>|<span className="allprice">$0.00</span></button>
                <div className="popcart">
                  <table className="table table-condensed popcart-inner">
                    <tbody>
                      <tr>
                        <td>
                        <a href="product.html"><img src="../assets/dummy-1.png" alt="" className="img-responsive"/></a>
                        </td>
                        <td><a href="product.html">Casio Exilim Zoom</a><br/><span>Color: green</span></td>
                        <td>1X</td>
                        <td>$138.80</td>
                        <td><a href=""><i className="fa fa-times-circle fa-2x"></i></a></td>
                      </tr>
                      <tr>
                        <td>
                        <a href="product.html"><img src="../assets/dummy-1.png" alt="" className="img-responsive"/></a>
                        </td>
                        <td><a href="product.html">Casio Exilim Zoom</a><br/><span>Color: green</span></td>
                        <td>1X</td>
                        <td>$138.80</td>
                        <td><a href=""><i className="fa fa-times-circle fa-2x"></i></a></td>
                      </tr>
                      <tr>
                        <td>
                        <a href="product.html"><img src="../assets/dummy-1.png" alt="" className="img-responsive"/></a>
                        </td>
                        <td><a href="product.html">Casio Exilim Zoom</a><br/><span>Color: green</span></td>
                        <td>1X</td>
                        <td>$138.80</td>
                        <td><a href=""><i className="fa fa-times-circle fa-2x"></i></a></td>
                      </tr>
                    </tbody>
                  </table>
                  <span className="sub-tot">Sub-Total : <span>$277.60</span> | <span>Vat (17.5%)</span> : $36.00 </span>
                  <br/>
                  <div className="btn-popcart">
                    <a href="checkout.html" className="btn btn-default btn-red btn-sm">Checkout</a>
                    <a href="cart.html" className="btn btn-default btn-red btn-sm">More</a>
                  </div>
                  <div className="popcart-tot">
                    <p>
                      Total<br/>
                      <span>$313.60</span>
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
  }
}
