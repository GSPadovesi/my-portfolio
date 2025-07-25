import * as S from './Main.styles'

export const Main = () => {
  const generateRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
  })

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    ...generateRandomPosition(),
    size: `${Math.random() * 3 + 1}px`,
  }))

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    ...generateRandomPosition(),
  }))


  return (
    <S.Main>
      {stars.map((star) => (
        <S.Star key={star.id} top={star.top} left={star.left} delay={star.delay} size={star.size} />
      ))}
      {particles.map((particle) => (
        <S.Particle key={particle.id} top={particle.top} left={particle.left} delay={particle.delay} />
      ))}
      <h1>Main</h1>
    </S.Main>
  )
}