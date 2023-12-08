import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-[495px] w-full flex flex-col gap-[25px] items-center justify-center bg-[#F6F6F7] mt-[50px]">
      <div className="w-[1200px] ">
        <div className="w-[100%] flex">
          <div className="flex flex-col grow basis-0 gap-[20px]">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className="flex flex-col grow basis-0 items-center gap-[10px]">
            <Link href="/">
              <p className="text-base text-[#3B3C4A]">Home</p>
            </Link>
            <Link href="/blog">
              <p className="text-base text-[#3B3C4A]">Blog</p>
            </Link>
            <p className="text-base text-[#3B3C4A]">Contact</p>
          </div>
          <div className="flex grow basis-0 gap-[10px] justify-center">
            <img className="h-[16px] w-[16px]" src="./fb.svg" />
            <img className="h-[16px] w-[16px]" src="./ig.svg" />
            <img className="h-[16px] w-[16px]" src="./twi.svg" />
            <img className="h-[16px] w-[16px]" src="./li.svg" />
          </div>
        </div>
        <hr />
        <div className="w-[100%] flex justify-between mt-[32px] mb-[32px]">
          <img src="./Copyright Info.svg" />
          <div className="flex gap-[16px]">
            <p>Terms of Use</p>
            <hr />
            <p>Privacy Policy</p>
            <hr />
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
