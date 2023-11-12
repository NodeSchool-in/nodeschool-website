import React from 'react';
import Style from "../../styles/PageNotFound.module.css"
import {Link} from "react-router-dom"
const PageNotFound = () => {
  return (
    <section className={Style.page_404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
              <div className={Style.four_zero_four_bg}>
                <h1 className="text-center ">404</h1>
              </div>

              <div className={Style.contant_box_404}>
                <h3 className="h2">
                  Look like you're lost
                </h3>

                <p>The page you're looking is currently not available!</p>

                <Link to="/" className={Style.link_404}>Go to Home</Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default PageNotFound;
