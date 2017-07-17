(function() {
	var divFriends = document.getElementById("divFriends");
	if (divFriends) {
		(divFriends.getElementsByTagName("button")[0]).click()
		$("#showfriends").click(function() {
			var urlsFriends = divFriends.getElementsByTagName("a");
			if (urlsFriends) {
				var htmlFriends = "<div id=\"attFriends\" class=\"pre-scrollable5\"><hr><b>Últimas Atualizações de Amigos</b><br><br><div id=\"attFriends\" class=\"re-scrollable5 pre-scrollable3\"></div></div>";
				divFriends.innerHTML = divFriends.innerHTML + htmlFriends;
				var divAttFriends = divFriends.getElementsByClassName("re-scrollable5")[0];
				for (var i = 0; i < (urlsFriends.length - 3); i++) {
					var urlFri = urlsFriends[i].href;
					$.get(urlFri, function(data) {
						var doc = document.implementation.createHTMLDocument("");
						doc.open();
						doc.write(data);
						doc.close();
						var urlImg = doc.getElementsByClassName("span2")[1].getElementsByTagName("img")[0].src;
						var friendsId = urlImg.replace("http://bancodeseries.com.br/images/users/", "")
						var tFriend = doc.getElementsByTagName("tbody")[2].getElementsByClassName("pre-scrollable5")[0];
						var list = tFriend.getElementsByTagName("strong");
						for (var i = 0; i < (list.length - 1); i++) {
							if (list[i].innerText.slice(0, 5) == moment().format("DD/MM")) {
								var att = document.createElement("div")
								var img = "<img src=\"http://bancodeseries.com.br/images/users/25x25/" + friendsId + "\" width=\"13px\" height=\"13px\">"
								att.innerHTML = "<small><strong>" + img + list[i].innerHTML + "</small></strong>";
								divAttFriends.appendChild(att);
							}
						}
					});
				}
			}
		});
	}
})();
