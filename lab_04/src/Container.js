import orchids from "./ListOfOrchids";
import Presentation from "./Presentation";
import "./App.css";

function Container() {
  return (
    <div className="form_group">
      <h1 className="title">List Of Orchids</h1>
      <div className="items">
        {orchids.map((orchid, index) => (
          <Presentation key={index} orchid={orchid} />
        ))}
      </div>
    </div>
  );
}

export default Container;
