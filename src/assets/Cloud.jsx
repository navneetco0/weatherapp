export const Cloud = () => {
  return (
    <svg
    width={"100%"}
      viewBox="100 100 900 400"
      style={{
        fill: 'currentColor',
        opacity: '0.9',
        filter: 'url(#filter)'
      }}
    >
      <filter
        id="filter"
        filterUnits="userSpaceOnUse"
        height="500"
        width="900"
        y="0"
        x="0"
        style={{ colorInterpolationFilters: 'sRGB' }}
      >
        <feTurbulence
          type="fractalNoise"
          seed="462"
          baseFrequency="0.011"
          numOctaves="5"
          result="noise1"
        />
        <feTurbulence
          type="fractalNoise"
          seed="462"
          baseFrequency="0.011"
          numOctaves="2"
          result="noise2"
        />
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        <feDisplacementMap
          in="blur1"
          scale="100"
          in2="noise1"
          result="cloud1"
        />
        <feFlood floodColor="rgb(215,215,215)" floodOpacity="0.3" />
        <feComposite operator="in" in2="SourceGraphic" />
        <feOffset dx="-10" dy="-3" />
        <feMorphology radius="20" />
        <feGaussianBlur stdDeviation="20" />
        <feDisplacementMap scale="100" in2="noise1" result="cloud2" />
        <feFlood floodColor="rgb(66,105,146)" floodOpacity="0.2" />
        <feComposite operator="in" in2="SourceGraphic" />
        <feOffset dx="-10" dy="40" />
        <feMorphology radius="0 40" />
        <feGaussianBlur stdDeviation="20" />
        <feDisplacementMap scale="80" in2="noise2" result="cloud3" />
        <feFlood floodColor="rgb(0,0,0)" floodOpacity="0.4" />
        <feComposite operator="in" in2="SourceGraphic" />
        <feOffset dx="20" dy="60" />
        <feMorphology radius="0 65" />
        <feGaussianBlur stdDeviation="20" />
        <feDisplacementMap scale="50" in2="noise2" result="cloud4" />
        <feMerge>
          <feMergeNode in="cloud1" id="feMergeNode954" />
          <feMergeNode in="cloud2" id="feMergeNode956" />
          <feMergeNode in="cloud3" id="feMergeNode958" />
          <feMergeNode in="cloud4" id="feMergeNode960" />
        </feMerge>
      </filter>
      <ellipse cx="500" cy="290" rx="340" ry="90" className="cloud" />
    </svg>
  )
}
