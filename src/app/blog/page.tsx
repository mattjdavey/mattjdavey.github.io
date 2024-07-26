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
      <ul className="py-3 list-disc">
            <li>
                <a href="/blog/add-tailwind-to-blazor-app">How to add Tailwind to a Blazor application</a>
            </li>
        </ul>
      <BuildSvg />
    </>
  )

}