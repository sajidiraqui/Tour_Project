import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(true);
  const description = readmore ? `${info.substring(0, 100)}....` : info;

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="Card">
      <img src={image} className="image"></img>
    <div className="tour-info">
    <div className="tour-details">
        <h4 className="tour-price"> ₹ {price} </h4>
        <h4 className="tour-name"> {name} </h4>
      </div>
      <div>
        <div className="description">{description}</div>
        <span className="readmore" onClick={readmoreHandler}>
          {readmore ? "readmore" : "show less"}
        </span>
      </div>
    </div>

      <div className="interest">
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}
export default Card;
