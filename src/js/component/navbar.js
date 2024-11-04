import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showFavorites, setShowFavorites] = useState(false);

	const handleShowFavorites = () => setShowFavorites(!showFavorites);

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mx-5 h1">
					<img
						src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png"
						alt="Star Wars Logo"
						height="80"
					/>
				</span>
			</Link>

			<div className="dropdown">
				<button
					onClick={handleShowFavorites}
					className="btn btn-primary dropdown-toggle mx-5"
					type="button"
					id="favoritesDropdown"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites {store.favorites.length > 0 && <span>({store.favorites.length})</span>}
				</button>
				<div className={`dropdown-menu ${showFavorites ? "show" : ""}`} aria-labelledby="favoritesDropdown">
					{store.favorites.length > 0 ? (
						store.favorites.map((fav) => (
							<div className="dropdown-item d-flex justify-content-between align-items-center" key={fav.uid}>
								{fav.name}
								<span
									className="btn btn-outline-danger btn-sm  mx-3"
									onClick={() => actions.toggleFavorite(fav)}
								>
									<i className="fas fa-trash"></i>
								</span>
							</div>
						))
					) : (
						<span className="dropdown-item">No favorites yet</span>
					)}
				</div>
			</div>
		</nav>
	);
};
