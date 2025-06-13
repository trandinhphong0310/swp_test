import orchids from "./ListOfOrchids";
import Presentation from "./Presentation";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const orchid = orchids.find(o => o.id === id);
    
    return (
        <div className="form_group">
        <h1 className="title">Orchid Detail</h1>
        <Presentation orchid={orchid}/>
        </div>
    );
}

export default Detail;