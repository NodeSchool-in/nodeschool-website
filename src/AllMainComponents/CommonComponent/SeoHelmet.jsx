import {Helmet} from 'react-helmet-async';

function SeoHelmet({title , href , desc}){
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} data-rh="true"  />
        <link rel="canonical" href={href} />
      </Helmet>
    </>
  );
}

export default SeoHelmet;