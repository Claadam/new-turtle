$("#polygon-button").click(function() { 
  var numberOfSides = $("#polygon").val()
  nSides(numberOfSides)
})

$("#star-button").click(function() { 
  var numberOfPoints = $("#star").val()
  nPoints(numberOfPoints)
})

$("#ring-button").click(function() { 
  var typeOfRing = $("#ring").val()
  drawRing(typeOfRing)
})

$("#star-ring-button").click(function() { 
  var typeOfStarRing = $("#star-ring").val()
  nStarRing(typeOfStarRing)
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

function drawRing(n) {
  for (i=0; i<n; i++) {
    goForward(360/n)
    nDegreesLeft(360/n)
  }
  for (j=0; j<360/n; j++){
    goForward(360/n)
    nDegreesLeft((360/n)+1)
  }
}

function nStarRing(n) {
  for (j=0; j<(360/n)-1; j++){
    goForward(180/n)
    nDegreesLeft((720/n)+1)
    goForward(360/n)
    nDegreesRight((360/n))
  }
  goForward(180/n)
  nDegreesLeft((720/n)+1)
}

// for (i=0; i<4; i++) {
//   goForward(90)
//   nDegreesLeft(90)}
//
//for (i=0; i<3; i++) {
//  goForward(60)
//  nDegreesLeft(120)}
//
//
////for (j=0; j<90; j++){
////  goForward(90)
////  nDegreesLeft(90+1)
////}
//  
//for (j=0; j<120; j++){
//  goForward(60)
//  nDegreesLeft(120+1)
//}


