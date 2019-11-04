/**
 * title: 个人中心
 * Routes:
 *   - ./PrivateRoute.js
 */
import React from "react";
import router from "umi/router";
class Profile extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => router.push("/")}>跳转到首页去</button>
        个人中心
      </div>
    );
  }
}
export default Profile;
