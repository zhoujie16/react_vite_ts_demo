import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/demo.action";
import { Button } from "react-vant";
import "./index.scss";
import ZxmImage from "./ZxmImage";
import demo_svg from "./ZxmImage/1.svg";
import demo_img from "./ZxmImage/1.jpg";

export default function Home() {
  let getImgUrl = (name: any) => {
    return new URL(`./assets/${name}`, import.meta.url).href;
  };
  let arr = [
    {
      src: getImgUrl("1.jpg"),
      preSrc: getImgUrl("1.svg"),
    },
    {
      src: getImgUrl("2.jpg"),
      preSrc: getImgUrl("2.svg"),
    },
    {
      src: getImgUrl("3.jpg"),
      preSrc: getImgUrl("3.svg"),
    },
    {
      src: getImgUrl("4.jpg"),
      preSrc: getImgUrl("4.svg"),
    },
    {
      src: getImgUrl("5.jpg"),
      preSrc: getImgUrl("5.svg"),
    },
    {
      src: getImgUrl("6.jpg"),
      preSrc: getImgUrl("6.svg"),
    },
    {
      src: getImgUrl("7.jpg"),
      preSrc: getImgUrl("7.svg"),
    },
    {
      src: getImgUrl("8.jpg"),
      preSrc: getImgUrl("8.svg"),
    },
    {
      src: getImgUrl("9.jpg"),
      preSrc: getImgUrl("9.svg"),
    },
  ];
  return (
    <div className="demo3_wrap">
      {arr.map((x, i) => (
        <ZxmImage
          key={i}
          src={x.src}
          preSrc={x.preSrc}
          style={{ width: "10rem", height: "10rem" }}
        />
      ))}
    </div>
  );
}
