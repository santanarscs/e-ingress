import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	margin: 30px;
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 18px;
		font-weight: normal;
		margin-bottom: 20px;
	}
`;
export const Card = styled.div`
	padding: 20px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 0 1px 0 rgba(44, 56, 66, 0.08), 0 4px 14px rgba(44, 56, 66, 0.06);
`;

export const EventsList = styled.table`
	width: 100%;
	text-align: left;
	thead th {
		font-size: 11px;
		letter-spacing: 1.11px;
		font-weight: normal;
		text-transform: uppercase;
		padding: 5px 10px;
		&:last-child {
			text-align: right;
		}
	}
`;

export const EventsItem = styled.tr`
	td {
		border-top: 1px solid #f5f7f7;
		font-size: 13px;
		padding: 0 10px;
		line-height: 40px;
		background: ${props => (props.selected ? '#282828' : 'transparent')};
		&:last-child {
			width: 180px;
			text-align: right;
		}
	}
`;
