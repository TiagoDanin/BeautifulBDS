function orderList (urlMain, type) {
	var list = document.getElementsByTagName('tbody')[1]
	list = list.getElementsByTagName('tr')

	var listMain = list[0].getElementsByTagName('th')
	listMain[1].innerHTML = `<a href="${urlMain}&order=channel"><font color="black">Canal<i class="icon-arrow-down"></i></font></a>`
	listMain[2].innerHTML = `<a href="${urlMain}&order=pais"><font color="black">País<i class="icon-arrow-down"></i></font></a>`
	listMain[4].innerHTML = `<a href="${urlMain}&order=count"><font color="black">Grade<i class="icon-arrow-down"></i></font></a>`
	listMain[5].innerHTML = `<a href="${urlMain}&order=nota"><font color="black">Media<i class="icon-arrow-down"></i></font></a>`
	listMain[6].innerHTML = `<a href="${urlMain}&order=status"><font color="black">Status<i class="icon-arrow-down"></i></font></a>`
	/*
	{
		html: serieHTML,
		channel: serieChannel,
		pais: seriePais,
		nota: serieNota,
		status: serieStatus
	}
	*/
	var table = []
	if (type != 'none') {
		for (var i = 0; i < list.length; i++) {
			if (i == 0) {
				//TODO: Coloca as urls
			} else {
				var element = list[i]
				var serieHTML = element.innerHTML
				var serie = element.getElementsByTagName('td')
				var serieChannel = serie[1].innerText
				var seriePais = serie[2].innerHTML
				var serieNota = Number(serie[5].innerText)
				var serieStatus = serie[6].innerText
				table.push({
					html: serieHTML,
					channel: serieChannel,
					pais: seriePais,
					nota: serieNota,
					status: serieStatus
				})
			}
		}

		if (type == 'nota') {
			table.sort((a, b) => b.nota - a.nota)
		} else {
			if (1 < table.length && table[1][type]) {
				table.sort((a, b) => {
					var indexA = a[type].toUpperCase()
					var indexB = b[type].toUpperCase()
					if (indexA < indexB) { return -1 }
					if (indexA > indexB) { return 1  }
					return 0
				})
			}
		}
		for (var i = 0; i < (table.length + 1); i++) {
			if (0 < i) {
				var element = list[i]
				element.innerHTML = table[i - 1].html
			}
		}
	}
}
