import categoryshopimg from "../images/category.jpg";
const ShopCategory = () => {
  return (
    <section className="text-[#111010] uppercase bg-[#FAF6EE] border-b border-[#111010] pb-[26px]">
      <div className="container">
        <div className="text-5xl mb-[62px] md:text-3xl md:mb-10">shop by category</div>
        <ul className="flex gap-[34px]">
          <li>
            <div className="border-b border-[#111010]">
              <img src={categoryshopimg} alt="category" />
            </div>
            <div className="flex items-center text-[32px] py-12 justify-center bg-[#CAB5EB] lg:py-7 lg:text-xl md:py-4 md:text-base">
              vases
            </div>
          </li>
          <li>
            <div className="border-b border-[#111010]">
              <img src={categoryshopimg} alt="category" />
            </div>
            <div className="flex items-center text-[32px] py-12 justify-center bg-[#CAB5EB] lg:py-7 lg:text-xl md:py-4 md:text-base">
              Cups
            </div>
          </li>
          <li>
            <div className="border-b border-[#111010]">
              <img src={categoryshopimg} alt="category" />
            </div>
            <div className="flex items-center text-[32px] py-12 justify-center bg-[#CAB5EB] lg:py-7 lg:text-xl md:py-4 md:text-base">
              Plates
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default ShopCategory;
