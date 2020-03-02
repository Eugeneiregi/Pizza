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
        var quantity = $("#number").val();
        var name = $("#name").val();

        //cost per category
        let pizzaName = ["Chicken","Vegetables","Meat"];
        let pizzaSize = ["Small","Medium","Large"];
        let pizzaTopping = ["Pepperoni","Extra cheese","Green peppers"];
        let pizzaCrust = ["Thin Crust","Thick Crust","Cheese Filled Crust","Stuffed Crust"];

        let prizeArr = [100,150,200,250,300,350];
        var total = 0;

        var nametotal = 0;
        var sizetotal = 0;
        var toppingtotal = 0;
        var crusttotal = 0;


        //total from name
        if(name == pizzaName[0]){
          nametotal += 200;
        }
        else if(name == pizzaName[1]){
          nametotal += 100
        }
        else if(name == pizzaName[2]){
          nametotal += 300;
        }

        //total from size
        if(size == pizzaSize[0]){
          sizetotal = 100;
        }
        else if(size == pizzaSize[1]){
            sizetotal = 150;
        }
        else if(size == pizzaSize[2]){
            sizetotal = 200;
        }

        //total from toppings
        if(toppings == pizzaTopping[0]){
            toppingtotal += 150;
        }
        else if(toppings == pizzaTopping[1]){
            toppingtotal += 200;
        }
        else if(toppings == pizzaTopping[2]){
            toppingtotal += 250;
        }

        //total from crust
        if(crust == pizzaCrust[0]){
            crusttotal += 200;
        }
        else if(crust == pizzaCrust[1]){
            crusttotal += 200;
        }
        else if(crust == pizzaCrust[2]){
            crusttotal += 250;
        }
        else if(crust == pizzaCrust[3]){
            crusttotal += 300;
        }

        //total depending on the quantity
        total = (nametotal + sizetotal + toppingtotal + crusttotal ) * quantity; 

        const delivertyCost = 200;
        alert("Your cost order is" + delivertyCost)
        const orderReport = "Name: "+name + "<br>" + "<br>"  + "Size: " + size + "<br>" + "<br>" + "Quantity: "  + quantity + "<br>" + "<br>" + "Crusts: "  + crust + "<br>" + "<br>" + "Toppings: " + toppings + "<br>" + "<br>" + "Delivery cost:" + delivertyCost + "<br>" + "<br>" + "Total: " + total;
    
        document.getElementById("output").innerHTML=(orderReport)});
})
