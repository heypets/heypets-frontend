import style from './terms.module.css';

import Logo from 'public/icons/logo.svg';
import Kakao from 'public/icons/kakao.svg';

const Terms = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading} aria-label="펫트레일">
        <Logo />
      </h2>

      <a href="#" className={style.kakao_link}>
        <Kakao />
        <span>1:1 문의하기</span>
      </a>

      <div className={style.term_wrapper}>
        <a>서비스 이용약관</a>
        <a>개인정보처리방침</a>
        <a>기타 정보</a>
      </div>
    </div>
  );
};

export default Terms;
