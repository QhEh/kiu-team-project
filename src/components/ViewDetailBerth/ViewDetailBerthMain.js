import { useEffect } from "react";
import style from "../../css/ViewDetailBerth/ViewDetailBerthMain.module.css";
import BackBtn from "./BackBtn";
import HostInfo from "./HostInfo";
import TitleInfo from "./TitleInfo";
import ViewDetailBerthSwiper from "./ViewDetailBerthSwiper";
import WishBtn from "./WishBtn";

export default function ViewDetailBerthMain(props) {
  // console.log(props.state);
  const ImgArr = props.state.titleImg;
  //   console.log(ImgArr);
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <>
      <div className={style.wrap}>
        <BackBtn />
        <WishBtn />
        <ViewDetailBerthSwiper imgArr={ImgArr} />
        <TitleInfo info={props.state} />
        <HostInfo info={props.state}/>
      </div>
    </>
  );
}
