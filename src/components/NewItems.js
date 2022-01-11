import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function NewItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");
    const items = await data.json();
    setItems(items.data.items);
    console.log(items.data.items);
  };

  return (
    <div className="wrapper items">
      <div className="title">New Items Page!</div>
      <div>
        <Outlet />
      </div>
      <div className="item-wrapper">
        {items.slice(0, 30).map((items) => (
          <div key={items.id} className="item-box">
            <Link to={items.name.replace(/\s/g, "-")} state={items.id}>
              <div className="imgs">
                <img src={items.images.smallIcon} alt="Items" />
              </div>
              <p>{items.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewItems;
