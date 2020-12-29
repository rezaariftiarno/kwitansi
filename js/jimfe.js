    var lMarginJIMFE=25; //left margin in mm
    var rMarginJIMFE=25; //right margin in mm
    var pdfInMMJIMFE=220;  // width of A4 in mm
	function JIMFE(){
		var docJIMFE = new jsPDF("landscape");
		var namaJIMFE = document.getElementById("namaJIMFE").value;
		var kotaJIMFE = document.getElementById("kotaJIMFE").value;
		var tanggalJIMFE = document.getElementById("tanggalJIMFE").value;
		var imgJIMFE = new Image()
		imgJIMFE.src = 'assets/img/JIMFE.jpg'
    	var linesJIMFE = 
    	docJIMFE.splitTextToSize(`
`, (pdfInMMJIMFE-lMarginJIMFE-rMarginJIMFE))
    	docJIMFE.setFontSize(11);
		docJIMFE.text(lMarginJIMFE,25,linesJIMFE);
		docJIMFE.addImage(imgJIMFE, 'JPEG', 10, 20, 280, 147);
		docJIMFE.autoTable({
		columnStyles: { 
		0: { halign: 'left', fillColor: false, textColor: [false], cellWidth: 42, minCellWidth: 30, fontSize: 20, fontStyle: 'bold' }, 
		1: { halign: 'left', fillColor: false, textColor: [false], cellWidth: 20 },
		2: { halign: 'left', fillColor: false, textColor: [false], fontSize: 18, fontStyle: 'bold' },
		},
		margin: { top: 62, right: 0, left: 24 },
  		body: [
    			['', '', `${namaJIMFE}`],
    			['', '', ``],
    			['', '', ``],
    			['', '', ``],
    			['', '', `                                                                  ${kotaJIMFE}, ${tanggalJIMFE}`],
  			  ],
		});
    	
// Save the PDF
	docJIMFE.save(`Kwitansi JIMFE ${namaJIMFE}.pdf`);
	};