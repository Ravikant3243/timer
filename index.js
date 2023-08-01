const second=1000;
 const minute=60*second;
  const hour=60*minute;
  const day=24*hour;
  const days=document.querySelector(".days");
   const hours=document.querySelector(".hours");
    const minutes=document.querySelector(".minutes");
     const seconds=document.querySelector(".seconds");
     
    
   const timerFunction=()=>{
          const now=new Date();
          const yyyy=now.getFullYear();
           const entDay=prompt("Enter Day").padStart(2,"0");
           const entMonth=prompt("Enter Month").padStart(2,"0");
           const targetDate=`${entMonth}/${entDay}/${yyyy}`; 
            
            
      setInterval(()=>{
            const today=new Date().getTime();
            const timer=new Date(targetDate).getTime();
             if(timer>=today){
              const diff=timer-today;
              const remDay=Math.floor(diff/day);
              const remHour=Math.floor((diff%day)/hour);
              const remMin=Math.floor((diff%hour)/minute);
             const remSec=Math.floor((diff%minute)/second);
              days.innerText=remDay;
              hours.innerText=remHour;
              minutes.innerText=remMin;
              seconds.innerText=remSec;
             }
              else {
             
                days.innerText="0";
                hours.innerText="0";
                minutes.innerText="0";
                seconds.innerText="0";
              }

      },1000);

  }
  timerFunction();