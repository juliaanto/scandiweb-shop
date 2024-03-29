import styled, { css } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;

  ${(props) => {
    switch (props.$styleType) {
      case 'currency':
        return css`
          padding-right: 20px;
          font-weight: 500;
          font-size: 18px;
          position: relative;
          height: 100%;

          &:after {
            position: absolute;
            content: "";
            height: 4px;
            width: 4px;
            transform: rotate(${({ $isCurrencyOpen }) => $isCurrencyOpen ? '225deg' : '45deg'}) ;
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            bottom: ${({ $isCurrencyOpen }) => $isCurrencyOpen ? '5px' : '8px'};
            right: 3px;
          }
        `;
      case 'cart':
        return css`
          padding-top: 2px;
          height: 100%;
          position: relative;

          & svg {
            fill: ${({ theme }) => theme.color.specialDark};
          }

          ${({$quantity}) =>
            $quantity > 0 &&
            css`
              &:after {
                content: "${({ $quantity }) => $quantity}";
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                width: 20px;
                background-color: ${({ theme }) => theme.color.basicDark};
                color: ${({ theme }) => theme.color.basicWhite};
                border-radius: 50%;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: 700;
                top: -7px;
                right: -12px;
              }
            `}
        `;
      case 'add-to-cart':
        return css`
          position: absolute;
          width: 52px;
          height: 52px;
          background-color: ${({ theme }) => theme.color.basicGreen};
          border-radius: 50%;
          top: 320px;
          right: 30px;
          
          & svg {
            fill: ${({ theme }) => theme.color.basicWhite};
            width: 24px;
            height: 24px;
          }
        `;
      case 'arrow':
        return css`
          position: absolute;
          background-color: ${({ theme }) => theme.color.basicBlack};
          width: 24px;
          height: 24px;
          right: ${({ $isPrev }) => $isPrev ? '48px' : '16px'};
          bottom: 16px;
          opacity: 0.73;

          &:after {
            position: absolute;
            content: "";
            height: 8px;
            width: 8px;
            transform: translate(${({ $isPrev }) => $isPrev ? '-30%' : '-75%'}, -50%) rotate(${({ $isPrev }) => $isPrev ? '135deg' : '315deg'});
            border-bottom: 1.5px solid ${({ theme }) => theme.color.basicWhite};
            border-right: 1.5px solid ${({ theme }) => theme.color.basicWhite};
          }
        `;
      case 'quantity':
        return css`
          width: ${({ $isCartOverlay }) => $isCartOverlay ? '24px' : '45px'};
          height: ${({ $isCartOverlay }) => $isCartOverlay ? '24px' : '45px'};
          border: 1px solid ${({ theme }) => theme.color.basicDark};
          font-size: 50px;
          position: relative;

          ${({$isPlus}) =>
            $isPlus ?
            css`
              &::before,
              &::after {
                position: absolute;
                content: "";
                width: ${({ $isCartOverlay }) => $isCartOverlay ? '8px' : '15px'};
                border-bottom: 1px solid ${({ theme }) => theme.color.basicDark};
              }

              &::before {
                transform: translateX(-50%);
              }
              
              &::after {
                transform: translateX(-50%) rotate(90deg);
              }
            `
            :
            css`
              &::before {
                position: absolute;
                content: "";
                width: ${({ $isCartOverlay }) => $isCartOverlay ? '8px' : '15px'};
                border-bottom: 1px solid ${({ theme }) => theme.color.basicDark};
              }

              &::before {
                transform: translateX(-50%);
              }
            `
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color.basicGreen};
          color: ${({ theme }) => theme.color.basicWhite};
          text-transform: uppercase;
          font-weight: 600;
          font-size: ${({$isCartOverlay, $isCartPage}) => $isCartOverlay | $isCartPage ? '14px' : '16px'};
          padding-top: ${({$isCartOverlay, $isCartPage}) => $isCartOverlay | $isCartPage ? '14px' : '16px'};
          padding-bottom: ${({$isCartOverlay, $isCartPage}) => $isCartOverlay | $isCartPage ? '14px' : '16px'};
          flex-grow: 1;

          ${({$isCartOverlay}) =>
          !$isCartOverlay &&
            css`
              width: 100%;
            `
          }
        `;
    }
  }}

  &:hover {
    ${(props) => {
    switch (props.$styleType) {
      case 'currency':
        return css`
          color: ${({ theme }) => theme.color.basicGrey};

          &:after {
            border-color: ${({ theme }) => theme.color.basicGrey};
          }
        `;
      case 'cart':
        return css`
          & svg {
            fill: ${({ theme }) => theme.color.basicGrey};
          }

          &:after {
            background-color: ${({ theme }) => theme.color.basicGrey};
          }
        `;
      case 'add-to-cart':
        return css`
          background-color: ${({ theme }) => theme.color.specialGreen};
        `;
      case 'arrow':
        return css`
          opacity: 0.85;
        `;
      case 'quantity':
        return css`
          background-color: ${({ theme }) => theme.color.basicNeutral};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color.specialGreen};
        `;
      }
    }}
  }

  &:active {
    ${(props) => {
    switch (props.$styleType) {
      case 'currency':
        return css`
        `;
      case 'cart':
        return css`
        `;
      case 'add-to-cart':
        return css`
        `;
      case 'arrow':
        return css`
          opacity: 0.73;
        `;
      case 'quantity':
        return css`
          background-color: ${({ theme }) => theme.color.basicWhite};;
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.color.basicGreen};
        `;
      }
    }}
  }

  &:disabled {
    ${(props) => {
    switch (props.$styleType) {
      default:
        return css`
          cursor: auto;
          background-color: ${({ theme }) => theme.color.basicGrey};
        `;
      }
    }}
  }
`;

export default Button;