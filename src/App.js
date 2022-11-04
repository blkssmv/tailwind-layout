import "./App.css";
import Animation from "./components/Animation";
import BestSellers from "./components/BestSellers";
import HomeClayKits from "./components/HomeClayKits";
import Navbar from "./components/Navbar";
import ShopCategory from "./components/ShopCategory";
import StoryProducts from "./components/StoryProducts";

function App() {
  return (
    <>
      <Navbar />
      <StoryProducts/>
      <BestSellers/>
      <Animation/>
      <ShopCategory/>
      <HomeClayKits/>
    </>
  );
}

export default App;
