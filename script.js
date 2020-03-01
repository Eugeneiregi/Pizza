$("button#contact").click(function(event) {
    var namee = $("#namee").val();
    var email = $("#email").val();
    var message =$("#message").val();
    event.preventDefault();
    alert(namee + " we have received your message . Thank you for reaching out to us.");
  });


  function myFunction (size ,crust ,toppings){
        this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.price = 0;
}





$(document).ready(function(){
    $("button#checkout").click(function(event) {
        event.preventDefault();
        var size = $("#size").val();
        var crust = $("#crust").val();
        var toppings = $("#toppings").val();
        var name = $("#name").val();
        // var newPizzaOrder = new PlaceOrder (size ,crust ,toppings);
        // newPizzaOrder.cost();
        // totalCosts.push(newPizzaOrder.price);

        const orderReport = "<p>Name: $(size)</p>";
    
        document.getElementById("output").innerHTML(orderReport);
    });
})
