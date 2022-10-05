import './sun.css'

export const SunBox = ({duration, rotation}) => {
  return (
    <div id="sundiv">
      <div className="sunin" style={{animation: `rotateSun ${duration}s linear 0s infinite`, transform:`rotate(${rotation}deg)`}}>
        <div id="sun"></div>
      </div>
    </div>
  )
}
