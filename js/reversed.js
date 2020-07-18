$(document).ready(function () {
    console.log('Ready');
});

function prompt(params) {
    document.getElementById(params).style.display = 'initial';
    $('#prompt p').not('#'+params).hide();

    var user = 0;
    var bot = Math.floor(Math.random() * 3) + 1;

    var bot_select = "";
    switch (bot)
    {
        case 1: 
            bot_select = "prompt-bot-rock";
            break;
        case 2: bot_select = "prompt-bot-paper"; 
            break;
        case 3: bot_select = "prompt-bot-scissors";
            break;
        default: 
            break;
    }

    document.getElementById(bot_select).style.display = 'initial';
    $('#prompt-bot p').not('#'+bot_select).hide();

    if(params.endsWith('rock')) user = 1;
    else if(params.endsWith('paper')) user = 2;
    else if(params.endsWith('scissors')) user = 3;

    var result = "";
    if(verdict(user, bot) == -1) result = "user-lose";
    else if(verdict(user, bot) == 0) result = "user-tie";
    else if(verdict(user, bot) == 1) result = "user-win";

    document.getElementById(result).style.display = 'initial';
    $('#verdict p').not('#' + result).hide();
}

function verdict(user, bot)
{
    // user rock
    if(user == 1)
    {
        if(bot == 1) return 0;
        else if(bot == 2) return 1;
        else if(bot == 3) return -1;
    }
    // user paper
    else if(user == 2)
    {
        if(bot == 1) return -1;
        else if(bot == 2) return 0;
        else if(bot == 3) return 1;
    }
    // user scissors
    else if(user == 3)
    {
        if(bot == 1) return 1;
        else if(bot == 2) return -1;
        else if(bot == 3) return 0;
    }
}