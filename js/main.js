// Creating a new variable rellax that creates parallax scrollng effect when called
var rellax = new Rellax (".rellax")

// Using anime.js library to morph svg shapes on a hover. When mouse hovers over the initial svg, it morphs into another svg. When mouse leaves the area of the svg, the shape morphs back to its initial shape
// Created a mousein, mouseout function for each of the three projects

jQuery(document).ready(function(){
  $( ".card-graphics1" ).mouseover(function() {
	var morphing = anime({
		targets:".morph1",
		d: [
			{value:"M1228.82,444.51C1251.59,680.92,797.79,1096,424.05,927,104.58,782.46,28.15,294.6,183.86,122.2,404.8-122.44,1200.39,149.41,1228.82,444.51Z"}
		],
		easing:"easeInOutExpo",
		duration: 800,
		loop: false
		});
	});
  $( ".card-graphics1" ).mouseout(function() {
    var morphing = anime({
      targets: ".morph1",
      d: [
        { value: "M1171.33,144.78C1283.09,300.94,1064,868.36,639.61,885.9,355.85,897.63,71.51,659.73,91.47,483.71,124.87,189.21,1024.56-60.3,1171.33,144.78Z" }
      ],
      easing: "easeInOutExpo",
      duration: 800,
      loop: false
    });
  });

  $( ".card-graphics2" ).mouseover(function() {
	var morphing = anime({
		targets:".morph2",
		d: [
			{value:"M849,573c-183.47,125-697.87-233.46-659-359C226.51,96.09,791.5,53.31,902,295,942.6,383.8,926.15,520.41,849,573Z"}
		],
		easing:"easeInOutExpo",
		duration: 800,
		loop: false
		});
	});
  $( ".card-graphics2" ).mouseout(function() {
    var morphing = anime({
      targets: ".morph2",
      d: [
        { value: "M1032,466c-61.45,177.93-800.39,171.22-857-5C139.59,350.78,347.14,99.47,620,110,877.22,119.93,1069.38,357.76,1032,466Z" }
      ],
      easing: "easeInOutExpo",
      duration: 800,
      loop: false
    });
  });

    $( ".card-graphics3" ).mouseover(function() {
	var morphing = anime({
		targets:".morph3",
		d: [
			{value:"M1054.49,301c36.69,116.52-316.87,455.19-588.24,365C148.66,560.5,374.66,40.37,634.2,165.23,876.19,281.64,1032,229.71,1054.49,301Z"}
		],
		easing:"easeInOutExpo",
		duration: 800,
		loop: false
		});
	});
  $( ".card-graphics3" ).mouseout(function() {
    var morphing = anime({
      targets: ".morph3",
      d: [
        { value: "M959,567c-141.35,178.76-689.68,5.7-697-131C255,305.53,733.16,65.66,918,241,1000.68,319.43,1026,482.23,959,567Z" }
      ],
      easing: "easeInOutExpo",
      duration: 800,
      loop: false
    });
  });

    $( ".card-graphics4" ).mouseover(function() {
  var morphing = anime({
    targets:".morph4",
    d: [
      {value: "M1241,200c54,123.53-69.52,313.49-209,403C715.5,806.11,178.17,580.9,166,404,156.37,264,473.43,121.34,709,85,745.19,79.42,1161.92,19.07,1241,200Z"}
    ],
    easing:"easeInOutExpo",
    duration: 800,
    loop: false
    });
  });
  $( ".card-graphics4" ).mouseout(function() {
    var morphing = anime({
      targets: ".morph4",
      d: [
        { value: "M1183,373c15.49,130-118.06,269.28-251,320C580.19,827.23,74,401.47,121,218,155,85.23,486.37,49.1,709,85,752.07,92,1157.79,161.6,1183,373Z" }
      ],
      easing: "easeInOutExpo",
      duration: 800,
      loop: false
    });
  });


  });

