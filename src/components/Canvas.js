import Chart from 'react-apexcharts'

const Canvas = ({ data, Icons }) => {
  const hour = new Date().getHours();
  let xax = data.slice(0, 24-hour).map((Element, index)=>index === 0
  ? 'Now'
  : hour + index === 24
  ? new Date().getDate() + 1 + '/' + (new Date().getMonth() + 1)
  : hour + index === 48
  ? new Date().getDate() + 2 + '/' + (new Date().getMonth() + 1)
  : hour + index > 48
  ? ((hour + index) % 48).toString().length===1?`0${(hour+index)%48}:00`:`${((hour + index)%48)}:00`
  : hour + index > 24
  ? ((hour + index) % 24).toString().length===1?`0${(hour+index)%24}:00`:`${((hour + index)%24)}:00`
  : (hour + index).toString().length===1?`0${hour+index}:00`:`${(hour + index)}:00`);
  // console.log(xax);
  let state = {
    options: {
      chart: {
        id: 'chart2',
        type: 'area',
        foreColor: '#ccc',
      },
      colors: ['#00BAEC'],
      stroke: {
        width: 3,
      },
      grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
      xaxis: {
        categories: xax
      },
    },
    series: [
      {
        name: 'series-1',
        data: data.slice(0, 24-hour).map((Element, index)=>Math.round(Element.temp))
      },
    ],
  }

  return (
    // <div className="app">
    //   <div className="row">
    //     <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="500"
          />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Canvas
