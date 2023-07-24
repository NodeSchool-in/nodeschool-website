import logo from "../svg/#nodeSchool.png"
import arrow from "../svg/arrow.png"
function Navbar(){
    return (
        <div className="nav">
            <div className="logo">
                <img src= {logo} />
            </div>
            <div className="navItem">
            <ul>
                <li><a href="">H<span className="color-red">o</span>me</a></li>
                <li><a href="">Co<span className="color-red">u</span>rses <img src={arrow}/></a></li>
                <li><a href="">A<span className="color-red">b</span>out</a></li>
            </ul>
            </div>
            
        </div>
    )
}

export default Navbar; 