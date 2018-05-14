function assiduidade(id) {
	$.get(`https://bancodeseries.com.br/AssidCalculator.php?user=${id}`, function(data) {
		var doc = document.implementation.createHTMLDocument('')
		doc.open()
		doc.write(data)
		doc.close()
		doc.getElementsByTagName('h1')[0].innerHTML = ''
		doc.getElementsByTagName('form')[0].innerHTML = ''
		var progress = Number(doc.getElementsByTagName('h2')[0].innerHTML.replace(/.*&gt;/i, ''))
		var nome = doc.getElementsByTagName('h2')[0].innerText.replace(/ -> .*/, '')
		doc.getElementsByTagName('h2')[0].innerHTML = ''
		var addHtml = `
		<center>
			</h1><font color="blue">${nome}</font></h1>
		</center>
		<center>
			<div class="progress progress-striped progress-success">
				<div class="bar" style="width: ${progress}%;">${progress}%</div>
			</div>
		</center>
		</br>
		<center>
			${doc.getElementsByTagName('body')[0].innerHTML}
		</center>
		`
		document.getElementById('dcenter').innerHTML = addHtml
	})
}
