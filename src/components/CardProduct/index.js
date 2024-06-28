import classNames from "classnames/bind";
import styles from "./CardProduct.module.scss";

import productImg from "~/assets/img/ip.webp";

const cx = classNames.bind(styles);

function CardProduct() {
  return (
    <div className={cx("cardProduct__wrapper")}>
      <div className={cx("product__img")}>
        <img src={productImg} alt="phone" />
      </div>
    </div>
  );
}

export default CardProduct;
