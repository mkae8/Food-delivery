"use client";

import axios from "axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import { toast } from "react-toastify";

interface UserDetail {
  name: string;
  email: string;
}

type UserContextType = {
  loginHandler: (
    email: string,
    password: string
  ) => Promise<string | undefined>;
  isLoggedIn: boolean;
  token: string;
  globalError: string;
  userDetail: { name: string; email: string } | {};
  logOut: () => Promise<void>;
};

type LoginResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

type ErrorResponse = {
  message: string;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
  ({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { push } = useRouter();

  const loginHandler = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        setGlobalError("И-мэйл хаяг эсвэл нууц үгээ хийнэ үү");
        return;
      }

      const result = await axios.post<LoginResponse>(
        "https://food-delivery-lrqy.onrender.com/user/login",
        {
          email,
          password,
        }
      );

      window.localStorage.setItem("token", result.data.token);

      setToken(result.data.token);
      setIsLoggedIn(true);
      setUserDetail(result.data.user);
      push("/");
      toast.success("Амжилттай нэвтэрлээ!");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.isAxiosError && axiosError.response) {
        setToken("");
        setIsLoggedIn(false);
        setGlobalError(axiosError.response.data.message);
        toast.error("Амжилгүй боллоо. Дахин оролдоно уу!");
        return axiosError.response.data.message;
      } else {
        console.log("An unexpected error occurred:", error);
        return "An unexpected error occurred.";
      }
    }
  };

  const logOut = async () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
    setGlobalError("");
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
      value={{
        loginHandler,
        isLoggedIn,
        globalError,
        token,
        userDetail: userDetail ? userDetail : {},
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
};
