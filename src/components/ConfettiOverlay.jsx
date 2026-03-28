function ConfettiOverlay() {
  const pieces = Array.from({ length: 28 }, (_, index) => index)

  return (
    <div className="celebration" aria-hidden="true">
      <div className="celebration__burst celebration__burst--left" />
      <div className="celebration__burst celebration__burst--right" />
      {pieces.map((piece) => (
        <span
          key={piece}
          className="celebration__piece"
          style={{
            '--delay': `${piece * 0.08}s`,
            '--left': `${(piece * 13) % 100}%`,
            '--rotation': `${piece * 19}deg`,
          }}
        />
      ))}
    </div>
  )
}

export default ConfettiOverlay
