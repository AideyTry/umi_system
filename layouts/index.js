import React from "react";
import Link from 'umi/link'
import "bootstrap/dist/css/bootstrap.css";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">管理系统</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">首页</Link>
                <Link to="/user">用户管理</Link>
                <Link to="/profile">个人中心</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
