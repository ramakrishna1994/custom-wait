

module.exports = {
  
	customWait : function(milliSeconds)
   {
          var i;
		var d = new Date();
		var startTime = d.getTime();
		var endTime = startTime + milliSeconds;
		var curentTime;
		//console.log("Start Time:"+startTime);
         while(1)
         {
           //console.log("loop is executing in function");
		   d = new Date();
		   curentTime = d.getTime();
		   
		    if(curentTime == endTime)
				break;
         }
		 //console.log("End Time:"+curentTime);
         return true;
   }
}