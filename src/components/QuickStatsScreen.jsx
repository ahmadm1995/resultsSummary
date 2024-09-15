import { useContext } from 'react'
import { MyContext } from '../MyContext'
import iconReaction from '../assets/icon-reaction.svg'
import iconMemory from '../assets/icon-memory.svg'
import iconVerbal from '../assets/icon-verbal.svg'
import iconVisual from '../assets/icon-visual.svg'


function QuickStatsScreen(){

    const {quickData, setQuickData} = useContext(MyContext)

    const dataArray = quickData.map(item => {
        let icon;
        let hoverClass;
        switch (item.category) {
          case 'Reaction':
            icon = iconReaction;
            hoverClass = 'hover:bg-rose-200';
            break;
          case 'Memory':
            icon = iconMemory;
            hoverClass = 'hover:bg-amber-200';
            break;
          case 'Verbal':
            icon = iconVerbal;
            hoverClass = 'hover:bg-green-200';
            break;
          case 'Visual':
            icon = iconVisual;
            hoverClass = 'hover:bg-indigo-200';
            break;
          default:
            icon = '';
            hoverClass = '';
        }
    
        return { ...item, icon, hoverClass };
      });
    

      console.log(dataArray)
   



    
    const displayItems = dataArray.map((item, index)=> (
        
      

        <div key={index} className={`flex space-x-2 ${item.boxColor} ${item.hoverColor} rounded-md w-[288px] h-[56px] items-center px-[16px]`}>
            <img src={item.icon} />
            <h1 className={`flex-1 font-hanken font-medium text-[18px] ${item.textColor}`}>{item.category}</h1>
            <h1 className={`text-[18px]`}><strong>{item.score}</strong>  /  100</h1>
        </div>
    ))

    console.log(displayItems)


    return (
        <div className='flex flex-col space-y-4 pb-[20px]'>
            {displayItems}
        </div>
    )
    
}

export default QuickStatsScreen