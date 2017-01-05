/* global $, Stripe */

//Document ready.
$(document).on('turbolinks:load', function(){
  
  // Set variables for selected HTML elements
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe public key.
  Stripe.setPublishableKey( $('meta[="stripe-key]').attr('content') );
  
  //When user clicks form submit btn.
  submitBtn.click(function(event){
    
    //prevent default submission behavior.
    event.preventDefault();
    
    //collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    //send the card info to stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
    
  });
  
  //Stripe will return a card token.
  //Inject card token as hidden field into form.
  //Submit form to our Rails app
  
});