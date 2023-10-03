import {Helmet} from 'react-helmet-async';

function SeoHelmet({title , href}){
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={href} />
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
    </>
  );
}

export default SeoHelmet;