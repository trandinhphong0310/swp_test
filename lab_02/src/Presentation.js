// import logo from './logo.svg';

function Presentation({ orchid, onDetail, onClose }) {
  const handleDetail = () => {(onDetail(orchid))}
  const handleClose = () => {onClose()}
  return (
    <div className='items_form'>
      <img className="items_img" src={orchid.image} alt={orchid.name} width="250"></img>
      <h2 className="items_name">{orchid.name}</h2>
      <p><strong>Country: </strong>{orchid.origin}</p>
      <p><strong>Rating: </strong>{orchid.rating}</p>
      <p><strong>Color: </strong>{orchid.color}</p>
      <p><strong>Category: </strong>{orchid.category}</p>
      {orchid.isSpecial && <p style={{color: "red"}} className="special">Special</p>}
      {onDetail && <button className="detail_btn" onClick={handleDetail}>Detail</button>}
      {onClose && <button className="close_btn" onClick={handleClose}>Close</button>}
    </div>
  );
}

export default Presentation;
