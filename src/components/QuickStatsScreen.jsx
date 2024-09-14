import { useContext } from 'react'
import { MyContext } from '../MyContext'
import iconReaction from '../assets/icon-reaction.svg'
import iconMemory from '../assets/icon-Memory.svg'
import iconVerbal from '../assets/icon-Verbal.svg'
import iconVisual from '../assets/icon-Visual.svg'


function QuickStatsScreen(){

    const {quickData, setQuickData} = useContext(MyContext)

    const dataArray = quickData.map(item => {
        let icon;
        switch (item.category) {
          case 'Reaction':
            icon = iconReaction;
            break;
          case 'Memory':
            icon = iconMemory;
            break;
          case 'Verbal':
            icon = iconVerbal;
            break;
          case 'Visual':
            icon = iconVisual;
            break;
          default:
            icon = ''; // Default icon or leave it blank
        }
    
        // Return the modified object with the correct icon
        return { ...item, icon };
      });
   



    
    const displayItems = dataArray.map((item, index)=> (
        <div key={index} className={`flex space-x-2 ${item.boxColor} rounded-md w-[288px] h-[56px] items-center px-[16px]`}>
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