function EggIllustration({ className = '' }) {
  return (
    <svg
      className={`egg-illustration ${className}`.trim()}
      viewBox="0 0 42 52"
      role="img"
      aria-label="Illustration of an egg"
    >
      <path
        d="M21 2.8C12.8 2.8 4.5 18.7 4.5 30.1c0 11.6 7.3 19.1 16.5 19.1s16.5-7.5 16.5-19.1C37.5 18.7 29.2 2.8 21 2.8Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.2 17.2c1.4-3 3.2-5.7 5.2-7.5"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeOpacity=".8"
        strokeWidth="2"
      />
    </svg>
  )
}

export default EggIllustration
