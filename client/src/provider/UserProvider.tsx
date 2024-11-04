"use client";

import axios from "axios";
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
  userDetail: UserDetail | {};
  logOut: () => Promise<void>;
};

type LoginResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [userDetail, setUserDetail] = useState<UserDetail | {}>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { push } = useRouter();

  const loginHandler = async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    if (typeof window !== "undefined") {
      try {
        if (!email || !password) {
          setError("И-мэйл хаяг эсвэл нууц үгээ хийнэ үү");
          return;
        }
        const result = await axios.post<LoginResponse>(
          `${process.env.BACKEND_URL}/user/login`,
          { email, password }
        );

        window.localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
        setIsLoggedIn(true);
        setUserDetail(result.data.user);
        push("/");
        toast.success("Амжилттай нэвтэрлээ!");
      } catch (error: any) {
        setError(error.response?.data?.message);
        toast.error("Нэвтрэх явцад алдаа гарлаа.");
      }
    }
  };

  const logOut = async () => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem("token");
        setToken("");
        setIsLoggedIn(false);
        setUserDetail({});
        push("/login");
      } catch (error) {
        console.log("Logout failed:", error);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = window.localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
      } else {
        push("/login");
      }
    }
  }, [push]);

  return (
    <UserContext.Provider
      value={{
        loginHandler,
        isLoggedIn,
        token,
        userDetail,
        globalError: error,
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
