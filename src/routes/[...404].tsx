import { Title } from 'solid-start'
import { HttpStatusCode } from 'solid-start/server'
import { Component } from 'solid-js'
import peugot404 from '../../public/798px-Peugeot_404__1974____Dutch_licence_registration_03-YA-61_pic2.webp'

const NotFound: Component = () => {
  return (
    <main class='dark bg:background font:text'>
      <Title>Page inconnue</Title>
      <HttpStatusCode code={404} />
      <h1>Désolé cette page n'existe pas ou plus</h1>
      <span>Mais vous avez toujours votre moteur V8 pour navguer vers d'autres pages</span>
      <img src={peugot404} alt="photo d'une peugot" />
    </main>
  )
}

export default NotFound
