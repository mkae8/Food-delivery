"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { PropsWithChildren } from "react";

const UserContext: any = createContext(null);
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState("");
  const [userDetail, setUserDetail] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { push } = useRouter();

  const loginHandler = async (email: any, password: any) => {
    try {
      const result: any = await axios.post("http://localhost:8000/user/login", {
        email,
        password,
      });

      window.localStorage.setItem("token", result.data.token);

      setToken(result.data.token);
      setIsLoggedIn(true);
      setUserDetail(result.user);
      push("/");
    } catch (error: any) {
      setToken("");
      setIsLoggedIn(false);
      console.log(error);
      return error.response.data.message;
    }
  };

  const logOut = async () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
    push("/login");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setToken(token);
      setIsLoggedIn(true);
    } else {
      setToken("");
      setIsLoggedIn(false);
      push("/login");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ loginHandler, isLoggedIn, token, userDetail, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser: Function = () => {
  const user = useContext(UserContext);
  return user;
};
