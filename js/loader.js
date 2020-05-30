		var pager

		function loader() {
		    pager = setTimeout(showPage, 1000);
		}

		function showPage() {
		    document.getElementById("loader").style.display = "none";
		    document.getElementById("content").style.display = "block";
		}