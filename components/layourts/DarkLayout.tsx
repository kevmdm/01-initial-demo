import Head from "next/head";
import { ReactElement, FunctionComponent, FC } from "react";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

interface DarkLayout {
  children?: ReactElement | ReactElement[];
}

export const DarkLayout: FC <DarkLayout> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <div>{children}</div>
    </div>
  );
};


