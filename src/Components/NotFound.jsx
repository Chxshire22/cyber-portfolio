import { Link } from "react-router-dom"

export default function NotFound(){
  return (
    <>
      <h1 className="not-found">
        whoop, where were you going? <br />
        <Link to="/">click here to go back</Link>
      </h1>
    </>
  );
}