import Spin from "./Gears.gif"

function Spinner() {
    return (
        <div className="absolute w-fit h-fit" style={{ position:'fixed', backgroundColor: "hsl(0deg 0% 13% / 40%)", zIndex: '10000' }}>
            <div role="status" className="fixed mr-5" style={{top:'48%', right:'40%', translate:"transform:(-50%, -50%)"}}>
                <img src={Spin} />
                <span className="sr-only">loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
