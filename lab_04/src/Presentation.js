// import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';

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
      {clip && (
        <>
          <a href={clip} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
            <strong>Clip Of Orchids </strong>
          </a>
        </>
      )}
      {detailButton && (
        <button className="detail_btn" onClick={handleDetail}>Detail</button>
      )}
    </div>
  );
}

export default Presentation;
