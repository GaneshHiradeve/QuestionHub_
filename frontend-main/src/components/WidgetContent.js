import React, { useState, useEffect } from 'react';

function Widget({allData}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3af4b8dc0bed448b9adad6a0c1c8e45f')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  

  return (
    <>
    <div>
      {data ? <p style={{color:"rgb(208 208 208)",margin:"7px 5px",fontSize:"13px"}}>{JSON.stringify(data.articles[0].title)}</p> : 'Loading...'}
      <hr/>
      {data ? <p style={{color:"rgb(208 208 208)",margin:"7px 5px",fontSize:"13px"}}>{JSON.stringify(data.articles[1].title)}</p> : 'Loading...'}
      <hr/>
      {data ? <p style={{color:"rgb(208 208 208)",margin:"7px 5px",fontSize:"13px"}}>{JSON.stringify(data.articles[2].title)}</p> : 'Loading...'}
      <hr/>
      {data ? <p style={{color:"rgb(208 208 208)",margin:"7px 5px",fontSize:"13px"}}>{JSON.stringify(data.articles[3].title)}</p> : 'Loading...'}
      <hr/>
    </div>
    </>

  );
}

export default Widget;