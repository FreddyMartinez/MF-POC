import { Link } from "react-router-dom";
import { MyButton } from "../../components/Button";

export function FirstForm() {
  return (
    <form>
      <legend>First step</legend>
      <label htmlFor="">This is an input</label>
      <input type="text" />
      <MyButton>
        <Link to="/second">Next</Link>
      </MyButton>
    </form>
  );
}
