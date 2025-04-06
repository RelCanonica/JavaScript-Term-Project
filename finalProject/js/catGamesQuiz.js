$('.slider').each(function() {             
    var $this   = $(this);                 
    var $group  = $this.find('.slide-group'); 
    var $slides = $this.find('.slide');      
    var buttonArray  = [];                   
    var currentIndex = 0;                   
  
    function move(newIndex) {         
      var animateLeft, slideLeft;      
  
      // Prevent moving if the group is already animated or the index is the same
      if ($group.is(':animated') || currentIndex === newIndex) {  
        return;
      }
  
      // Update the active class on buttons
      buttonArray[currentIndex].removeClass('active'); 
      buttonArray[newIndex].addClass('active');      
  
      if (newIndex > currentIndex) {   
        slideLeft = '100%';            
        animateLeft = '-100%';         
      } else {                        
        slideLeft = '-100%';          
        animateLeft = '100%';          
      }
      
      // Set the new slide position and animate the transition
      $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
  
      $group.animate( {left: animateLeft}, function() {    
        $slides.eq(currentIndex).css( {display: 'none'} );       
        $slides.eq(newIndex).css( {left: 0} ); 
        $group.css( {left: 0} );              
        currentIndex = newIndex;               
      });
    }

    // Create navigation buttons for each slide
    $.each($slides, function(index) {
      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {   
        $button.addClass('active');    
      }
      $button.on('click', function() { 
        move(index);  // Move to the clicked slide index
      }).appendTo('.slide-buttons');   
      buttonArray.push($button);     
    });

    // No automatic advance, so remove the advance() call here
});