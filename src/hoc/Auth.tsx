import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../api/users";
import { login } from "../redux/modules/userSlice";
import Loading from "../components/Loading";

export default function Auth(
  SpecificComponent: React.ComponentType,
  option: null | boolean,
  adminRoute = false
) {
  /* option
    1. null => 아무나 출입 가능
    2. true => 로그인한 유저만 출입 가능
    3. false => 로그인한 유저는 출입 불가능
  */
  function AuthenticationCheck() {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: { user: any }) => state.user);
    const [loading, setLoading] = useState(true);

    const checkRender = (isAuth: boolean, isAdmin: boolean) => {
      if (!isAuth) {
        // 로그인 X
        if (option === true) return navigation("/login", { replace: true });
        else setLoading(false);
      } else {
        // 로그인 O
        if (adminRoute && !isAdmin) return navigation("/", { replace: true });

        if (option === false) return navigation("/", { replace: true });
        else setLoading(false);
      }
    };

    const __asyncAuth = async () => {
      try {
        const auth_result = await auth();
        dispatch(login(auth_result));
        checkRender(true, false);
      } catch {
        return { auth: false };
      }
    };

    useEffect(() => {
      if (!user.auth && localStorage.getItem("token")) {
        __asyncAuth();
      } else checkRender(user.auth, user.isAdmin);
    }, [dispatch, user.auth, user.isAdmin]);

    if (loading) return <Loading full={true} />;
    else return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
