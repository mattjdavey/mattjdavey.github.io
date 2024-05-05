import { Metadata } from "next";
import BuildSvg from "../components/svgs/build";

export const metadata: Metadata = {
    title: "About",
    description: "",
  };

export default function About() {
    
    return (
      <>
      <h1>About</h1>
      <p className="text-center">Work in progress...</p>
      <BuildSvg />
    </>
    )
}