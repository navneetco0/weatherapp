import './moon.css'

export const MoonBox = ({left, duration, rotation}) => {
  return (
    <div id="moondiv">
      <div className="moonin" style={{animation: `rotateSun ${duration}s linear 0s infinite`,   
      transform: `rotate(${rotation}deg)`
      }}>
        <div id="moon">
          <div id="relmoon">
            <div id="absmoon" style={{left:`${left*100}%`, background: '#010f22'}}   ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
