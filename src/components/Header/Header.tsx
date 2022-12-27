import { Component } from 'solid-js'
import { A } from 'solid-start'

const Header: Component = () => {
  return (
    <header>
      <h1><A href='/accueil'>Armand Giauffret</A></h1>
      <nav>
        <A href='/accueil' />
        <A href='/projets' />
        <A href='/contact' />
      </nav>
    </header>
  )
}

export default Header
