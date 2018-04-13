async function NotificSeries() {
	Notification.requestPermission().then(status => {
		if (status == "granted") {
			$.get("http://bancodeseries.com.br/index.php?action=thisweek", function(data) {
				var doc = document.implementation.createHTMLDocument("");
				doc.open();
				doc.write(data);
				doc.close();
				var tableGrade = doc.getElementsByTagName("table")[1];
				if (tableGrade) {
					var serieHoje = tableGrade.getElementsByClassName("info");
					for (var i = 0; i < serieHoje.length; i++) {
						var serienName = (serieHoje[i].getElementsByTagName("td")[2]).getElementsByTagName("a")[0].innerText;
						var serieEpName = (serieHoje[i].getElementsByTagName("td")[2]).getElementsByTagName("i")[0].innerText;
						var imgSerie = $(serieHoje[i].getElementsByTagName("td")[1]).attr("background");
						var urlSerie = (serieHoje[i].getElementsByTagName("td")[2]).getElementsByTagName("a")[0].href;
						var notific = new Notification(
							serienName, {
								body: serieEpName,
								icon: imgSerie
							}
						);
						notific.onclick = function(e) {
							window.open(urlSerie);
						};
					}
				}
			});
		};
	});
}
