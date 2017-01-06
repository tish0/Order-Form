/* Purpose:		Template.

 * Author:		Tihomir Penev
 */
var w1;
var w2;
var w3;
var w1n;
var w2n;
var w3n;
var sts;
var ste;
var sto;
var z = true;

//function to replace the typing of the getElementById
function $(id) {
    return document.getElementById(id);
}//end function $

function validateForm() {
    z = true;
    var myArray = ["firstName", "lastName", "address", "city", "postalCode" ];
    var x = "";
    var y = "";
    var i = 0;
    
    w1 = $("widget1qty").value;
    w2 = $("widget2qty").value;
    w3 = $("widget3qty").value;

    for (i = 0; i < myArray.length; i++) {
        x = $(myArray[i]).value;
        if (x==null || x=="") {
            y += $(myArray[i]).name + " must be filled out<br>";
            z = false;
        }
    }//end array for

    if ($("postalCode").value.length < 6) {
		
        y += "The postal code length needs to be 6 characters<br>";
        z = false;
		//form.firstName.style.backgroundColor = "yellow";
    }//end "postalCode" length if
    
    if ($("province").value == "Select a province" || $("province").value == "" || $("province").value == null) {
        y += "You must select a province from the drop down<br>";
        z = false;
    }//end "province" if
        
    if (w1 < 0 || w1 == null || w1 == "" ||
              w2 < 0 || w2 == null || w2 == "" ||
              w3 < 0 || w3 == null || w3 == "") {
        y += "Quantity must be 0 or greater in all Widget quantity fields<br>";
        z = false;
    }//end widget if

    if (w1 < 1 && w2 < 1 && w3 < 1) {
        y += "A quantity of widgets must be ordered to submit this form<br>";
        z = false;
    }//end widget ordered if
    
    sts = $("shippingTypeStandard").checked;
    ste = $("shippingTypeExpress").checked;
    sto = $("shippingTypeOvernight").checked;
    
    if (sts == false &&
            ste == false &&
            sto == false) {
        y += "A shipping type must be checked<br>";
        z = false;
    }//end shipping if
    
    if (z == true) {
        throwAlert();
    }
    
    if (z == true) {
        $("errorOutput").setAttribute("hidden");
        return true;
    } else if (z == false) {
        $("errorOutput").removeAttribute("hidden");
        $("errorOutputPara").innerHTML = y;
        return false;
    }
}//end function validateForm

function onClickReset() {
    $("errorOutput").setAttribute("hidden","true");
}

function throwAlert() { 
    var m = "";
    w1 = $("widget1qty").value;
    w2 = $("widget2qty").value;
    w3 = $("widget3qty").value;
    var total = 0.0;
    var s = 0.0;
    if (sts == true) {
        s = 5.00;
        total += 5.00;
    } else if (ste == true) {
        s = 10.00;
        total += 10.00;
    } else if (sto == true) {
        s = 20.00;
        total += 20.00;
    }//end shipping if

    if (w1 > 0) {
        total += w1 * 5.00;
        m += "Total of " + w1 + " Widget #1 ordered\n";
    }
    
    if (w2 > 0) {
        total += w2 * 15.00;
        m += "Total of " + w2 + " Widget #2 ordered\n";
    }
    
    if (w3 > 0) {
        total += w3 * 25.00;
        m += "Total of " + w3 + " Widget #3 ordered\n";
    }
    
    m += "Total cost of shipping will be " + s + ".00\n";
    m += "The total order cost is " + total + ".00";

    alert(m);
}