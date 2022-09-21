import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import IntroImg from '../../../../assets/hero-img.png'
import { InfoIcon } from '../../../../components/InfoIcon'
import { RegularText, TitleText } from '../../../../styles/typography'

import { BenefitsContainer, IntroContainer, IntroContent } from './styles'

export function Intro() {
  const colors = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <TitleText size="xlarge" color="title">
              Encontre o café perfeito para qualquer hora do dia
            </TitleText>
            <RegularText size="large" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconBg={colors['yellow-dark']}
            />

            <InfoIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconBg={colors['base-text']}
            />

            <InfoIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconBg={colors.yellow}
            />

            <InfoIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconBg={colors.purple}
            />
          </BenefitsContainer>
        </div>

        <img src={IntroImg} alt="Imagem Coffee Delivery" />
      </IntroContent>
    </IntroContainer>
  )
}
