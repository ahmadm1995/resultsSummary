function ResultScreen(){


    return (
        <div className="h-[512px] w-[368px] bg-gradient-light-slate-blue rounded-3xl flex flex-col justify-start items-center">
            <h1 className="text-custom-light-blue text-2xl pt-[38px] font-hanken font-medium">
                Your Result 
                </h1>
            <div className="h-[200px] w-[200px] rounded-full flex flex-col justify-center items-center bg-circle-gradient mt-[28px]">
                <h1 className="font-hanken font-extrabold text-white text-[72px] ">76</h1>
                <h1 className="text-custom-light-blue font-hanken font-bold -mt-3">of 100</h1>
            </div>
            <h1 className="text-white text-[32px] mt-[28px] font-hanken font-bold">Great</h1>
            <p className="text-custom-light-blue text-[18px] mt-[14px] font-hanken font-medium text-center	 ">Your performance exceeded 65% of the people conducting the test here!</p>

        </div>
    )
}

export default ResultScreen