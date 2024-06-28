import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";

import * as UserServices from "~/services/UserServices";
import * as message from "~/components/Message";
import Loading from "~/components/LoadingComponent";
import { useMutationHooks } from "~/hooks/useMutationHooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "~/redux/slides/userSlide";

const cx = classNames.bind(styles);

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const infor = {
      name: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };

    mutation.mutate(infor);
  };

  const mutation = useMutationHooks((data) => UserServices.loginUser(data));
  const { data, isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success("Đăng nhập thành công");
      navigate("/");
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token);
        }
      }
    } else if (isError) {
      message.error("Đăng nhập thất bại");
    }
  }, [isSuccess]);

  const handleGetDetailUser = async (id, token) => {
    const res = await UserServices.getDetailUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  return (
    <Loading isPending={isPending}>
      <div className={cx("form__wrapper")}>
        <div className={cx("form__container")}>
          <form
            onSubmit={handleSubmit}
            action=""
            className={cx("form__section")}
          >
            <h1 className={cx("form__header")}>Đăng nhập</h1>

            <div className={cx("form__group")}>
              <label htmlFor="email" className={cx("form__label")}>
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="VD: abc@gmail.com"
                className={cx("form__input")}
              />
            </div>

            <div className={cx("form__group")}>
              <label htmlFor="password" className={cx("form__label")}>
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                className={cx("form__input")}
              />
            </div>

            <button className={cx("form__submit")}>Đăng nhập</button>
          </form>

          <div className={cx("no__account")}>
            <p className={cx("signUp__text")}>
              Chưa có tài khoản?
              <span onClick={() => navigate("/sign-up")}>Tạo tài khoản</span>
            </p>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default SignIn;
