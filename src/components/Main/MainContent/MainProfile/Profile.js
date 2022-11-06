import style from "../../../../css/Main/MainContent/MainProfile/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  return (
    <>
      <div className={style.wrap}>
        <h1>프로필</h1>

        <div className={style.myprofile}>
          
            <div>
              <div className={style.imgback} style={{ display: "inline-block" }}>
                <img className={style.img} src="/img/icon/LAMAH3.svg"></img>
              </div>
              <div style={{ display: "inline-block", padding: "10px" }}>
                라마 관리자
                <div className={style.stitle}>프로필 보기</div>
              </div>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          
        </div>

        <h2>내 정보 관리</h2>
        <div className={style.bord}>
          개인 정보
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          예약 확인
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          나의 후기
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          최근 본 숙소
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>

        <h2>호스팅</h2>
        <div className={style.bord}>
          숙소 등록하기
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          내 숙소
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          예약 관리
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        <div className={style.bord}>
          매출 관리
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
        
      </div>
      <button className={style.button}>로그아웃</button>
    </>
  );
}
