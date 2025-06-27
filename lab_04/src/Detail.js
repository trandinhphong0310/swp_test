import orchids from "./ListOfOrchids";
import Presentation from "./Presentation";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const orchid = orchids.find(orchid => orchid.id === id);
    
    return (
        <div className="form_group">
        <h1 className="title">Orchid Detail</h1>
        
        <Presentation orchid={orchid} clip={orchid.clip} detailButton={false} />
        </div>
    );
}

export default Detail;