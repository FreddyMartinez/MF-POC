import { MyButton } from "../../components/Button";
import { Link } from "react-router-dom";

export default function SecondForm() {
  return (
    <form>
      <legend>Second step</legend>
      <label htmlFor="">This is another input</label>
      <input type="text" />
      <MyButton
        onClick={() => {
          console.log("navigate back");
        }}
      >
        <Link to="/">Prev</Link>
      </MyButton>
    </form>
  );
}
