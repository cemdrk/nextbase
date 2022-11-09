import React from "react";


const ErrorPage: React.FC = (props) => {
    return (
      <>
        <h1>{props.statusCode}</h1>
      </>
    );
  };

ErrorPage.getInitialProps =  ({
    res,
    err,
  }) => {
    const statusCode =
      res && res.statusCode ? res.statusCode : err ? err.statusCode! : 404
    return { statusCode }
}

export default ErrorPage;
