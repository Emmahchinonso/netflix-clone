import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/headerStyles";

const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);

Header.Logo = ({ to, ...restProps }) => (
	<ReactRouterLink to={to}>
		<Logo {...restProps} />
	</ReactRouterLink>
);

Header.ButtonLink = ({ to, children, ...restProps }) => (
	<ButtonLink to={to}>{children}</ButtonLink>
);

export default Header;
