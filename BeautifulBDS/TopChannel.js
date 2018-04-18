(async function(){
	var tableChannelTop = `<h3>Top Canal</h3> (Por notas Top10 e Top100)
		<table class="table table-condensed table-bordered">
			<tbody>
				<tr>
					<th>Canal</th><th>Nota</th>
				</tr>
	`
	var channelTop = []
	var containerTop = document.getElementsByClassName('container-fluid')
	if (containerTop && containerTop[0]) {
		var topTable = containerTop[0].getElementsByClassName("table-bordered")
		if (topTable && topTable[1]) {
			var subTopTable = topTable[1].getElementsByTagName('tr')
			if (subTopTable) {
				for (var i = 0; i < subTopTable.length; i++) {
					if (i != 0) {
						var channel = subTopTable[i].getElementsByTagName('td')[2].innerText
						var nota = Number(subTopTable[i].getElementsByTagName('td')[3].innerText)
						var index = channelTop.findIndex(a => a.name == channel)
						if (index != '-1') {
							channelTop[index].notas.push(nota)
						} else {
							var init = {name: channel, notas: [], notaGeral: 0}
							init.notas.push(nota)
							channelTop.push(init)
						}
					}
				}
				channelTop.forEach(channel => {
					channel.notaGeral = channel.notas.reduce((sum, current) => sum + current) / channel.notas.length
				})
				channelTop.sort((a, b) => b.notaGeral - a.notaGeral)
				channelTop.forEach(channel => {
					var nota = String(channel.notaGeral.toLocaleString('pt-br', { maximumSignificantDigits : 3 }))
					tableChannelTop += "<tr><td>" + String(channel.name) + "</td><td>" + nota + "</td></tr>"
				})
				tableChannelTop += `</tbody>
					</table>
				`
				if (containerTop[0].getElementsByClassName('span2') && containerTop[0].getElementsByClassName('span2')[0]) {
					containerTop[0].getElementsByClassName('span2')[0].innerHTML += tableChannelTop
				}
			}
		}
	}
})()
