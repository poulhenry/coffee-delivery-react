import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'
import { RegularText } from '../../../../styles/typography'
import { formatPrice } from '../../../../utils'

import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.price
  const formattedPrice = formatPrice(coffeeTotal)
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleQuantityIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleQuantityDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>

          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleQuantityIncrease}
              onDecrease={handleQuantityDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
