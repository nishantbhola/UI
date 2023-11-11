import Nav from "./Nav";
// import SlidingInterval from "./SlidingInterval";
import Gallery from "./Gallery";
import Heroimg from "./Heroimg";
import Card from "./Card"


function App() {
  return (
   <>
      <div className="bg-[#E9EAEC]">
        <Nav />
        <Heroimg/>
        <div className="middle mx-auto p-5">
          <Card/>
          <Gallery/>
        </div>
      </div>
   </>
  );
}

export default App;