import styled from 'styled-components';

export const Container = styled.aside`
	height: 100%;
	width: 80px;
	background: #fff;
	box-shadow: 0 0 1px 0 rgba(44, 56, 66, 0.08), 0 4px 14px rgba(44, 56, 66, 0.06);
`;
export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 73px;
	border-bottom: 1px solid #f5f7f7;
`;
export const Logo = styled.img`
	width: 36px;
	height: 36px;
`;
// menu

export const Nav = styled.ul`
	list-style: none;
	li {
		a {
			img {
				margin-bottom: 5px;
				width: 24px;
				height: 24px;
			}
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 14px;
			padding: 15px 0;
			color: inherit;
			text-decoration: none;
		}
	}
`;
