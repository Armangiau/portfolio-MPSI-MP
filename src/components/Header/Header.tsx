import { Component } from 'solid-js'
import { A } from 'solid-start'
import style from './Header.module.css'

const Header: Component = () => {
  return (
    <header class='font-size:$(h3size) flex justify-content:space-between backdrop-filter:blur(50) bg:$(transparentText) sticky top:0 left:0 w:100vw p:$(psize)'>
      <h2 class='background-clip:text text-fill-color:transparent bg:conic-gradient(from|60deg,$(action),$(text))'><A href='/accueil'>Armand Giauffret</A></h2>
      <nav class={`ml:$(h3size)>a ${style.underline}`}>
        <A href='/accueil'>Accueil</A>
        <A href='/projets'>Projets</A>
        <A href='/contact'>Contacts</A>
      </nav>
    </header>
  )
}

export default Header
