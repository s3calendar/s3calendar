getCalendar = function(){
   var url = document.URL;
   var calendar = url.substring(url.indexOf("gcalendar")+10,url.length);
   calendar = calendar.replace("%20"," ");
   return calendar;
};

setCalendar = function() {
   calendar = getCalendar();
   var selectCal = document.querySelectorAll('select');
   for(var i=0; i < selectCal.length; i++){
	   if (selectCal[i].getAttribute('id').indexOf('calendar') != -1) {
	   		var getOptions = selectCal[i].querySelectorAll('option');
			for(var j=0; j<getOptions.length; j++){
				if(getOptions[j].textContent== calendar){
					getOptions[j].setAttribute('selected','selected');
					break;
				}	  
			}
			break;
	   }
   }
};

window.addEventListener("load", setCalendar(), false);