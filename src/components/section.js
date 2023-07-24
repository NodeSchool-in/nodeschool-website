function Review(prop){
    return (
        <section className="review">
            <div className="headline"><span className="color-red"># </span>{prop.question}</div>
            <div className="common-text color-purple">{prop.supportingText}</div>
        </section>
    )
}


export default Review;