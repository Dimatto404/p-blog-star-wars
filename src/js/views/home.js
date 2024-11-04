import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import List from "../component/list";
import "../../styles/home.css";

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople(), actions.fetchPlanets(), actions.fetchVehicles();
	}, []);

	return (
		<div className="text-center mt-5">
			<List title="people" items={store.people} />
			<List title="planets" items={store.planets} />
			<List title="vehicles" items={store.vehicles} />
		</div >
	);
}

export default Home;