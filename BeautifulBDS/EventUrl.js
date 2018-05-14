(async function() {
	var href = window.location.href
	var pathName = window.location.pathname
	var search = window.location.search
	var pathFull = pathName + search
	var paths = window.location.search.split('&')
	if (1 < paths.length) {
		if (paths[0] == '?action=todasseries') {
			var order = 'none'
			paths.forEach(path => {
				if (path.startsWith('order')) {
					order = path.replace('order=', '')
				}
			})
			orderList(href.replace(/&order=.+/i, ''), order)
		}
	}
})()
