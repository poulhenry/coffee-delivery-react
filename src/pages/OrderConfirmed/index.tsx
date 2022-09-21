import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { RegularText, TitleText } from '../../styles/typography'
import { InfoIcon } from '../../components/InfoIcon'
import ConfirmedImg from '../../assets/confirmed-order.svg'

import { OrderConfirmedContainer, OrderDetailsContainer } from './style'

export function OrderConfirmed() {
  const { purple, yellow } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="large">Uhu! Pedido confirmado.</TitleText>
        <RegularText size="large" color="subtitle">
          Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoIcon
            icon={<MapPin weight="fill" />}
            iconBg={purple}
            text={
              <RegularText>
                Entrega em <strong>Rua Joao Daniel Santos, 122</strong>
                <br />
                Santos - São Paulo, SP
              </RegularText>
            }
          />

          <InfoIcon
            icon={<Clock weight="fill" />}
            iconBg={yellow}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                20 min - 30 min
              </RegularText>
            }
          />

          <InfoIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={yellow}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={ConfirmedImg} alt="Imagem pedido confirmado" />
      </section>
    </OrderConfirmedContainer>
  )
}
