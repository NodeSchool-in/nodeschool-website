import "./css/AnimalShow.css"
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'


function AnimalShow({type}){

    const svgMap = {
        bird,
        cat,
        cow,
        dog,
        gator,
        horse
    }
    return (
        <div className="animal-show">
            <img src={svgMap[type]} className="animal"/>
        </div>
    )
}

export default AnimalShow;