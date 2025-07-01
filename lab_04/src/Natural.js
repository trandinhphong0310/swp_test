import { useState } from "react";
import orchids from "./ListOfOrchids";

function Natural() {
    const [natural, setNatural] = useState(orchids.filter((orchid) => orchid.isNatural));

    return (
        <div>
            <h2 className="title">Natural Orchids</h2>

            <div className="items">
                {natural.map((orchid) => (
                    <div key={orchid.id} className="items_form">
                        <img className="items_img" src={orchid.image} alt={orchid.name} width="250"></img>
                        <h2 className="items_name">{orchid.name}</h2>
                        <p><strong>Country: </strong>{orchid.origin}</p>
                        <p><strong>Rating: </strong>{orchid.rating}</p>
                        <p><strong>Color: </strong>{orchid.color}</p>
                        <p><strong>Category: </strong>{orchid.category}</p>
                        {orchid.isSpecial && <p style={{ color: "red" }} className="special">Special</p>}
                        {orchid.isNatural && <p style={{ color: "green" }} className="natural">Natural</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Natural;
