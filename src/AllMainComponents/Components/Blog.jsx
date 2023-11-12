// *Imports 
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { api_blogpost } from "../ApiOperation/ApisManagement/post" //! API calls
import Style from '../../styles/Blog.module.css'; // !CSS

// !components 
import PageNotFound from '../Components/PageNotFound';
import BlogSheemer from '../CommonComponent/BlogSheemer';
import SeoHelmet from '../CommonComponent/SeoHelmet';

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [pageNotFound, setPageNotFound] = useState(false);

    // *updates useStates
    async function updateUseState() {
        const post = await api_blogpost('blogs');
        if (post.data) {
            setBlogPosts(post.data.data)
        } else {
            setPageNotFound(true)
        }
    }

    useEffect(() => {
        updateUseState()
    }, [])

    if (blogPosts.length <= 0 && !pageNotFound) return <div className={Style.container}><BlogSheemer /></div>;

    return pageNotFound ? < PageNotFound /> : (
        <>
            <SeoHelmet
                title="Blogs | Nodeschool.in"
                desc="Blogs on javascript , NodeJs, NodeJs Examples, ReactJs, ReactJs Example"
                href="https://nodeschool.in/blogs" />

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                {console.log("blog", blogPosts)}
                <div className={Style.BlogsContainer}>
                    {blogPosts.map(category => (
                        <div className={Style.BlogChildContainer} key={category}>
                            <div>{category.ctitle}</div>
                            <ul>
                                {category?.Posts?.map(item => <li><Link className={Style.format} to={`/blogs/${item.slug}`}>{item.title}</Link></li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )

}

export default Blog;