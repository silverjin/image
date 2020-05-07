/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped'
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
});

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrict({
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    onmove: dragMoveListener
  });


  var random = Math.floor(Math.random() * jQuery('.draggable').length);
  jQuery('.draggable').hide().eq(random).show();


  angular.module("graph", []).controller("graphController", function ($scope){
  	console.log("angular connected");
  	$scope.color = "rgb(110, 196, 190)";
  	$scope.less = {
  		'opacity': 0.5,
  		'size': 20,
  		'thickness': 2
  	};

  	$scope.presets = [
  		{label:'Plaid',value:[0.5,58,50]},
  		{label:'Big & Light', value:[0.2,100, 1]},
  		{label:'Gingham', value:[0.3,100, 50]},
  		{label:'Lil Dots', value:[1,18, 16]},
  		{label:'Tile', value:[0.5,51, 50]},
  		{label:'Default', value:[0.5,20, 2]}
  	];

  	/* Watches for when a value changes for any of the inputs, when it does it refreshes the less variables*/
  	$scope.$watch("less", function(newValue, oldValue) {
  		less.modifyVars({'@opacity':newValue.opacity,'@grid-size':newValue.size + 'px','@grid-thickness':newValue.thickness + 'px'});
  		less.refreshStyles();
  }, true);

  	/* Sets less values when dropdown is changed */
  	$scope.setPreset = function(preset){
  		$scope.less.opacity = preset[0];
  		$scope.less.size = preset[1];
  		$scope.less.thickness = preset[2];
  	}
  });

  // get width & height of random pane
  var pane_width = $(".random-pane").width() - $(".draggable").width();
  var pane_height = $(".random-pane").height() - $(".draggable").height();

  // loop through all the items in the random-pane
  $(".random-pane").children().each( function(){

    // get a random x position
    var x = Math.round(Math.random() * pane_width);
    // get a random y position
    var y =  Math.round(Math.random() * pane_height);

    // change the position of the item
    $(this).css("top",y);
    $(this).css("left",x);

    // add hover functionality, to move item to the top on hover
    $(this).on("mouseover",function(){
      // this is a small hack, removing it and adding it again moves it to the top
      $(this).parent().append(this);
    });

  });

  
