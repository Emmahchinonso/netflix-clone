import React from "react";
import FaqsContainer from "../containers/Faq";
import FooterContainer from "../containers/FooterContainer";
import { Feature, OptForm } from "../components";
import { JumbotronContainer } from "../containers/JumbotronContainer";
import { HeaderContainer } from "../containers/HeaderContainer";

const Home = () => (
	<>
		<HeaderContainer>
			<Feature>
				<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
				<Feature.SubTitle>Watch anywhere, Cancel at any time.</Feature.SubTitle>
				<OptForm>
					<OptForm.Input placeholder="Email Address" />
					<OptForm.Button>Try it now</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>
						Ready to watch?Enter your email to create your email to create or
						restart your membership
					</OptForm.Text>
				</OptForm>
			</Feature>
		</HeaderContainer>
		<JumbotronContainer />
		<FaqsContainer />
		<FooterContainer />
	</>
);

export default Home;
