import homeclay from "../images/homeclay.jpg";
import MyButton from "./MyButton";
const HomeClayKits = () => {
  return (
    <section className="bg-[#F1EBE4] border-b border-[#111010]">
      <div className="container py-[75px] px-[88px] lg:px-14 lg:py-12">
        <div className="flex gap-24 justify-between lg:gap-4 md:gap-3">
          <div className="w-[50%]">
            <div className="uppercase text-5xl mb-[26px] lg:text-3xl lg:mb-4 md:text-xl md:mb-3">home clay kits</div>
            <div className="text-xl mb-[38px] lg:text-sm lg:mb-5 md:text-xs md:mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              lobortis ante sit amet neque tristique rutrum. Nullam a suscipit
              ex. Donec ac efficitur mauris.
            </div>
            <ul className="text-base uppercase max-w-[332px] md:max-w-[280px] md:text-xs mb-7 lg:mb-6 md:mb-4">
              <li className="border-b border-t py-4 px-4 border-[#111010] md:py-2 md:px-2">
                free shipping
              </li>
              <li className="border-b  py-4 px-4 border-[#111010] md:py-2 md:px-2">no need to fire</li>
              <li className="border-b py-4 px-4 border-[#111010] md:py-2 md:px-2">
                tools and clay included
              </li>
            </ul>
            <MyButton>order your kit now</MyButton>
          </div>
          <div className="h-[470px] w-[550px] lg:h-96 lg:w-96 md:h-72 md:w-80">
            <img className="w-[100%] h-[100%] object-cover" src={homeclay} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeClayKits;
