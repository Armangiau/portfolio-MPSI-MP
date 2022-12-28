import { Component } from 'solid-js'
import { Title } from 'solid-start'

const Accueil: Component = () => {
  return (
    <main>
      <Title />
      <h1>Hello world!</h1>
      <p>
        Visit{' '}
        <a href='https://start.solidjs.com' target='_blank' rel='noreferrer' class='light btn flex:column'>
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  )
}

export default Accueil