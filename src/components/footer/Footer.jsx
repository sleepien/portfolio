import { AiOutlineHeart } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="bg-sw w-full dark:bg-sb flex h-8 mt-6">
      <div className="flex w-[85%] h-full m-auto justify-center items-center text-base">
        <h1 className="mr-1">made with</h1>
        <AiOutlineHeart size={20} className="dark:text-purple text-blue" />
        <h1 className="ml-1">by me</h1>
      </div>
    </div>
  );
};
