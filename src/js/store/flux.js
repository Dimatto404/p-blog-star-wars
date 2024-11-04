const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			cardData: []
		},
		actions: {
			fetchPeople: async () => {
				const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=10");
				try {
					const data = await response.json();
					setStore({ people: data.results });
					console.log(data.results)
				} catch (error) {
					console.error(console.log(error));
				}
			},
			fetchVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles?page=2&limit=10");
					const data = await response.json();
					setStore({ vehicles: data.results });
					console.log(data.results)
				} catch (error) {
					console.error(console.log(error));
				}
			},
			fetchPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets?page=3&limit=10");
					const data = await response.json();
					setStore({ planets: data.results });
					console.log(data.results)
				} catch (error) {
					console.error(console.log(error));
				}
			},
			toggleFavorite: (item) => {
				const store = getStore();
				const isFavorite = store.favorites.some((fav) => fav.uid === item.uid);

				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter((fav) => fav.uid !== item.uid)
					});
				} else {
					setStore({
						favorites: [...store.favorites, item]
					});
				}
			},
			fetchCardData: async (title, uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/${title}/${uid}`);
					const data = await response.json();

					if (data.result && data.result.properties) {
						setStore({ cardData: data.result.properties });
					}
				} catch (error) {
					console.error(console.log(error));
				}
			}
		}
	};
};

export default getState;
