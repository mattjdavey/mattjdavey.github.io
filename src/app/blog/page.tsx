import { Metadata } from "next";
import BuildSvg from "../components/svgs/build";

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <p className="text-center">Work in progress...</p>
      <BuildSvg />
    </>
  )

}