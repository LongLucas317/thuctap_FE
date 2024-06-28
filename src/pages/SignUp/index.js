import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";

import * as UserServices from "~/services/UserServices";
import * as message from "~/components/Message";
import Loading from "~/components/LoadingComponent";
import { useNavigate } from "react-router-dom";
import { useMutationHooks } from "~/hooks/useMutationHooks";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const infor = {
      name: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };

    mutation.mutate(infor);
  };

  const mutation = useMutationHooks((data) => UserServices.signUp(data));
  const { isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success("Đăng ký thành công");
      navigate("/sign-in");
    } else if (isError) {
      message.error("Đăng ký thất bại");
    }
  }, [isSuccess, isError]);

  return (
    <Loading isPending={isPending}>
      <div className={cx("form__wrapper")}>
        <div className={cx("form__container")}>
          <form
            onSubmit={handleSubmit}
            action=""
            className={cx("form__section")}
          >
            <h1 className={cx("form__header")}>Đăng ký</h1>

            <div className={cx("form__group")}>
              <label htmlFor="fullname" className={cx("form__label")}>
                Họ và Tên:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className={cx("form__input")}
                placeholder="VD: Nguyễn Văn A"
              />
              <small className={cx("form__message")}></small>
            </div>

            <div className={cx("form__group")}>
              <label htmlFor="email" className={cx("form__label")}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={cx("form__input")}
                placeholder="VD: abc@gmail.com"
              />
              <small className={cx("form__message")}></small>
            </div>

            <div className={cx("form__group")}>
              <label htmlFor="password" className={cx("form__label")}>
                Mật khẩu:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={cx("form__input")}
                placeholder="Nhập mật khẩu"
              />
              <small className={cx("form__message")}></small>
            </div>

            <div className={cx("form__group")}>
              <label htmlFor="confirmpassword" className={cx("form__label")}>
                Xác nhận mật khẩu:
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmPassword"
                className={cx("form__input")}
                placeholder="Xác nhận mật khẩu"
              />
              <small className={cx("form__message")}></small>
            </div>

            <button className={cx("form__submit")}>Đăng ký</button>
          </form>

          <div className={cx("got__account")}>
            <p className={cx("signIn__text")}>
              Đã có tài khoản?
              <span onClick={() => navigate("/sign-in")}>Đăng nhập</span>
            </p>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default SignUp;
