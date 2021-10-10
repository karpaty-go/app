import { bindActionCreators } from 'redux';
import * as actions from './action-creators/index';

function mapDispatchToProps(component) {
	switch (component) {
		case "App": return function (dispatch) {
			return {
				setWindowWidth: bindActionCreators(actions.setWindowWidth, dispatch),
			};
		};

		case "Articles": return function (dispatch) {
			return {
				getArticles: bindActionCreators(actions.findArticles,dispatch),
			};
		};

		case "AuthPage": return function (dispatch) {
			return {
				setUserCredentials: bindActionCreators(actions.setAuthenticatedUserData,dispatch),
			};
		};

		default: return undefined;
	}
}

export default mapDispatchToProps;