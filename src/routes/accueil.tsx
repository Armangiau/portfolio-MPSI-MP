import { Component } from 'solid-js'
import { Title } from 'solid-start'
import './accueil.css'

const Accueil: Component = () => {
  return (
    <main>
      <Title>A.Giauffret MPSI</Title>
      <h1 class='t:center mt:10'>
        <span class='text-appear-from-y'>Bonjour je m'appel Armand Giaufret,</span>
        <br />
        <span class='font-family:$(raleway) text-appear-from-x'>Je suis lycéen et postule pour la filière MPSI</span>
      </h1>
      <div style='perspective: 60rem;'>
        <div
          id='cube-presentation'
          class='h:$(cube-size) w:$(cube-size) animation:cubePresentationRotation|600ms|linear|1|forwards mx:auto my:$(half-cs) transform-style:preserve-3d {bg:radial-gradient(closest-side,$(primary),$(transparentPrimary));full;abs;b:solid|$(primary)|1}>div'
        >
          <div class='transform:translateZ($(half-cs))' />
          <div class='transform:rotateY(180)|translateZ($(half-cs))' />
          <div class='transform:rotateY(-90)|translateZ($(half-cs))' />
          <div class='transform:rotateY(90)|translateZ($(half-cs))' />
          <div class='transform:rotateY(-90)|translateZ($(half-cs))' />
          <div class='transform:rotateY(90)|translateZ($(half-cs))' />
        </div>
      </div>
    </main>
  )
}

export default Accueil
