
import Image from "next/image";
import React, { useState } from "react";
import AllRoles from "./AllRoles";

const Roles = () => {
  const [data, setData] = useState(AllRoles);
  const filterResult = (catItem) =>{
    const result=AllRoles.filter((curData)=>{
        return curData.category===catItem;
    });
    setData(result)
  }
  return (
    <>
      <h1 className="shop-header">Mischief Town</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="shop-button" onClick={() => filterResult('Chaotic Evil')}>Chaotic Evil</button>
            <button className="shop-button" onClick={() => filterResult('Chaotic Neutral')}>Chaotic Neutral</button>
            <button className="shop-button" onClick={() => filterResult('Chaotic Good')}>Chaotic Good</button>
            <button className="shop-button" onClick={() => setData(Categories)}>All</button>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const { id, title, Theme, image, text, link } = values;
                return (
                  <>
                    <div className="col-md-4 mb-4" key={id}>
                    <div className="card h-100">
                    <div className="card">
                        <Image
                          src={image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p>Theme: {Theme}</p>
                          <p className="card-text">
                            {text}
                          </p>
                          <a href={link}>
                            <button className="shopnow-button">Shop now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;