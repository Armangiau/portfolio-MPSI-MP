import { Title } from 'solid-start'
import { HttpStatusCode } from 'solid-start/server'
import { Component } from 'solid-js'

const NotFound: Component = () => {
  return (
    <main class='flex flex:column ai:center'>
      <Title>Page inconnue</Title>
      <HttpStatusCode code={404} />
      <h1 class='t:center font-size:$(hsize) transform:rotate(15)@xl abs@xl top:150@xl left:900@xl'>Désolé cette page n'existe pas ou plus</h1>
      <img src='/798px-Peugeot_404__1974____Dutch_licence_registration_03-YA-61_pic2.webp' alt="photo d'une peugot 404" class='border-radius:53%|47%|25%|75|/|53%|24%|76%|47% max-w:90% m:10 transform:rotate(-10)@xl abs@xl top:200@xl left:10@xl' />
      <p class='transform:rotate(-20)@xl abs@xl top:600@xl left:800@xl'>Mais vous avez toujours votre moteur V8 de 404 pour naviguer vers d'autres pages</p>
    </main>
  )
}

export default NotFound
