$("#polygon-button").click(function() { 
  $("#polygon") = numberOfSides
  nSides(numberOfSides)
})


function nSides(n) {
  for (i=0; i<n; i++) {
  goForward(360/n)
  nDegreesLeft(360/n)
  }
}

