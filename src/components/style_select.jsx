import EditIcon from "./editIcon"

const StyleSelect = () => {
    return (
        <div className="flex style_select">
            <div className="styleImg">
                <img className="" src="/assets/img/frame202.png"/>
            </div>
            <div className="styleText">
                <div className="label">Style</div>
                <div className="type">Pop-Art</div>
            </div>
            <div className="styleEdit">
                <EditIcon className="editbutton" />
            </div>
        </div>
    )
}

export default StyleSelect;