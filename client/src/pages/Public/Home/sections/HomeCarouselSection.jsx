import React, { useEffect } from "react";
import {
  getTopRatedProducts,
  getTopSalesProducts,
  getTopSoldProducts,
  getNewArrivalsProducts,
} from "../../../../features/products/productsServices";
import { useDispatch, useSelector } from "react-redux";
import ProductsCarousel from "../../../../common/components/Carousel/ProductsCarousel";


const convertTitleToVietnamese = (title) => {
  switch (title) {
    case "Top Rated":
      return "Sản phẩm được đánh giá cao";
    case "Top Sales":
      return "Khuyến mãi hot";
    case "Top Sold":
      return "Sản phẩm bán chạy";
    case "New Arrivals":
      return "Hàng mới về";
    default:
      return title;
  }
};

const HomeCarouselSection = () => {
  const dispatch = useDispatch();
  const { homeProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getTopRatedProducts());
    dispatch(getTopSalesProducts());
    dispatch(getTopSoldProducts());
    dispatch(getNewArrivalsProducts());
  }, [dispatch]);

  return (
    <section className="products-carousel-section">
      {homeProducts.map((item, idx) => (
        <div key={idx} className="mb-5">
          <h2 className="text-center mb-3">
            {convertTitleToVietnamese(item.title)}
          </h2>
          <ProductsCarousel item={item} />
        </div>
      ))}
    </section>
  );
};

export default HomeCarouselSection;
