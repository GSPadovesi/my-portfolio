import { Contact } from "../sections/contact/Contact"
import { Project } from "../sections/projects/Projects"
import { Trajectory } from "../sections/trajectory/Trajectory"
import { Welcome } from "../sections/welcome/Welcome"

export const HomePage = () => {
  return (
    <>
      <Welcome id='inicio-section' />
      <Trajectory id='trajetoria-section' />
      <Project id='projetos-section' />
      <Contact id='contato-section' />
    </>
  )
}