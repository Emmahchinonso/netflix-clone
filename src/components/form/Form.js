import React from "react";
import {
	Container,
	Base,
	Error,
	Title,
	Text,
	TextSmall,
	Link,
	Input,
	Submit,
} from "./styles/formStyles";

const Form = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);

Form.Base = ({ children, ...restProps }) => (
	<Base {...restProps}>{children}</Base>
);

Form.Error = ({ children, ...restProps }) => (
	<Error {...restProps}>{children}</Error>
);

Form.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

Form.Text = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

Form.TextSmall = ({ children, ...restProps }) => (
	<TextSmall {...restProps}>{children}</TextSmall>
);

Form.Link = ({ children, ...restProps }) => (
	<Link {...restProps}>{children}</Link>
);

Form.Input = ({ ...restProps }) => <Input {...restProps} />;

Form.Submit = ({ children, ...restProps }) => (
	<Submit {...restProps}>{children}</Submit>
);

export default Form;
