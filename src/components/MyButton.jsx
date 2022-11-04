const MyButton = ({ absolute, children }) => {
  return (
    <button
      className={
        absolute
          ? "uppercase absolute bottom-16 left-16 bg-[#FFDB5B] rounded-[1600px] px-8 py-4 text-black border-black border lg:px-6 lg:py-3 md:px-4 md:py-2 md:left-10"
          : "uppercase bg-[#FFDB5B] rounded-[1600px] px-8 py-4 text-black border-black border lg:px-6 lg:py-3 md:px-5 md:py-2"
      }
    >
      {children}
    </button>
  );
};
export default MyButton;
