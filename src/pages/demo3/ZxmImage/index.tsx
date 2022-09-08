import "./index.scss";
import { useEffect, useRef, useState } from "react";

function rand(m: any, n: any) {
  return Math.ceil(Math.random() * (n - m + 1) + m - 1);
}

export default function Index(props: any) {
  let { src, preSrc, style } = props;
  let inner_ref: any = useRef();
  let pre_ref: any = useRef();
  let next_ref: any = useRef();
  let initImage = async () => {
    // console.log(pre_ref, next_ref);
    await new Promise(r => setTimeout(r, 0));
    await new Promise(r => setTimeout(r, rand(50, 800)));
    const pre: any = pre_ref.current;
    const next: any = next_ref.current;
    next.src = src;
    pre.classList.add("loaded");
    next.classList.add("loaded");
    next.addEventListener("animationend", function animationend() {
      pre.classList.add("hidden");
      next.removeEventListener("animationend", animationend);
    });
  };
  let preOnLoad = () => {
    inner_ref.current.style.height = pre_ref.current.offsetHeight + "px";
  };
  let initObserver = () => {
    let p = inner_ref.current;
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // isIntersecting 如果这个值 为 true 那就是 DOM 进去 可视区
          // 停止 观察
          // console.log("P 进入 可视区");
          initImage();
          observer.unobserve(p);
        }
      },
      { threshold: 0.2 }
    );
    // 观察 那个 DOM  开始观察
    observer.observe(p);
  };
  useEffect(() => {
    initObserver();
  }, []);
  return (
    <div className="zxm_image_wrap">
      <div className="zxm_image_inner" ref={inner_ref} style={style}>
        <img
          ref={pre_ref}
          className="zxm_image_pre"
          src={preSrc}
          onLoad={preOnLoad}
        />
        <img ref={next_ref} className="zxm_image_next" src={preSrc} />
      </div>
    </div>
  );
}
