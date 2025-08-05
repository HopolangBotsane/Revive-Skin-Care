import { useState } from "react";

function ProductPage() {

    const [quantity, setQuantity] = useState(1)

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    return(
        <div className="product-page">

            <div className="product-details">
                <div className="quantity">
                    <input type="number" value={quantity} onChange={handleQuantityChange} />
                </div>
            </div>
        </div>
    )
}

export default ProductPage