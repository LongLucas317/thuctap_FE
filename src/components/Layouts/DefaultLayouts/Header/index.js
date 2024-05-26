import classNames from "classnames/bind";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

function Header() {
  return (
    <div>
      <h2 className={cx("header__text")}>Header</h2>
    </div>
  );
}

export default Header;
