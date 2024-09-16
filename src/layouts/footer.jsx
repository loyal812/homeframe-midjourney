

import StyleSelect from "../components/style_select"
import PromptDiv from "../components/promptDiv"
import PriceDiv from "../components/priceDiv"

const Footer = () => {
    return (
        <>
        <div className="footer">
            <StyleSelect />
            <PromptDiv />
            <PriceDiv />
        </div>
        </>
    )
}

export default Footer