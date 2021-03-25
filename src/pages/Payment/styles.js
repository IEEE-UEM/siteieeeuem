import styled, { keyframes } from 'styled-components';
import colors from './colors';

const backgroundButton = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: auto;
	width: 100vw;
	align-items: center;
	justify-content: space-evenly;
	background-color: ${colors.background};
`;

export const HeaderTitle = styled.div`
	font-size: 48px;
	font-family: Poppins-regular;
	color: ${colors.white};
`;
export const InfoText = styled.text`
	font-size: 20px;
	font-family: Poppins-regular;
	color: ${colors.white};
`;

export const ColoredText = styled.text`
	color: ${colors.yellow};
`;

export const BackButton = styled.button`
	height: 70px;
	width: 400px;
	display: block;
	outline: none;
	border: none;
	border-radius: 30px;
	font-size: 24px;
	font-weight: 600;
	font-family: Poppins;
	color: ${colors.white};
	margin-bottom: 40px;
	background-size: 100% 100%;
	-moz-box-shadow: 0 0 0 7px ${colors.tomato} inset,
		8px 14px 24px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 0 0 0 7px ${colors.tomato} inset,
		8px 14px 24px rgba(0, 0, 0, 0.25);
	box-shadow: 0 0 0 7px ${colors.tomato} inset,
		8px 14px 24px rgba(0, 0, 0, 0.25);
	background-color: ${colors.tomato};

	&:hover:enabled {
		background-image: linear-gradient(
			145deg,
			transparent 10%,
			#d25a46 10% 20%,
			transparent 20% 30%,
			#d25a46 30% 40%,
			transparent 40% 50%,
			#d25a46 50% 60%,
			transparent 60% 70%,
			#d25a46 70% 80%,
			transparent 80% 90%,
			#d25a46 90% 100%
		);
		animation: ${backgroundButton} 3s linear infinite;
		cursor: pointer;
	}

	&:disabled {
		opacity: 0.5;
	}
`;

export const PaymentInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: auto;
	width: 80vw;
	justify-content: space-evenly;
`;
