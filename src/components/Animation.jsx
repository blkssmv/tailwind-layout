import leaf from "../images/leaf.svg";

const Animation = () => {
  return (
    <section className="w-[100%] py-32 bg-[#FAF6EE] text-[127px] font-normal  lg:py-16 md:py-10 lg:text-8xl md:text-7xl">
      <div id="rssBlock" className="w-[100%] uppercase ">
        <div className="flex">
          <span className="marqueeStyle flex  items-center">
            <div>
              <img src={leaf} alt="" />
            </div>
            <div>mugs</div>
          </span>
          <span className="marqueeStyle flex items-center">
            <div>
              <img src={leaf} alt="" />
            </div>
            <div>vases</div>
          </span>
          <span className="marqueeStyle flex items-center">
            <div>
              <img src={leaf} alt="" />
            </div>
            <div>plates</div>
          </span>
        </div>
        <div className="flex">
          <span className="marqueeStyle2 flex items-center">
            <div>
              <img src={leaf} alt="" />
            </div>
            <div>vases</div>
          </span>
          <span className="marqueeStyle2 flex items-center">
            <div>
              <img src={leaf} alt="" />
            </div>
            <div>plates</div>
          </span>
          <span className="marqueeStyle2 flex items-center">
            <div>
              <img src={leaf} alt="" />
            </div>
            <div>mugs</div>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Animation;
