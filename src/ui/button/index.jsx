import { ReactComponent as IconCart } from '../../assets/cart.svg';
import React from 'react';
import StyledButton from './button.styled';

class Button extends React.Component {
  render() {
    return (
      <StyledButton 
        $styleType={this.props.$styleType} 
        $isCurrencyOpen={this.props.$isCurrencyOpen} 
        onClick={this.props.onClick}
        id={this.props.$styleType}
        type='button'
      >
        {this.props.$styleType === 'currency' && this.props.$currentCurrency}
        {this.props.$styleType === 'cart' && <IconCart />}
        {this.props.$styleType === 'add-to-cart' && <IconCart />}
        {this.props.children}
      </StyledButton>
    )
  }
}

export default Button;