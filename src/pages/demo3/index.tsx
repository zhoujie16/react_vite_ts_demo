import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/demo.action";
import { Button } from "react-vant";
import "./index.scss";
import ZxmImage from "./ZxmImage";
import demo_svg from "./ZxmImage/3.svg";
import demo_img from "./ZxmImage/3.png";

export default function Home() {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="demo3_wrap">
      {arr.map((x, i) => (
        <ZxmImage
          key={i}
          src={demo_img}
          preSrc={demo_svg}
          style={{ width: "10rem", height: "10rem" }}
        />
      ))}
    </div>
  );
}
