import { Link } from "react-router-dom";

export function FirstForm() {
  return (
    <form>
      <legend>First step</legend>
      <label htmlFor="">This is an input</label>
      <input type="text" />
      <button>
        <Link to="/second">Next</Link>
      </button>
    </form>
  );
}
