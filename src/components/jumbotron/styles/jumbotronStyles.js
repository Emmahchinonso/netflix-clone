import styled from "styled-components/macro";

export const Item = styled.div`
	padding: 5rem 5%;
	border-bottom: 8px solid #222;
	color: #fff;
  overflow: hidden;
`;

export const Inner = styled.section`
	display: flex;
	align-items: center;
	flex-direction: ${({ direction }) => direction};
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Pane = styled.div`
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Container = styled.div`
  @media (max-width: 1000px){
    ${Item}:last-of-type p{
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.h2`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.p`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;

	@media (ma-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	display: block;
	max-width: 100%;
`;
