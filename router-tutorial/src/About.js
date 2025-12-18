import React from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  const lc = useLocation();
  const location = lc.pathname;

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.
        {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
      </p>
    </div>
  );
};

export default About;
