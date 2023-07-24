import bannerImage from "../svg/profileImage.png"
import bannerText from "../svg/bannerText.png"

function BannerContainer(){
    return (
        <div className="banner">
            <div className="imageBanner">
                <img src={bannerImage} />
            </div>
            <div className="bannerContent">
                 <h1>Hi, I am Prashant</h1>
                 <h3 className="color-red">CS Engineer | Passionate Engineer | Building Products</h3>
                 <br/>
                 <h3 className="common-text">I am a CS engineer passionate about building system that scale and currently working
                    working with <span className="color-red">Sugar Cosmetics</span> as a 
                    <span className="color-red"> Engineering Team Lead </span> throughout my carrer, I have worked across
                    variety of domains and have built system, services and platforms that scales to billion of users
                    i have worked at companies like <span className="color-red">Sugar Cosmetics , Byjus , IIFL (NeoSoft Tech) and SDL</span>.
                 </h3>
            </div>
        </div>
    )
}

export default BannerContainer;