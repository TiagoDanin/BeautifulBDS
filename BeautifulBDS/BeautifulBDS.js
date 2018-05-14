(async function() {
	var themeDark = document.cookie.includes("ThemeDark")
	var content = document.getElementsByClassName("container-fluid")[0];
	var accordionHeading = document.getElementsByClassName("accordion-heading")
	if (themeDark && accordionHeading) {
		for (var i = 0; i < accordionHeading.length; i++) {
			accordionHeading[i].style = "background-color: #d2d2d2;";
		}
	}
	var accordionBody = document.getElementsByClassName("accordion-body")
	if (themeDark && accordionBody) {
		for (var i = 0; i < accordionBody.length; i++) {
			accordionBody[i].style = "background-color: #333;";
		}
	}
	document.addEventListener('keydown', function(e) {
		if (e.ctrlKey && e.keyCode == 88) {
			// Ctrl + x
			NotificSeries()
		} else if (e.ctrlKey && e.keyCode == 90) {
			// Ctrl + z
			if (themeDark) { // IF ON -> OFF
				document.cookie = "ThemeDark=true; expires=Thu, 01 Jan 1500 00:00:01 GMT; domain=bancodeseries.com.br; path=/;";
				window.location.reload()
			} else { //IF OFF -> ON
				document.cookie = "ThemeDark=true; expires=Thu, 01 Jan 2500 00:00:01 GMT; domain=bancodeseries.com.br; path=/;";
				window.location.reload()
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
						if (e.shiftKey && e.keyCode == 71) {
							//Shift + g
							spanTwo.getElementsByClassName('btn')[0].click()
						} else if (e.shiftKey && e.keyCode == 80) {
							//Shift + p
							if (serieNaGrade) {
								spanTwo.getElementsByClassName('btn')[2].click()
							} else {
								spanTwo.getElementsByClassName('btn')[1].click()
							}
						} else if (e.shiftKey && e.keyCode == 77) {
							//Shift + m
							if (serieNaGrade) {
								spanTwo.getElementsByClassName('btn')[3].click()
							} else {
								spanTwo.getElementsByClassName('btn')[2].click()
							}
						}
					}
				}
			}
		}
	})
	var nav = document.getElementsByClassName("nav")[0];
	var breadcrumb = document.getElementsByClassName("breadcrumb")[0];
	var totalNaBarraGp = 5
	for (var i = 0; i < 5; i++) {
		var grupoMenu = document.createElement("li")
		var grupoUrl = document.createElement("a")
		var grupoImg = document.createElement("img")
		var grupoSelect = breadcrumb.getElementsByTagName("a")[i]
		grupoUrl.href = grupoSelect.href
		var gpColor = grupoSelect.getElementsByTagName('font')[0]
		//grupoUrl.textContent = ((breadcrumb.getElementsByTagName("small")[i]).getElementsByTagName("font")[0]).textContent;
		if (gpColor && gpColor.color == 'green') {
			grupoImg.src = "images/groups/" + (breadcrumb.getElementsByTagName("a")[i].href).replace("https://bancodeseries.com.br/index.php?action=group&gid=", "") + ".jpg";
			grupoImg.width = "20";
			grupoUrl.appendChild(grupoImg)
			grupoMenu.appendChild(grupoUrl)
			nav.appendChild(grupoMenu)
		}
	}
	var url = window.location.href;
	var idGrupo = url.replace(/http[s]*:\/\//i, '').replace("bancodeseries.com.br/index.php?action=group&gid=", "")
	if (idGrupo.length == 1) {
		if (content) {
			var spanTwo = content.getElementsByClassName("span2")[0];
			if (spanTwo) {
				if (idGrupo == "5") { //Legends Of BDS
					var adminGrupo = `Admin do grupo</b>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000001012"><font color="green">Grazi Azevedo</font></a></small><hr>
					</strong><b>Meus Grupos</b>`;
					spanTwo.innerHTML = (spanTwo.innerHTML).replace("Meus Grupos", adminGrupo)
				} else if (idGrupo == "4") { //House of BDS
					var adminGrupo = `Admins do grupo</b>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000038754"><font color="green">Jefferson Fernandes</font></a></small>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000123508"><font color="green">Manoel Barreto</font></a></small>
					<br><strong><small><a href="index.php?action=userPage&amp;uid=1000050518"><font color="green">Juliana</font></a></small><hr>
					</strong><b>Meus Grupos</b>`;
					spanTwo.innerHTML = (spanTwo.innerHTML).replace("Meus Grupos", adminGrupo)
				}
			}
		}
	}
	var notificCheckDay = document.cookie.includes("notificCheckDay")
	if (!notificCheckDay) { // Check do dia
		var DateCookie = new Date()
		DateCookie.setDate(DateCookie.getDate() + 1) // +1 Dia
		DateCookie.setHours(0)
		DateCookie.setMinutes(0)
		document.cookie = "notificCheckDay=true; expires=" + DateCookie.toGMTString() + "; domain=bancodeseries.com.br; path=/;";
		NotificSeries()
	}
})()
