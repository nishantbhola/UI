import Nav from "./Nav";
// import SlidingInterval from "./SlidingInterval";
import Gallery from "./Gallery";
import Heroimg from "./Heroimg";
import Card from "./Card"
import "./App.css"
import logo from "./logo.png"


function App() {
  return (
   <>
      <div className="bg-[#E9EAEC]">
        {/* <Nav />
        <Heroimg/>
        <div className="middle mx-auto p-5">
          <Card/>
          <Gallery/>
        </div> */}
        <div className=" h-[200vh] bg-[#EAEBED] p-5">
            <div className="h-[95vh] hero w-[100%] bg-white rounded-xl mx-auto">
                <div className="w-[80%] text-md relative h-[60px] cus bg-[#E9EAEC] mx-auto rounded-b-3xl">
                  <div className="w-[80%] mx-auto  flex justify-evenly items-center ">
                    <p>EVENT</p>
                    <p>RANKINGS</p>
                    <p>NEWS</p>
                    <p><img src={logo} className="object-cover yourImage h-[60px]"  alt="logo"/></p>
                    <p>CONNECT</p>
                    <p>ABOUT</p>
                    <p>CONTACT</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
   </>
  );
}

export default App;