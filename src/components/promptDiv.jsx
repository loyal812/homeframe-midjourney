import MagicIcon from "./magicIcon";

const PromptDiv = () => {
    return (
        <div className="promptDiv">
            <div className="promptText">
                <div className="label">Prompt</div>
                <div className="text">elvis presley, singing, pop art style, colourful</div>
            </div>
            <div className="promptCreate">
                <MagicIcon className="editbutton" />
                <div className="label">Create</div>
            </div>
        </div>
    )
}

export default PromptDiv;