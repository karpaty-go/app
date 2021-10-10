function mapStateToProps(component) {
	switch (component) {
		case "LogIn": 
			return function (state) {
				return {
					// token: d`${state}.login.jwt_token`,
					// logInErr: d`${state}.promiseReducer.login.payload.errors`,
					// user: d`${state}.login.userData`,
					// animation: `${state}.login.pending`,
					// previousURL: d`${state}.redirectedFromLink.redirectedFrom`,
			}
		}

		default: return undefined;
	}
}

export default mapStateToProps;