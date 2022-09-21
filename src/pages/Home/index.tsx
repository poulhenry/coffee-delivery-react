import { TitleText } from '../../styles/typography'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro'

import {
  HomeContainer,
  CoffeeListTitleContainer,
  CoffeeListContainer,
} from './styles'
import { coffees } from '../../data/coffee'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <section className="container">
        <CoffeeListTitleContainer>
          <TitleText size="large">Nossos cafés</TitleText>
        </CoffeeListTitleContainer>

        <CoffeeListContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </section>
    </HomeContainer>
  )
}
