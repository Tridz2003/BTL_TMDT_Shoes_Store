import React from "react";
import PageHelmet from "../../../common/components/Shared/PageHelmet";
import HomeBannersSection from "./sections/HomeBannersSection";
import HomeCarouselSection from "./sections/HomeCarouselSection";
import HomeCategoriesSection from "./sections/HomeCategoriesSection";

const Home = () => {
  return (
    <>
      <PageHelmet title={"Trang chủ"} /> {/* Tiêu đề hiển thị trên tab trình duyệt */}
      <HomeBannersSection />
      <HomeCategoriesSection />
      <HomeCarouselSection />
    </>
  );
};

export default Home;
