var mag = document.querySelector("#message")
var send = document.querySelector("#send")
var ans = document.querySelector("#answer")


send.addEventListener("click", function () {
    let c = mag.value.toLowerCase();
    let reply = "";
    if (c.match("hello")) {
        reply = "Hello There!"
    } else if (c.match("how are you")) {
        reply = "I'am Fine thank you, and you?"
    } else if (c.match("how many girl friends")) {
        reply = "I have a unlimited girl firnds"
    } else if (c.match("where are you from?")) {
        reply = "I'am From Bangladesh"
    } else if (c.match("ki koro")) {
        reply = "Bose asi,tumi?"
    } else {
        reply = "bhulbhal kotha bolo na?"
    }



    ans.innerHTML = reply;

    var shad = new SpeechSynthesisUtterance(reply);

    window.speechSynthesis.speak(shad);

});

