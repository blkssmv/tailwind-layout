import bestsellersarrow from "../images/bestsellersarrow.svg";
import bestseller from "../images/bestseller.jpg"


const BestSellers = () => {
  return (
    <section className="bg-[#F1EBE4] pt-[75px] pb-[82px] text-[#111010] border-b border-[#111010] md:pt-11 md:pb-14">
      <div className="container">
        <div className="flex gap-[33px] mb-8 md:gap-4">
          <div className="flex text-5xl flex-col lg:text-4xl md:text-2xl">
            <div className="uppercase mb-8">our <br />bestsellers</div>
            <div className="pl-[45px] md:pl-6 md:w-24">
              <img src={bestsellersarrow} alt="arrow" />
            </div>
          </div>
          <ul className="flex items-center gap-[34px] md:gap-5">
            <li className="text-center">
                <div className="mb-5 md:mb-3"><img src={bestseller} alt="" /></div>
                <div>
                    <div className="mb-[7px] text-lg md:mb-1 md:text-xs">Fruit Bowl</div>
                    <div className="text-base md:text-xs">$ 47.24 USD </div>
                    
                </div>
            </li>
            <li className="text-center">
                <div className="mb-5 md:mb-3"><img src={bestseller} alt="" /></div>
                <div>
                    <div className="mb-[7px] text-lg md:mb-1 md:text-xs">Fruit Bowl</div>
                    <div className="text-base md:text-xs">$ 47.24 USD</div>
                </div>
            </li>
            <li className="text-center">
                <div className="mb-5 md:mb-3"><img src={bestseller} alt="" /></div>
                <div>
                    <div className="mb-[7px] text-lg md:mb-1 md:text-xs">Fruit Bowl</div>
                    <div className="text-base md:text-xs">$ 47.24 USD</div>
                </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-end uppercase font-normal underline text-xl"><a href="/"> see all products</a></div>
      </div>
    </section>
  );
};
export default BestSellers;
