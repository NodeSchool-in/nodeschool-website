import { useLocation, Link } from "react-router-dom";
import Style from '../../styles/Breadcrumbs.module.css';

const Breadcum = () => {
    const location = useLocation()
    let currentLink = '';
    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
            currentLink = `${currentLink}/${crumb}`
            return (
                <div className={Style.crumb} key={crumb}>
                    <Link to={currentLink} >{crumb}</Link>
                </div>

            )
        })
    return (
        <div className={Style.breadcrumbs}>
            {crumbs}
        </div>
    )
}

export default Breadcum;