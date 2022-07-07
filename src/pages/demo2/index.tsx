import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/demo.action";
import { Button } from "react-vant";
import "./index.scss";

export default function Home() {
  const state: any = useSelector(state => state);

  const dispatch = useDispatch();
  let addFn = () => {
    dispatch(actions.add(2));
  };

  let minusFn = () => {
    dispatch(actions.minus());
  };

  let asyncAddFn = () => {
    dispatch(actions.asyncAdd());
  };

  let reqTestFn = () => {
    dispatch(actions.asyncReqtest());
  };

  let num = state.demo.num;
  let testData = JSON.stringify(state.demo.testData, null, 1);

  return (
    <div>
      <div style={{ padding: "12px" }}>
        <Button
          block
          onClick={() => {
            history.back();
          }}
        >
          Back
        </Button>
        <Button block onClick={addFn}>
          +
        </Button>
        <Button block onClick={minusFn}>
          -
        </Button>
        <Button block onClick={asyncAddFn}>
          async +
        </Button>
        <Button block onClick={reqTestFn}>
          reqTest
        </Button>
        <div>{num}</div>
        <pre>{testData}</pre>
      </div>
    </div>
  );
}
