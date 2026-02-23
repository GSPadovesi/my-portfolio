import { Welcome, Trajectory, Projects, Contact } from "../sections"

export const HomePage = () => {
  return (
    <>
      <Welcome id='inicio-section' />
      <Trajectory id='trajetoria-section' />
      <Projects id='projetos-section' />
      <Contact id='contato-section' />
    </>
  )
}