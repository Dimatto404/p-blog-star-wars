import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const List = ({ title, items }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2 className="text-danger text-start mt-5 m-3">{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
      <div className="scroll-container">
        <div className="row flex-nowrap">
          {items.map((item, index) => (
            <div className="col-md-4 mb-4" key={item.uid || index}>
              <div className="card">
                <img
                  src={`https://starwars-visualguide.com/assets/img/${title === "people" ? "characters" : title}/${item.uid}.jpg`}
                  className="card-img-top"
                  style={{ width: "100%", height: "200px" }}
                  onError={(e) => {
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <br />
                  <div className="d-flex justify-content-between">
                    <Link to={`/single/${title}/${item.uid}`} className="btn btn-primary">
                      Learn more!
                    </Link>
                    <button
                      className={`btn ${store.favorites.some((fav) => fav.uid === item.uid)
                        ? "btn-warning"
                        : "btn-outline-warning"
                        }`}
                      onClick={() => actions.toggleFavorite(item)}
                    >
                      <i className="fa fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;