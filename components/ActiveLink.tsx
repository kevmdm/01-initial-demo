import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, ReactElement } from "react";

interface ActiveLink {
    text: string;
    href: string;
}

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink:FunctionComponent <ActiveLink> = ({ text, href }) => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Link style={asPath === href ? style :{}} href={href}>
      {text}
    </Link>
  );
};
