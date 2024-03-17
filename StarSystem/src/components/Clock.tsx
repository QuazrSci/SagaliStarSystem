import { useEffect, useState } from 'react';

function getTime()
{
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    return `${hours}:${minutes}:${seconds}`
}

function getDate()
{
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    return `${date}/${month}`
}

function Clock() {
    const [currentDate] = useState(getDate());
    const [currentTime, setCurrentTime] = useState(getTime());
    const currentyear = 2095;
    
    useEffect(() =>{
        const intervalhours = setInterval(() => setCurrentTime(getTime), 1000);
        return () => {
            clearInterval(intervalhours);
        };
    })

    
    return (
        <div className='absolute flex top-2 right-2'>
        <div className="text-orange-200 text-4xl select-none items-end p-2 m-2">
            <a>{currentTime}</a>
        </div>
        <div className="text-orange-200  text-xl select-none flex flex-col items-center p-2 m-2">
            <a>{currentyear}</a>
            <a>{currentDate}</a>
        </div>
    </div>  
    )
  }
  
  export default Clock