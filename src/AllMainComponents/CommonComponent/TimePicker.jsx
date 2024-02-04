
import { useState ,useEffect } from "react"
import Style from "../../styles/DatePicker.module.css"



function TimePicker({selectedDay , setState}) {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0)
  const slotForWeekdays = ["8:00 PM", "9:00 PM"]
  const slotForWeekends = ["8:00 AM", "9:00 AM", "2:00 PM", "9:00 PM"]

  const onTimeSelect = (e) => {
    console.log("e.target.getAttribute", e.target)
    setSelectedTimeIndex(e.target.getAttribute("index"))
    setState(e.target.innerHTML)
  }

  useEffect(()=>{
    setState("9:00 PM")
  },[])

  return (
    <>
      <strong style={{ margin: "5px", padding: "5px" }}>pick a time</strong>
      <div style={{
        marginLeft: "25px",
        display: "flex",
        gap: "10px",
        padding: "10px"
      }}>
        {/* <div className={Style.BGVFH}> 8:00 PM</div>
              <div className={Style.BGVFH}> 9:00 PM</div> */}
        {/* {(selectedDay == "Sat" || selectedDay || "Sun") ? updateSelectedDate(props.selectedDay) : ""} */}
        { (selectedDay == "Sat" || selectedDay == "Sun") == true ? 
        slotForWeekends.map((time, index) => {
          return (<div onClick={onTimeSelect} key={index} className={selectedTimeIndex != index ? Style.dateDiv : Style.dateDivSelect} index={index}> {time} </div>)
        }):
        slotForWeekdays.map((time, index) => {
          return (<div onClick={onTimeSelect} key={index} className={selectedTimeIndex != index ? Style.dateDiv : Style.dateDivSelect} index={index}> {time} </div>)
        })}

      </div>
    </>
  )
}

export default TimePicker;