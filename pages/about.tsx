import Link from "next/link";
import { MainLayout } from "../components/layourts/MainLayout";
import { DarkLayout } from "../components/layourts/DarkLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.tsx</code>
      </p>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default About;
