//wait for the DOM elements to load before executing
$(document).ready(function() {
  $('#submit-btn').click(function(event){
    //prevent the submit button from refreshing the page
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization
    
    // if the user inputs New York City / NYC / New York change the body class to 'nyc'
    
    // if the user inputs SF/San Francisco/Bay Area change the body class to 'sf'
    
    // if the user inputs Austin/ATX change the body class to 'austin'
    
    // if the user inputs Los Angeles/LA/LAX change the body class to 'la'
    
    // if the user inputs Sydney/SYD change the body class to 'sydney'
    
  });
});