    var lMarginJIAFE=25; //left margin in mm
    var rMarginJIAFE=25; //right margin in mm
    var pdfInMMJIAFE=220;  // width of A4 in mm
	function JIAFE(){
		var docJIAFE = new jsPDF("landscape");
		var namaJIAFE = document.getElementById("namaJIAFE").value;
		var kotaJIAFE = document.getElementById("kotaJIAFE").value;
		var tanggalJIAFE = document.getElementById("tanggalJIAFE").value;
		var imgJIAFE = new Image()
		imgJIAFE.src = 'assets/img/JIAFE.jpg'
    	var linesJIAFE = 
    	docJIAFE.splitTextToSize(`
`, (pdfInMMJIAFE-lMarginJIAFE-rMarginJIAFE))
    	docJIAFE.setFontSize(11);
		docJIAFE.text(lMarginJIAFE,25,linesJIAFE);
		docJIAFE.addImage(imgJIAFE, 'JPEG', 10, 20, 280, 147);
		docJIAFE.autoTable({
		columnStyles: { 
		0: { halign: 'left', fillColor: false, textColor: [false], cellWidth: 42, minCellWidth: 30, fontSize: 20, fontStyle: 'bold' }, 
		1: { halign: 'left', fillColor: false, textColor: [false], cellWidth: 20 },
		2: { halign: 'left', fillColor: false, textColor: [false], fontSize: 18, fontStyle: 'bold' },
		},
		margin: { top: 62, right: 0, left: 24 },
  		body: [
    			['', '', `${namaJIAFE}`],
    			['', '', ``],
    			['', '', ``],
    			['', '', ``],
    			['', '', `                                                                  ${kotaJIAFE}, ${tanggalJIAFE}`],
  			  ],
		});
    	
// Save the PDF
	docJIAFE.save(`Kwitansi JIAFE ${namaJIAFE}.pdf`);
	};