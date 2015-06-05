$(document).ready(function(){
  var all_dates = $('tr').length - 1
  var dateNow = Date.now()/1000;
  var dateArray = []

  for(var i = 1; i <= all_dates; i++){
    var date = $('td#due-date-todo_' + i).text().split('-');
    date = new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]));
    dateArray[i] = date.getTime()/1000;
  }

  for(var i = 1;  i <= all_dates; i++){
    if(dateArray[i] !== 'undefined'){
      console.log('hello')
    }
  }

  console.log(dateArray)
  
});