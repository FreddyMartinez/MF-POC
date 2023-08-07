import { Link } from "react-router-dom";

export default function SecondForm() {
  return (
    <form>
      <legend>Second step</legend>
      <label htmlFor="">This is another input</label>
      <input type="text" />
      <button>
        <Link to="/">Prev</Link>
      </button>
    </form>
  );
}
