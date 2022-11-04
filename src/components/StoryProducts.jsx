import bgimage from "../images/story.jpg";
import bigarrow from "../images/bigarrow.svg";
import MyButton from "./MyButton";
const StoryProducts = () => {
  return (
    <section className="bg-[#FAF6EE] pt-20 pb-40 border-b border-[#111010] md:pb-24 ">
      <div className="container">
        <div className="relative mb-[152px] md:mb-24">
          <img
            className="object-cover rounded-[20px]"
            src={bgimage}
            alt="bgimage"
          />
          <div className="absolute top-0 p-14 text-8xl uppercase text-white lg:text-4xl xl:text-6xl md:p-10 md:text-3xl">
            products <br />
            with a story
          </div>
          <div className="w-32 h-32 rounded-[50%] bg-[#F1EBE4] absolute border-black border py-[30px] px-[53px] right-16 bottom-[-64px] lg:bottom-[-48px] lg:right-10 lg:py-[20px] lg:px-[40px] lg:w-24 lg:h-24 ">
            <img className="w-[100%] h-[100%]" src={bigarrow} alt="bigarrow" />
          </div>
          <MyButton absolute={true}>watch our studio tour</MyButton>
        </div>
        <div className="text-[#111010] text-7xl pr-28 md:text-4xl md:pr-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis
          ante sit amet neque tristique rutrum. Nullam a suscipit ex.
        </div>
      </div>
    </section>
  );
};
export default StoryProducts;
