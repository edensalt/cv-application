import HelpSvg from "../Assets/Help/help";

const Help = ({ open }) => {
    return (
        <div className="help" onClick={open}>
            <HelpSvg />
        </div>
    )
}

export default Help;