import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1>Oops!</h1>
      <p>404 - Page Not Found.</p>
      <Link to="/" className="backHomeLink">Back To Home</Link>
    </div>
  );
}

export default PageNotFound;
