import QuickStatsScreen from './QuickStatsScreen'

function SummaryScreen(){


    return (
        <div className="flex flex-col space-y-4 ml-[40px]">
            <h1 className='pt-[38px] font-hanken font-bold text-[24px] mb-[8px]'>Summary</h1>
            <QuickStatsScreen />
            <button className='w-[288px] h-[56px] text-[18px] font-hanken font-bold bg-gradient-light-slate-blue rounded-full text-white'type="button">Continue</button>


        </div>
    )
}

export default SummaryScreen