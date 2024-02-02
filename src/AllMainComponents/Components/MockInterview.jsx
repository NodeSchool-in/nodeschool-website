import { useState, useEffect } from "react"
import Style from '../../styles/Mock.module.css'; // !CSS
import Footer from '../CommonComponent/Footer';
import bannerImage from '../../svg/profileImage.png';
import MockInterviewCard from '../CommonComponent/MockInterviewCard';
import BlogSheemer from "../CommonComponent/BlogSheemer";

import { getMockPage } from "../ApiOperation/ApisManagement/mock";
function MockInterview() {
    let [mockUserData, setMockUserData] = useState([]);
    let [pageNotFound, setPageNotFound] = useState(false);
    let [products, setProducts] = useState([]);
    let [currentFilter, setFilter] = useState("all");

    async function updateUseState() {
        const userData = await getMockPage();
        if (userData.data) {
            setMockUserData(userData.data.data)
            setProducts(userData.data.data.products)
        } else {
            setPageNotFound(true)
        }
    }

    function filterProduct(e){
       if(e.target.getAttribute("type") != "all"){
        const filteredProduct = mockUserData.products.filter(product=> product.type == e.target.getAttribute("type"))
        setProducts(filteredProduct)
        setFilter(e.target.getAttribute("type"))
       }else{
        setProducts(mockUserData.products)
        setFilter("all")
       }
    }

    useEffect(function () {
        window.scrollTo(0, 0);
        console.log("Hitting useEffect")
        updateUseState()
    }, [])

    //if (mockUserData.length <= 0 && !pageNotFound) return <div><BlogSheemer /></div>;
    return (
        <>
            <div className={Style.wrapper}>
                <div className={Style.sidebar}>
                    <div className={Style.bannerImage}>
                        <img src={bannerImage} style={{ objectFit: 'contain' }} alt='Master Node.js with Prashant' />
                    </div>
                    <div className={Style.sidebarContent}>
                        <h1>{mockUserData?.author?.name}</h1>
                        <p>{mockUserData?.author?.description}</p>
                    </div>
                </div>
                <div className={Style.content}>
                    <div className={Style.filter}>
                        <div onClick={filterProduct} type="all" className={currentFilter == "all" ? Style.selected : Style.notselected}>All</div>
                        <div onClick={filterProduct} type="interview" className={currentFilter == "interview" ? Style.selected : Style.notselected}>1:1 Interview</div>
                        <div onClick={filterProduct} type="guidance"  className={currentFilter == "guidance" ? Style.selected : Style.notselected}>Guidance</div>
                    </div>

                    <div className={Style.products}>
                        {products.map(product => <MockInterviewCard product={product} key={product.handle}></MockInterviewCard>)}

                    </div>

                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    )
}

export default MockInterview;