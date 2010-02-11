jQuery.fn.timeSink = function(list, range, mapper)
{
	var ts = this;
	list = jQuery(list);

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

		$(el).click(function ()
		{
			ts.sieve = sieve;
			cache.each(function(i)
			{
				if (null == sieve) {
					rows.show(); // show all
				} else {
					if (cache[i] >= sieve) $(rows[i]).show();
					else                   $(rows[i]).hide();
				}
			});
		});
	}
};
