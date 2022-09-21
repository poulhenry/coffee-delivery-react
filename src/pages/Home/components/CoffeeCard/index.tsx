import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { RegularText, TitleText } from '../../../../styles/typography'
import { formatPrice } from '../../../../utils'
import {
  CoffeeCardContainer,
  ButtonCounter,
  ButtonAddCart,
  ContainerTags,
} from './styles'

export interface Coffee {
  id: number
  photo: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatPrice(coffee.price)
  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => {
      if (state <= 1) {
        return 0
      }

      return state - 1
    })
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity: 1,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="Coffee" />

      <ContainerTags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}-${tag}`}>{tag}</span>
        ))}
      </ContainerTags>

      <TitleText size="small" color="subtitle">
        {coffee.name}
      </TitleText>
      <RegularText size="small" color="label">
        {coffee.description}
      </RegularText>

      <div>
        <TitleText size="medium" color="text" as="p">
          <RegularText size="small" as="span">
            R${' '}
          </RegularText>
          {formattedPrice}
        </TitleText>

        <ButtonCounter>
          <span onClick={handleDecrease}>-</span>
          <span>{quantity}</span>
          <span onClick={handleIncrease}>+</span>
        </ButtonCounter>

        <ButtonAddCart onClick={handleAddToCart}>
          <ShoppingCart weight="fill" size={20} />
        </ButtonAddCart>
      </div>
    </CoffeeCardContainer>
  )
}
