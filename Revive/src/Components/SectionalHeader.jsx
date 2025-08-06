function SectionalHeader(props){

    return(
        <div className="sectionalHeader">
            <h1 className="section-introduction">{title}</h1>
            <p className="section-paragraph">{paragraph}</p>
        </div>
    )
}

MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};


export default SectionalHeader