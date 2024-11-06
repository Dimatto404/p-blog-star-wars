let idCounter = 1;
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
				try {
					const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=10");
					const data = await response.json();
					const peopleWithIds = data.results.map(person => ({
						...person,
						id: idCounter++
					}));

					setStore({ people: peopleWithIds });
				} catch (error) {
					console.error(error);
				}
			},
			fetchVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10");
					const data = await response.json();
					const vehiclesWithIds = data.results.map(vehicle => ({
						...vehicle,
						id: idCounter++
					}));

					setStore({ vehicles: vehiclesWithIds });
				} catch (error) {
					console.error(error);
				}
			},
			fetchPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=10");
					const data = await response.json();
					const planetsWithIds = data.results.map(planet => ({
						...planet,
						id: idCounter++
					}));

					setStore({ planets: planetsWithIds });
				} catch (error) {
					console.error(error);
				}
			},
			toggleFavorite: (item) => {
				const store = getStore();
				const isFavorite = store.favorites.some((fav) => fav.id === item.id);

				if (isFavorite) {
					setStore({
						favorites: store.favorites.filter((fav) => fav.id !== item.id)
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
					console.error(error);
				}
			}
		}
	};
};

export default getState;
