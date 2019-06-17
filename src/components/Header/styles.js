import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 72px;
	padding: 30px;
	background: #fff;
	box-shadow: 0 0 1px 0 rgba(44, 56, 66, 0.08), 0 4px 14px rgba(44, 56, 66, 0.06);
	h1 {
		font-size: 24px;
		font-weight: bold;
	}
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	img {
		width: 27px;
		height: 27px;
		border-radius: 50%;
		margin-right: 5px;
	}
`;
