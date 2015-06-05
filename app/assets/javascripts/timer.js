$(document).ready(function(){
  var all_dates = $('td.due-date').length

  var dateNow = Date.now()/1000;

  var dateArray = []

  for(var i = 1; i <= all_dates; i++){
    var date = $('td#todo_' + i + '.due-date').text().split('-');
    date = new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]));
    dateArray.push( date.getTime()/1000 )
  }

  


  
});