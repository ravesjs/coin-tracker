import React from 'react'
import Header from './components/Header'
import SocialInfo from './components/SocialInfo'
import { info } from './data'
import Button from './components/Button'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <ul>
            <SocialInfo {...info[0]} />
            <SocialInfo {...info[1]} />
            <SocialInfo {...info[2]} />
          </ul>
        </section>
        <section>
          <h3>Что такое компот?</h3>
          <Button>Не знаю</Button>
          <Button>Знаю</Button>
          <Button>А</Button>
        </section>
      </main>
    </div>
  )
}

export default App
