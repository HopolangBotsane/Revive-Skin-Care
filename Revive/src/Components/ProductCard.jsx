// import { useState } from "react";

function ProductCard(props){

    return(
        <div className="product-card">
            <div className="product-img">{productImg}</div>

            <div className="product-details">
                <h1 className="product-name">{productName}</h1>
                <p className="product-type">{productCategory}</p>

                <div className="product-size-prize">
                    <h2 className="product-price">{productPrice}</h2>
                    <h2 className="product-size">{productSize} <br/> {productMeasurement}</h2>
                </div>

            </div>
        </div>
    )
}

MyComponent.propTypes = {
    productImg: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productCategory: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productSize: PropTypes.number.isRequired,
    productMeasurement: PropTypes.string.isRequired,
};

export default ProductCard