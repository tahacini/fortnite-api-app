import React, { useState, useEffect } from "react";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fortnite-api.com/v2/news/stw");
    const items = await data.json();
    setNews(items.data.messages);
  };
  return (
    <div className="wrapper-home">
      <h1 className="front-title">Fornite News</h1>
      <div>
        {news.map((item, index) => (
          <article key={index}>
            <div>
              <img src={item.image} alt="News" />
            </div>
            <div className="text">
              <div>{item.title}</div>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
