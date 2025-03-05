import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const number = useSelector((state) => state.user.number);

  const btnClick = () => {
    dispatch({ type: "ADD", data: { number: value } });
  };

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="button" value="+" onClick={btnClick} />
      <input
        type="button"
        value="-"
        onClick={() => dispatch({ type: "MINUS" })}
      />

      <div>값: {number}</div>
    </div>
  );
}

export default Main;
