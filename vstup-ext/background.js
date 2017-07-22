var vstup =  {
	selector: '.tablesaw.tablesaw-stack.tablesaw-sortable',
	analysys: function(points = 0, priority = 0, count = 0) {
		var counter = 1, selector = this.selector;
		for(var i = 2; i < $(this.selector + ' tr').length; i++) {
			$(selector + ' tr').eq(i).css('display', '');
			var row = {
				priority: parseInt($(selector + ' tr').eq(i).find('td').eq(2).text()),
				points: parseFloat($(selector + ' tr').eq(i).find('td').eq(3).text())
			}
			if ( priority != 0 && (isNaN(row.priority) || row.priority > priority) )
				$(selector + ' tr').eq(i).css('display', 'none');
			if ( points != 0 && row.points < points ) 
				$(selector + ' tr').eq(i).css('display', 'none');
			if ( $(selector + ' tr').eq(i).css('display').indexOf('none') === -1 )
			 	$(selector + ' tr').eq(i).find('td').eq(0).text(counter++);
			if ( counter-1 > count) 
				$(selector + ' tr').eq(i).css('display', 'none');
		}
	},
	reset: function() {
		for(var i = 2; i < $(this.selector + ' tr').length; i++) {
			$(this.selector + ' tr').eq(i).css('display', '');
		}
	}
}