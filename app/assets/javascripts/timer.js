$(document).ready(function(){
  var all_dates = $('tr').length - 1
  var dateNow = Math.floor(new Date() / 1000);
  var dateArray = []

  for(var i = 1; i <= all_dates; i++){
    var date = $('td#due-date-todo_' + i).text().split('-');
    date = new Date( $('td#due-date-todo_' + i).text() ) / 1000;
    dateArray[i] = date;
  }

  for(var i = 1;  i <= all_dates; i++){
    if(dateArray[i] !== 'undefined' && (dateArray[i] - dateNow) > 0 ){
      $('td#time-left-todo_' + i ).text(dateArray[i] - dateNow)
      $.ajax({
        url: 'todos/' + i,
        method: 'PATCH',
        data: {status: 'due'}
      })
    }
    else {
      $('td#time-left-todo_' + i ).append(0)
      $.ajax({
        url: 'todos/' + i,
        method: 'PATCH',
        data: {status: 'past done'}
      })
    }
  }

  dateArray.forEach(function(element){
    if(element !== 'undefined' && (element - dateNow) > 0 ){
      var index = dateArray.indexOf(element)
      var num = parseInt($('td#time-left-todo_' + index ).text())
      setInterval(function(){
        num = num - 1
        $('td#time-left-todo_' + index ).html(num)

        $.ajax({
          url: '/decrement/' + index,
          method: 'PATCH',
          data: {time_left: num}
        })
      }, 1000)
    }
  })

  
});