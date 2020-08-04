
var htmlinput = document.getElementById("htmlinput")
var output = document.getElementById("output");
htmlinput.value = "<h1> Welcome to Live HTML Editor</h1>\
\n<h3>The code you write is displayed in real time</h3>\
\n<p>This editor is open-source. Code is \n<a href=\"https://github.com/SwarajEPICoder/LiveHTMLEditor\" target=\"_blank\">here</a>.\
 \nContributions are welcome!<br>Feel free to delete all this text</p>"
output.innerHTML = htmlinput.value;
htmlinput.addEventListener("input", function(e){
    output.innerHTML = htmlinput.value;
    if (htmlinput.value == ''){
        output.innerHTML = "<p style='color: rgb(100,100,100);'>Your output appears here</p>"
    }
    
})
