// import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css'

function Presentation({ orchid, detailButton = true, clip }) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${orchid.id}`);
  };

  return (
    <div className='items_form'>
      <img className="items_img" src={orchid.image} alt={orchid.name} width="250"></img>
      <h2 className="items_name">{orchid.name}</h2>
      <p><strong>Country: </strong>{orchid.origin}</p>
      <p><strong>Rating: </strong>{orchid.rating}</p>
      <p><strong>Color: </strong>{orchid.color}</p>
      <p><strong>Category: </strong>{orchid.category}</p>
      {orchid.isSpecial && <p style={{ color: "red" }} className="special">Special</p>}
      {orchid.isNatural && <p style={{ color: "green" }} className="natural">Natural</p>}
      {clip && (
        <iframe
          width="100%"
          height="315"
          src={clip}
          title="Orchid Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {detailButton && (
        <button className="detail_btn" onClick={handleDetail}>Detail</button>
      )}
    </div>
  );
}

export default Presentation;
