import styled from 'styled-components';

export const Container = styled.div``;

export const EventList = styled.ul`
	list-style: none;
	display: flex;
`;

export const EventItem = styled.li`
	display: inline-block;
	width: 250px;
	height: 270px;
	padding: 20px;
	background: #fff;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0 0 1px 0 rgba(44, 56, 66, 0.08), 0 4px 14px rgba(44, 56, 66, 0.06);
	> div {
		width: 86px;
		height: 86px;
		border-radius: 50%;
		background: #ccc;
	}
	strong {
		font-size: 24px;
	}
	span {
		font-size: 16px;
		color: #a2abb3;
	}
	a {
		color: #fff;
		background: #5a7a94;
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
		transition: background-color 0.15s ease;
		text-transform: uppercase;

		&:hover {
			background: #405668;
		}
	}
`;
