import CartSVG from "./cartImg";

const PriceDiv = () => {
    return (
        <div className="priceDiv">
            <div className="priceText">
                <div className="label">Price</div>
                <div className="text">2280$</div>
            </div>
            <div className="priceEdit">
                <CartSVG className="cartButton" />
            </div>
        </div>
    )
}

export default PriceDiv;