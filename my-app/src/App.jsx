import React from "react";
import Navbar from "./component/navbar";
import Delivered from "./component/delivered";
import Store from "./component/store";
import Started from "./component/started";
import Sales from "./component/sales";
import Cities from "./component/cities";
import Experience from "./component/Experience";
import Abuja from "./component/abuja";
import Lagos from "./component/lagos";
import Cuisines from "./component/cuisines";
import Info from "./component/info";
import Detail from "./component/detail";
import Footer from "./component/footer";
import Social from "./component/social";

const App = () => {
  return (
    <div className=" pt-18">
      <div className="border-b  border-gray-200">
        <Navbar />
      </div>
      <div className="px-20">
        <Delivered />
        
      </div>
      <div>
        <Started />
      </div>
      <div>
        <Sales />
        <div>
        <Experience />
      </div>
      </div>
      <div>
        <Cities />
      </div>
      <div>
        <Abuja />
      </div>
      <div>
        <Lagos />
      </div>
       <div>
        <Cuisines  />
      </div>
      <div>
        <Info  />
      </div>
      <div>
        <Detail />
    </div>
    <div>
        <Social />
    </div>
    <div>
        <Footer />
    </div>
        </div>
  );
};

export default App;
