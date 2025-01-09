"use client";
import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";

const ScrollIntoViewButton = () => {
  const scrollIntoView = () => {
    const mainElement = document.getElementById("job-dashboard");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollIntoView}
      className="mb-24 flex gap-3 bg-white text-orangish w-40 hover:bg-orangish hover:text-[#eaf2ff] drop-shadow-sm">
      Go to Jobs
      <ArrowDownIcon />
    </Button>
  );
};
export default ScrollIntoViewButton;
