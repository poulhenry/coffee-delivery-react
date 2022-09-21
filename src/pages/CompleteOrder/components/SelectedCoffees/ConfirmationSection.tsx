import { Button } from '../../../../components/Button'
import { useCart } from '../../../../hooks/useCart'
import { RegularText } from '../../../../styles/typography'
import { formatPrice } from '../../../../utils'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatPrice(cartItemsTotal)
  const formattedCartTotal = formatPrice(cartTotal)
  const formattedDeliveryPrice = formatPrice(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="small">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="small">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="large">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="large">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confimar Pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}
