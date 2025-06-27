import React from 'react';
import { Link } from 'react-router-dom';

function Presentation({ orchid }) {
  return (
    <div className='items_form'>
      <img className="items_img" src={orchid.image} alt={orchid.name} width="250"></img>
      <h2 className="items_name">{orchid.name}</h2>
      <p><strong>Country: </strong>{orchid.origin}</p>
      <p><strong>Rating: </strong>{orchid.rating}</p>
      <p><strong>Color: </strong>{orchid.color}</p>
      <p><strong>Category: </strong>{orchid.category}</p>
      {orchid.isSpecial && <p style={{color: "red"}} className="special">Special</p>}
      <Link style={{ textDecoration: 'none' }} to={`/detail/${orchid.id}`}>
        <button className="detail_btn">Detail</button>
      </Link>
    </div>
  );
}

export default Presentation;
