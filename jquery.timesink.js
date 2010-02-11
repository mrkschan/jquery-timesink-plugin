jQuery.fn.timeSink = function(list, range, mapper, anchor)
{
	list = jQuery(list);
	anchor = anchor || new Date();

	if ( list.length ) {
		var rows = list.children('li');
		var cache = (mapper)
				? rows.map(mapper)
				: rows.map(function(){
					return new Date(this.innerHTML);
				});

		this.children('li').each(filter);
	}

	return this;

	function filter(idx, el)
	{
		var sieve = range[idx];

		$(el).click(function () {
			cache.each(function() {
				if (null == sieve) {
					// show all
					rows.show();
				} else {
					cache.each(function(i) {
						if (cache[i] > sieve) $(rows[i]).show();
						else                  $(rows[i]).hide();
					});
				}
			});
		});
	}
};
