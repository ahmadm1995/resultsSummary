import ResultScreen from "./ResultScreen"
import SummaryScreen from "./SummaryScreen"

function FullScreen(){


    return (
        <div className="h-[512px] w-[736px] bg-white rounded-3xl shadow-xl flex">
            <ResultScreen />
            <SummaryScreen />

        </div>
    )
}

export default FullScreen