(async function() {
	var gradeTable = document.getElementsByClassName('tabbable')
	if (gradeTable && gradeTable.length == 1)
		var campoPerfil = document.getElementsByClassName('span2')[1]
		if (campoPerfil) {
			var info = campoPerfil.getElementsByTagName('table')[0]
			var assUrl = info.getElementsByTagName('tr')[4].getElementsByTagName('td')[2].getElementsByTagName('a')[0]
			assUrl.href = assUrl.href.replace('AssidCalculator.php?user=', 'index.php?action=checkvanityprofile&screen=assiduidade&id=')
			var totalBadges = 0
			var badges = campoPerfil.getElementsByTagName('img')
			for (var i = 0; i < badges.length; i++) {
				var isBadge = badges[i]
				if (isBadge.src.startsWith('https://bancodeseries.com.br/images/badges/')) {
					totalBadges += 1
				} else if (isBadge.src.startsWith('http://bancodeseries.com.br/images/badges/')) {
					totalBadges += 1
				}
			}
			info.getElementsByTagName('tbody')[0].innerHTML += `</tr><tr><td><b>Badges:</b></td><td align="right"><span class="label label-success">${totalBadges}</span></td></tr>`
		}
		if (gradeTable && gradeTable[0]) {
			var h5 = gradeTable[0].getElementsByTagName('h5')
			if (h5) {
				for (var i = 0; i < h5.length; i++) {
					if ((h5[i].innerText).startsWith('Não estrearam')) {
						var noEstrearam = Number(((h5[i].innerText).replace('Não estrearam (', '')).replace(')', ''))
						var navBarGrade = gradeTable[0].getElementsByClassName('nav-tabs')
						if (navBarGrade) {
							var strong = navBarGrade[0].getElementsByTagName('strong')
							for (var i = 0; i < strong.length; i++) {
								if ((strong[i].innerText).startsWith('Ativas (')) {
									var seAtivas = Number(((strong[i].innerText).replace('Ativas (', '')).replace(')', ''))
									var novoTotalDeAtivas = (seAtivas - noEstrearam)
									strong[i].innerHTML = 'Ativas ('+ String(novoTotalDeAtivas) + ')'
								}
							}
						}
					}
				}
			}
		}
	}
)()
