$("#polygon-button").click(function() { 
  var numberOfSides = $("#polygon").val()
  nSides(numberOfSides)
})

$("#star-button").click(function() { 
  var numberOfSides = $("#star").val()
  nPoints(numberOfSides)
})



function nSides(n) {
  for (i=0; i<n; i++) {
  goForward(360/n)
  nDegreesLeft(360/n)
  }
}

