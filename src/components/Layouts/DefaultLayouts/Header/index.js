import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Badge } from "antd";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header__wrapper")}>
      <h2 className={cx("store__name")}>shop</h2>

      <div className={cx("navigate__section")}>
        <ul className={cx("navigate__list")}>
          <li>Trang chủ</li>
          <li>Danh mục</li>
          <li>About</li>
        </ul>
      </div>

      <div className={cx("search__section")}>
        <input
          className={cx("search__input")}
          type="text"
          placeholder="Nhập tên sản phẩm"
        />
        <FontAwesomeIcon
          className={cx("search__icon")}
          icon={faMagnifyingGlass}
        />
      </div>

      <div className={cx("contact__section")}>
        <div className={cx("cart__section")}>
          <Badge
            className={cx("cartItem__count")}
            count={1}
            color="#009981"
            offset={[-5, 3]}
          >
            <FontAwesomeIcon
              className={cx("cart__icon")}
              style={{ color: "var(--WHITE)", fontSize: "16px" }}
              icon={faCartShopping}
            />
          </Badge>
        </div>

        <div className={cx("user__section")}>
          <FontAwesomeIcon className={cx("user__icon")} icon={faUser} />
          <button className={cx("user__btn")}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
