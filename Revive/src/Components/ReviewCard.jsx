function ReviewCard(props) {

    return(
        <div className="review-card">
            <img src={reviewImg} alt="" />
            <h1>{reviewName}</h1>
        </div>
    )
}

MyComponent.propTypes = {
    reviewImg: PropTypes.src.isRequired,
    reviewName: PropTypes.string.isRequired,
}


export default ReviewCard