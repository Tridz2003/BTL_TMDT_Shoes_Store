import React from "react";
import {useParams} from "react-router-dom";
import {Container} from "reactstrap";
import PageBreadcrumbs from "../../../common/components/Shared/PageBreadcrumbs";
import PageHelmet from "../../../common/components/Shared/PageHelmet";
import ProductInfoSection from "./sections/ProductInfoSection";

const ProductDetails = () => {
  const {productId} = useParams();
  return (
    <>
      <PageHelmet title={`Products | ${productId}`} />
      <Container className="my-4">
        <PageBreadcrumbs
          pages={[
            {page: "Trang chủ", link: "/"},
            {page: "Cửa hàng", link: "/shop"},
            {page: `Sản phẩm(${productId})`, isActive: true},
          ]}
        />
        <ProductInfoSection />
      </Container>
    </>
  );
};

export default ProductDetails;
