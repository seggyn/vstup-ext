var vstup =  {
	selector: '.tablesaw.tablesaw-stack.tablesaw-sortable tr',
	hide: function(num) {
		$(this.selector).eq(num).css('display', 'none');
	},
	analysys: function(points = 0, priority = 0, count = 0) {
		var counter = 1;
		for(var i = 2; i < $(this.selector).length; i++) {
			$(this.selector).eq(i).css('display', '');
			var raw = {
				priority: parseInt($(this.selector).eq(i).find('td').eq(2).text()),
				points: parseFloat($(this.selector).eq(i).find('td').eq(3).text())
			};
			if ((priority != 0 && (isNaN(raw.priority) || raw.priority > priority))
				 || ( points != 0 && raw.points < points ) )
				this.hide(i);
			if ($(this.selector).eq(i).css('display').indexOf('none') === -1)
			 	$(this.selector).eq(i).find('td').eq(0).text(counter++);
			if (counter-1 > count) 
				this.hide(i);
		}
	},
	reset: function() {
		for(var i = 2; i < $(this.selector).length; i++) {
			$(this.selector).eq(i).css('display', '');
		}
	}
}