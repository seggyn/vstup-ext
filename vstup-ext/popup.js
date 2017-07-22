$(document).ready(function(){
	$('#refresh').click(function(){
	 	var array = {
			priority: parseInt($('#priority').val()),
			points: parseFloat($('#points').val()),
			count: parseInt($('#count').val())
		};
	    chrome.tabs.getSelected(null, function(tab) {
	    	console.log(array);
	    	if (array.priority != '' && array.points != '' && array.count != '') {
				chrome.tabs.executeScript(null,
	      		  {code:"vstup.analysys("+array.points+", "+array.priority+", "+array.count+");"
	    		});
			}
		});
	});
	$('#reset').click(function(){
	    chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript(null, {code:"vstup.reset();" } );
		});
	});
});
