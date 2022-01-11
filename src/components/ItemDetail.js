import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function ItemDetail() {
  const [item, setItem] = useState({
    images: {},
    introduction: {},
    rarity: {},
    set: {},
  });
  const { detailid } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchItem();
  }, [location.state]);

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${location.state}`
    );
    const item = await data.json();
    setItem(item.data);
  };

  return (
    <div className="item-detail">
      <div className="detail-title">{item.description}</div>
      <img src={item.images.smallIcon} alt="item img" />
      <div>This is the {item.name}</div>
      <div>{item.introduction.text}</div>
      {item.set ? <div>{item.set.text}</div> : <div></div>}
      <div>Rarity: {item.rarity.value}</div>
    </div>
  );
}

export default ItemDetail;
