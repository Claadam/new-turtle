$("#polygon-button").click(function() { 
  var numberOfSides = $("#polygon").val()
  nSides(numberOfSides)
})

$("#star-button").click(function() { 
  var numberOfSides = $("#star").val()
  nPoints(numberOfSides)
})

function nPoints(n) {
  for (i=0; i<n; i++) {
    goForward(360/n)
    nDegreesLeft(720/n)
  }
}

function nSides(n) {
  nDegreesLeft(180)
  goForward(180/n)
  nDegreesLeft(180)
  for (i=0; i<n; i++) {
  goForward(360/n)
  nDegreesLeft(360/n)
  }
}

