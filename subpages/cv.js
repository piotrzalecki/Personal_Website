$(function (){
	

    $('#work_expirience_long').hide();
    
	$('#employmen_history').toggle(function() {
    $('#work_expirience_long').show('fast');
	$('#work_expirience_short').hide('fast')
    $('#employmen_history').text('(show short employment history)');
  }, function() {
    $('#work_expirience_long').hide('fast');
    $('#work_expirience_short').show('fast');
	 $('#employmen_history').text('(show full employment history)');

  });
		
	
})