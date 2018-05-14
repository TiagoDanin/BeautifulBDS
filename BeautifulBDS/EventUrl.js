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
		} else if (paths[0] == '?action=checkvanityprofile') {
			if (paths[1] == 'screen=assiduidade') {
				assiduidade(paths[2].replace(/id=/i, ''))
			}
		}
	}
})()
