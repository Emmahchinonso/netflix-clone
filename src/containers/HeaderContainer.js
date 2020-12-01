import React from "react";
import { Header } from "../components";
import * as Routes from "../constants/routes";
import logo from "../logo.svg";

export const HeaderContainer = ({ children }) => (
	<Header>
		<Header.Frame>
			<Header.Logo to={Routes.HOME} src={logo} alt="Netflix" />
			<Header.ButtonLink to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
		</Header.Frame>
		{children}
	</Header>
);
