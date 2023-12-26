import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api_blogpost } from "../ApiOperation/ApisManagement/post"
import SeoHelmet from '../CommonComponent/SeoHelmet';
import HtmlParser from '../CommonComponent/HtmlParser';
import Style from '../../styles/Blog.module.css'
import hljs from 'highlight.js';
// import javascript from 'highlight.js/lib/languages/javascript';
import "highlight.js/styles/github-dark.css";
import PageNotFound from '../Components/PageNotFound';
import BlogSheemer from '../CommonComponent/BlogSheemer';


const BlogPost = () => {
  const { handle } = useParams()
  let [blog, setBlog] = useState({});
  let [pageNotFound, setPageNotFound] = useState(false);
  let [seo, setSeo] = useState({});

  const updateUseState = async () => {
    const blog = await api_blogpost(handle);
    console.log(blog.data)
    if (blog.data.data) {
        setBlog(blog.data.data)
    } else {
      setPageNotFound(true)
    }
  }

  useEffect(() => {
    // hljs.registerLanguage('javascript', javascript);
    hljs.highlightAll()
  })

  useEffect(() => {
    window.scrollTo(0, 0);
    updateUseState();
  }, [])

   if(!blog.title && !pageNotFound) return <div className={Style.container}><BlogSheemer /></div>;

  return pageNotFound ? <PageNotFound /> : (
    <div className={Style.container}>
    <SeoHelmet title={blog.title} href={`https://nodeschool.in/blogs/${blog.slug}`} desc={blog.description}/>
    <div className={`${Style.content}`}>
        <HtmlParser htmlString={blog.body} />
    </div>
    </div>
  );
};

export default BlogPost;
