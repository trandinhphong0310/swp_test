import orchids from "./ListOfOrchids";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const orchid = orchids.find(orchid => orchid.id === id);

    return (
        <div className="form_group">
            <h1 className="title">Orchid Detail</h1>
            <div className='items_form' style={{ margin: "auto" }}>
                <img className="items_img" src={orchid.image} alt={orchid.name} width="250"></img>
                <h2 className="items_name">{orchid.name}</h2>
                <p><strong>Country: </strong>{orchid.origin}</p>
                <p><strong>Rating: </strong>{orchid.rating}</p>
                <p><strong>Color: </strong>{orchid.color}</p>
                <p><strong>Category: </strong>{orchid.category}</p>
            </div>
        </div>
    );
}

export default Detail;