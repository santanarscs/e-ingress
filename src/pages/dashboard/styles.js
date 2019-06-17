import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	margin: 30px;
	display: flex;
	flex-direction: column;
`;
export const Title = styled.h1`
	font-size: 18px;
	font-weight: normal;
	margin-bottom: 20px;
`;
export const Card = styled.div`
	width: 270px;
	height: 250px;
	background: #fff;
	border: 1px solid #ccc;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	padding: 20px;
	img {
		width: 80px;
		height: 80px;
	}
	strong {
		padding-top: 10px;
		line-height: 25px;
	}
	span {
		color: #a2abb3;
	}
	a {
		color: #fff;
		background: #2c3842;
		display: flex;
		align-items: center;
		font-size: 16px;
		align-self: stretch;
		width: 100%;
		justify-content: center;
		height: 46px;
		border: none;
		text-decoration: none;
		padding: 0 25px;
		border-radius: 4px;
		transition: all 0.2s ease 0s;

		&:hover {
			opacity: 0.8;
		}
	}
`;
