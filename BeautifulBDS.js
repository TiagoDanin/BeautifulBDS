(function() {
	var themeDark = document.cookie.includes("ThemeDark");
	var content = document.getElementsByClassName("container-fluid")[0];
	var accordionHeading = document.getElementsByClassName("accordion-heading");
	if (themeDark && accordionHeading) {
		for (var i = 0; i < accordionHeading.length; i++) {
			accordionHeading[i].style = "background-color: #d2d2d2;";
		}
	}
	var accordionBody = document.getElementsByClassName("accordion-body");
	if (themeDark && accordionBody) {
		for (var i = 0; i < accordionBody.length; i++) {
			accordionBody[i].style = "background-color: #333;";
		}
	}
	document.addEventListener('keydown', function(e) {
		if (e.ctrlKey && e.keyCode == 72) {
			// Ctrl + h
			NotificSeries();
		} else if (e.ctrlKey && e.keyCode == 78) {
			// Ctrl + n
			if (themeDark) { // IF ON -> OFF
				document.cookie = "ThemeDark=true; expires=Thu, 01 Jan 1500 00:00:01 GMT; domain=bancodeseries.com.br; path=/;";
				window.location.reload();
			} else { //IF OFF -> ON
				document.cookie = "ThemeDark=true; expires=Thu, 01 Jan 2500 00:00:01 GMT; domain=bancodeseries.com.br; path=/;";
				window.location.reload();
			}
		} else if (content) {
			var serieNaGrade = false;
			if (content.getElementsByClassName("span2")) {
				if (content.getElementsByClassName("span2")[0]) {
					var spanTwo = content.getElementsByClassName("span2")[0];
					if (spanTwo.getElementsByClassName("btn").length == 5) {
						serieNaGrade = true;
					}
					if (spanTwo.getElementsByClassName("btn").length == 5 || spanTwo.getElementsByClassName("btn").length == 4) {
						if (e.ctrlKey && e.keyCode == 71) {
							//ctrl + g
							spanTwo.getElementsByClassName('btn')[0].click();
						} else if (e.ctrlKey && e.keyCode == 80) {
							//ctrl + p
							if (serieNaGrade) {
								spanTwo.getElementsByClassName('btn')[2].click();
							} else {
								spanTwo.getElementsByClassName('btn')[1].click();
							}
						} else if (e.ctrlKey && e.keyCode == 77) {
							//ctrl + m
							if (serieNaGrade) {
								spanTwo.getElementsByClassName('btn')[3].click();
							} else {
								spanTwo.getElementsByClassName('btn')[2].click();
							}
						}
					}
				}
			}
		}
	});
	var nav = document.getElementsByClassName("nav")[0];
	var breadcrumb = document.getElementsByClassName("breadcrumb")[0];
	for (var i = 0; i < 2; i++) {
		var grupoMenu = document.createElement("li");
		var grupoUrl = document.createElement("a");
		var grupoImg = document.createElement("img");
		grupoUrl.href = breadcrumb.getElementsByTagName("a")[i].href;
		//grupoUrl.textContent = ((breadcrumb.getElementsByTagName("small")[i]).getElementsByTagName("font")[0]).textContent;
		grupoImg.src = "images/groups/" + (breadcrumb.getElementsByTagName("a")[i].href).replace("http://bancodeseries.com.br/index.php?action=group&gid=", "") + ".jpg";
		grupoImg.width = "20";
		grupoUrl.appendChild(grupoImg);
		grupoMenu.appendChild(grupoUrl);
		nav.appendChild(grupoMenu);
	}
	var url = window.location.href;
	var idGrupo = url.replace("http://bancodeseries.com.br/index.php?action=group&gid=", "");
	if (idGrupo.length == 1) {
		if (content) {
			var spanTwo = content.getElementsByClassName("span2")[0];
			if (spanTwo) {
				if (idGrupo == "5") { //Legends Of BDS
					var adminGrupo = `Admin do grupo</b>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000001012"><font color="green">Grazi Azevedo</font></a></small><hr>
					</strong><b>Meus Grupos</b>`;
					spanTwo.innerHTML = (spanTwo.innerHTML).replace("Meus Grupos", adminGrupo);
				} else if (idGrupo == "4") { //House of BDS
					var adminGrupo = `Admins do grupo</b>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000038754"><font color="green">Jefferson Fernandes</font></a></small>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000123508"><font color="green">Manoel Barreto</font></a></small>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000050518"><font color="green">Juliana</font></a></small><hr>
					</strong><b>Meus Grupos</b>`;
					spanTwo.innerHTML = (spanTwo.innerHTML).replace("Meus Grupos", adminGrupo);
				}
			}
		}
	}
	var notificCheckDay = document.cookie.includes("notificCheckDay");
	if (!notificCheckDay) { // Check do dia
		var DateCookie = new Date();
		DateCookie.setDate(DateCookie.getDate() + 1); // +1 Dia
		DateCookie.setHours(0);
		DateCookie.setMinutes(0);
		document.cookie = "notificCheckDay=true; expires=" + DateCookie.toGMTString() + "; domain=bancodeseries.com.br; path=/;";
		NotificSeries();
	}

	var tableChannelTop = `<h3>Top Canal</h3>
		<table class="table table-condensed table-bordered">
			<tbody>
				<tr>
					<th>Canal</th><th>Séries</th>
				</tr>
	`
	var channelTop = []
	var containerTop = document.getElementsByClassName('container-fluid')
	if (containerTop) {
		var topTable = containerTop[0].getElementsByClassName("table-bordered")
		if (topTable && topTable[1]) {
			var subTopTable = topTable[1].getElementsByTagName('tr')
			if (subTopTable) {
				for (var i = 0; i < subTopTable.length; i++) {
					if (i != 0) {
						if (channelTop[subTopTable[i].getElementsByTagName('td')[2].innerText]) {
							channelTop[subTopTable[i].getElementsByTagName('td')[2].innerText] += 1
						} else {
							channelTop[subTopTable[i].getElementsByTagName('td')[2].innerText] = 1
						}
					}
				}
				for(var index in channelTop) {
					totalChannel = channelTop[index]
					tableChannelTop += "<tr><td>" + String(index) + "</td><td>" + String(totalChannel) + "</td></tr>"
				}
				tableChannelTop += `		</tbody>
					</table>
				`
				if (containerTop[0].getElementsByClassName('span2') && containerTop[0].getElementsByClassName('span2')[0]) {
					containerTop[0].getElementsByClassName('span2')[0].innerHTML += tableChannelTop
				}
			}
		}
	}

/* SOON var h5 = document.getElementsByTagName('h5')
for (var i = 0; i < h5.length; i++) {
	if ((h5[i].innerText).startsWith('Não estrearam')) {
		var noEstrearam = Number(((h5[i].innerText).replace('Não estrearam (', '')).replace(')', ''))
		var strong = document.getElementsByTagName('strong')
		for (var i = 0; i < strong.length; i++) {
			if ((strong[i].innerText).startsWith('Ativas (')) {
				var seAtivas = Number(((strong[i].innerText).replace('Ativas (', '')).replace(')', ''))
				strong[i].innerHTML = '<strong>Ativas (' + String(Number(seAtivas - noEstrearam)) + ')</strong>'
			}
		}
	}
}*/

})();
