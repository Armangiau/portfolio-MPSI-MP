import { Component } from 'solid-js'
import { A } from 'solid-start'
import style from './Header.module.css'

const Header: Component = () => {
  return (
    <header class='font-size:$(h2size) flex justify-content:space-between backdrop-filter:blur(50) fixed w:100vw p:$(psize) mt:calc($(h2size)+2*$(psize))~*'>
      <h2><A href='/'>Armand Giauffret</A></h2>
      <nav class={`ml:$(psize)>a ${style.underline}`}>
        <A href='/' class='hidden inline@sm'>Accueil</A>
        <A href='/projets'>Projets</A>
        <A href='/contact'>Contacts</A>
      </nav>
    </header>
  )
}

export default Header
