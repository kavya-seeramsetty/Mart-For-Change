//collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        
        var content = this.nextElementSibling;
        
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    
    if (hours <10 ){
        hours = "0" + hours
    }
    
    if (minutes <10 ){
        minutes = "0" + minutes
    }
    
    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage(){
  let firstMessage = "How's it going?";
  document.getElementById("botStartMessage").innerHTML = '<p class ="botText" style="font-size: 14px;"><span>' + firstMessage +'</span></p>';

  let time = getTime();
  
  $("#chat-timestamp").text(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

/*function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' +botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  
    
}*/

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' +botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // play notification sound
    var audio = new Audio('pop.mp3');
    audio.play();
}


function getResponse(){
    let userText = $("#textInput").val();
    
    if(userText ==""){
        userText = "Please enter your query";
    }
    
    let userHtml = '<p class="userText"><span>' +userText + '</span></p>';
    
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
    let time = getTime();
    $("#chat-timestamp").text(time);
    
    setTimeout(()=>{
        getHardResponse(userText);
    },1000);
}

function buttonSendText(sampleText){
    let userHtml = '<p class="userText"><span>' +sampleText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    
    
}

function sendButton(){
    getResponse();
}

function smileyButton(){
    buttonSendText("Smiley Clicked!!");
}

// press enter to send your message
$("#textInput").keypress(function(e){
    if(e.which == 13){
        getResponse();
    }
});