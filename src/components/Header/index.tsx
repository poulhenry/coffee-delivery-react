import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

import { HeaderContainer, ActionButtons, HeaderButton } from './styles'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={Logo} alt="Logo Coffee Delivery" />
        </NavLink>

        <ActionButtons>
          <HeaderButton variant="purple">
            <MapPin color="#8047F8" weight="fill" size={20} /> São Paulo, SP
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart color="#C47F17" weight="fill" size={20} />
            </HeaderButton>
          </NavLink>
        </ActionButtons>
      </div>
    </HeaderContainer>
  )
}
