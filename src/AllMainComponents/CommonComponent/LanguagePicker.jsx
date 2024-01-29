
import { useEffect, useState } from "react"
import Style from "../../styles/DatePicker.module.css"


function LanguagePicker({setState}) {
  const [selectedLang, setSelectedLang] = useState(0)
  const courses = ["React.Js", "Node.Js"]

  const onLangSelect = (e) => {
   // console.log("e.target.langSelect", e.target.innerHTML)
    setState(courses[e.target.getAttribute("index")])
    setSelectedLang(e.target.getAttribute("index"))
  }

  useEffect(()=>{
    setState(courses[0])
  },[])



  return (
    <>

      <strong style={{ margin: "5px", padding: "5px" }}>pick a skill ( Javascript is Common )</strong>
      <div style={{
        marginLeft: "25px",
        display: "flex",
        gap: "10px",
        padding: "10px"
      }}>
        {/* <div className={Style.BGVFH}> 8:00 PM</div>
              <div className={Style.BGVFH}> 9:00 PM</div> */}

        {courses.map((time, index) => {
          return (<div onClick={onLangSelect} key={index} className={selectedLang != index ? Style.dateDiv : Style.dateDivSelect} index={index}> {time} </div>)
        })}
      </div>
    </>
  )
}

export default LanguagePicker;