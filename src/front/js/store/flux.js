const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			rockest: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getDataRockets: (quote) => {
				fetch("https://api.spacexdata.com/v4/rockets")
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						setStore({ rockest: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
		}
	};
};

export default getState;
