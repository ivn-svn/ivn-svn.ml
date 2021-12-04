      function drawChart() {
				// var tofill = [0, 0, 0]
				for(var html = 0; html < 60; html++) {
				  setTimeout(function () {
                  return html
                  }, 300);
				}
                for(var css = 0; css < 60; css++) {
                    setTimeout(function () {
                    return css
                    }, 300);
                  }

				
        var data = google.visualization.arrayToDataTable([
          ['HTNL', 'CSS'],
          ['HTML',     html],
		  ['CSS',     css],
        ])}