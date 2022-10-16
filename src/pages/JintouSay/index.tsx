import { getJinTouSay } from "@/api/demo";
import { useEffect, useState } from "react";
import "./index.scss";
import SayItem from "./SayItem";

function Index() {
  useEffect(() => {
    document.title = "动态列表";
    initPage();
  }, []);

  const [say_list, set_say_list] = useState([]);
  async function initPage() {
    const _say_list_res = await getJinTouSay();
    set_say_list(_say_list_res.data || []);
  }

  return (
    <div className="jin_tou_say_wrap">
      {say_list.map((item, index) => (
        <SayItem sayItemProps={item} key={index} />
      ))}
    </div>
  );
}

export default Index;
