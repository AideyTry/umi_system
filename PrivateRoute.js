import { Route, Redirect } from "react-router-dom";

export default ({render, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem("login") ? (
          render(props)
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};
