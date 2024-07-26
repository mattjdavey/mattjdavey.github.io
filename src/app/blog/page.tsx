import { Metadata } from "next";
import BuildSvg from "../components/svgs/build";

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};

export default function Blog() {
  return (
    <>
      <h1 className="text-2xl">Blog</h1>
      <hr className="mb-3" />
      <ul className="py-3 list-disc">
        <li>
          <a href="/blog/add-tailwind-to-blazor-app">How to add Tailwind to a Blazor application</a>
        </li>
      </ul>
    </>
  )

}