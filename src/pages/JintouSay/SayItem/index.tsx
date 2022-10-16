import { getJinTouSay } from "@/api/demo";
import { useEffect, useState } from "react";
import { JTSayListItem } from "../types";
import "./index.scss";
import { Image, ImagePreview, Cell } from "react-vant";
import moment from "moment";

function filterImgUrl(url: string) {
  let _url;
  if (url.includes("http")) {
    _url = url;
  } else {
    _url = `https://res.cngoldres.com${url}`;
  }
  return _url;
}

function Index({ sayItemProps }: { sayItemProps: JTSayListItem }) {
  const { say, author } = sayItemProps;
  let picture_list: any = [];
  let sendTime = "";
  try {
    sendTime = moment(say.sendTime).format("MM-DD HH:mm:ss");
    picture_list = say.pictures?.split(",");
    picture_list = picture_list.filter((x: any) => x);
    picture_list = picture_list.map((x: any) => filterImgUrl(x));
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="jin_tou_say_item_wrap">
      <div className="jin_tou_say_item">
        <div className="jts_author">
          <div className="jts_author_l">
            <Image
              className="jts_author_l_img"
              src={filterImgUrl(say.senderPhoto)}
              alt=""
            />
          </div>
          <div className="jts_author_r">
            <div className="jts_author_name">{say?.senderNickName}</div>
            <div className="jts_author_time">{sendTime}</div>
          </div>
        </div>
        <div className="jts_say_content">
          <div dangerouslySetInnerHTML={{ __html: say.content }}></div>
        </div>
        <div className="jts_pictures_list">
          {picture_list.map((pic: string, index: number) => (
            <Image
              className="jts_pictures_img"
              src={pic}
              fit="cover"
              lazyload
              onClick={() => {
                ImagePreview.open({
                  images: picture_list,
                  startPosition: index,
                });
              }}
            ></Image>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
