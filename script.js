$("#polygon-button").click(function() { 
  var numberOfSides = $("#polygon").val()
  nSides(numberOfSides)
})

$("#star-button").click(function() { 
  var numberOfPoints = $("#star").val()
  nPoints(numberOfPoints)
})

function nPoints(n) {
  for (i=0; i<n; i++) {
    goForward(360/n)
    nDegreesLeft(720/n)
    goForward(360/n)
    nDegreesRight(360/n)
  }
}

function nSides(n) {
  for (i=0; i<n; i++) {
  goForward(720/n)
  nDegreesLeft(360/n)
  }
}

function weirdSquare {
 for (i=0; i<4; i++)
   goForward(90)
   nDegreesLeft(90)
  for (i=0; i<12; i++)
     goForward(90)
     nDegreesLeft(90+i*7.5)
}

weirdSquare()

