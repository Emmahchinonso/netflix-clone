import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as Routes from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
	const user = {};

	return (
		<Router>
			<Switch>
				<IsUserRedirect
					exact
					user={user}
					loggedInPath={Routes.BROWSE}
					path={Routes.SIGN_IN}
				>
					<Signin />
				</IsUserRedirect>

				<IsUserRedirect
					exact
					user={user}
					loggedInPath={Routes.BROWSE}
					path={Routes.SIGN_UP}
				>
					<Signup />
				</IsUserRedirect>

				<ProtectedRoute exact path={Routes.BROWSE} user={user}>
					<Browse />
				</ProtectedRoute>

				<IsUserRedirect
					exact
					loggedInPath={Routes.BROWSE}
					user={user}
					path={Routes.HOME}
				>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}

export default App;
