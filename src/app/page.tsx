import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex justify-end">
        <div className="w-full flex justify-end pr-4 pt-4">
          <Image className="lg:xl:w-10 w-8" src="/icon_menu.svg" width={40} height={40} alt="icon menu" />
        </div>
      </div>
      <div className="grid grid-cols-6 h-screen">
        <div className="lg:xl:col-span-3 col-span-6 flex justify-center items-center">
          <div>
            <h1 className="lg:xl:text-left lg:xl:text-[14px] text-center text-[12px]">A B O U T — P E R S O N A L</h1>
            <h2 className="lg:xl:text-left lg:xl:text-5xl text-center text-3xl font-[400] pt-2">¡Hello!<b className="ml-2">I&rsquo;m Angela Smith</b></h2>
            <p className="lg:xl:block hidden text-base font-[300] pt-8 max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="lg:xl:hidden block text-base font-[300] pt-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className="lg:xl:flex hidden justify-center items-center bg-black font-bold text-white text-[14px] p-2 w-40 h-14 rounded-xl mt-10" type="button">
              Get started
              <Image className="ml-2" src="/icon_arrow_right.svg" width={12} height={12} alt="icon arrow btn" />
            </button>
          </div>
        </div>
        <div className="lg:xl:col-span-3 col-span-6 flex justify-center items-center">
          <div className="lg:xl:p-0 p-6">
            <Image src="/img_bg.png" width={500} height={600} alt="img bg" />
          </div>
        </div>
        <div className="col-span-6 pr-2 pl-2">
          <button className="lg:xl:hidden flex justify-center items-center bg-black font-bold text-white text-[14px] p-2 w-full h-14 rounded-xl" type="button">
            Get started
            <Image className="ml-2" src="/icon_arrow_right.svg" width={12} height={12} alt="icon arrow btn" />
          </button>
        </div>
        <div className="col-span-6 flex justify-center items-center mb-2">
          <div>
            <Image className="lg:xl:w-10 w-8" src="/icon_arrow_up.svg" width={40} height={40} alt="icon arrow" />
          </div>
        </div>
      </div>
    </main>
  );
}
