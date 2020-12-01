var tmi = require('tmi.js')
var fs = require('fs')
var channe = fs.readFileSync('channels.json', 'utf8')
var channels = channe.split(/\r?\n/)
var axios = require('axios')
var x;
require('dotenv').config()

for( x = 0; x < channels.length; x++){
    var channel = channels[x];
var config = {
    options: {
        debug: true
        
    },
    connection:{
        cluster: "aws",
        reconnect: true
    },
    identity:{
        username: "sydneyfunnelaio",
        password: "4ks53dy1m249nd5s3qw5dx7k36ao1m"
    },

    channels: [channel]
}
try{
    if (fs.existsSync(`./#${channel}command.json`)) {
        
      }
      else{
fs.writeFile(`#${channel}command.json`, '!test', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}
}
catch(err) {
    console.error(err)
  }
  try{
    if (fs.existsSync(`./#${channel}response.json`)) {
        
      }
      else{
fs.writeFile(`#${channel}response.json`, 'This is a test Text', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}
}
catch(err) {
    console.error(err)
  }
  var client = new tmi.client(config)
  client.connect()
  client.on("resub", (channel, username, months, message, userstate, methods) => {
    client.say(channel, '@'+username+' abone oldugun icin tesekkurler <3' )
});
  client.on("subscription", (channel, username, method, message, userstate) => {
    client.say(channel, '@'+username+ ' abone oldugun icin tesekkurler <3' )
});

  client.on("chat", (channel, userstate, message, self) =>{
    if(self) return;
    var mes = message.split(" ")
    var command = fs.readFileSync(`./${channel}command.json`, 'utf8')
    var response = fs.readFileSync(`./${channel}response.json`, 'utf8')
    var res = response.split(/\r?\n/)
    var com = command.split(/\r?\n/)
     var comint = com.length
     var a = mes.slice(2,1000000).join(" ");
    for (var index = 0; index < comint; index++) {
        var comm = com[index]
        var respon = res[index]
       
        if(mes[0] == comm){
        client.say(channel, "@"+userstate['username'] +" "+respon)
        }
        }
        if(mes[0]=='!music'){
           var chan = channel.split('#')[1]
           console.log(chan)
            axios.get(`https://spoti-bot-server.herokuapp.com/api/v1/spotify/${chan}`).then((resp)=> {
                let vals = []
                console.log(resp.data.item)
                for(var item of resp.data.item.artists){
                    vals.push(item.name);
                }
                let music = resp.data.item.name
                let singer = vals.join(' & ');
                client.say(channel, '@'+ userstate['username'] + ' '+ singer + ' - ' + music)
            }).catch(err=> console.log(err))
           
        }
        if(mes[0]=='!rank'){
            var chan = channel.split('#')[1]
            console.log(chan)
           try {
            axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Ward%20Riverr?api_key=${process.env.RIOT_API_KEY}`).then((response)=> {
                axios.get(`https://euw1.api.riotgames.com/tft/league/v1/entries/by-summoner/${response.data.id}?api_key=${process.env.RIOT_API_KEY}`).then((resp)=> {
                    client.say(channel, "@" + userstate['username'] + " " + resp.data[0].tier +" "+ resp.data[0].rank + ` ${resp.data[0].leaguePoints} LP`);
                }).catch(err=> console.log(err))
        })
           } catch (error) {
               console.log(error)
           }
            
         }
        if(userstate['mod']== true &&mes[0] == "!add" ){
            fs.appendFile(`${channel}command.json`, "\n"+mes[1], function (err) {
                if (err) {
                    client.say(channel,  err)
                } else {
                    client.say(channel,  mes[1] +" basariyla eklendi!")
                }
              })
              fs.appendFile(`${channel}response.json`, "\n"+ a, function (err) {
                if (err) {
                    client.say(channel,  err)
                } else {
                  // done
                }
              })
        
            
        }
        if(userstate['mod']== true &&mes[0]== "!del" ){
            
        let lastIndex = -1;  
    
        for (let index=0; index<com.length; index++) {
            if (com[index] == mes[1] ) { 
                lastIndex = index; 
                break; 
            }
        }
        com.splice(lastIndex, 1);
        res.splice(lastIndex, 1);
        const updatedcom = com.join('\n');
        const updatedres = res.join('\n');
        fs.writeFile(`${channel}command.json`, updatedcom, (err) => {
            if (err) throw err;
            client.say(channel,mes[1] + " Basariyla silindi")
    
        });
        fs.writeFile(`${channel}response.json`, updatedres, (err) => {
            if (err) throw err;
            
    
        });
    
    
        }

  } )



}


channels.forEach(function(entry) {
    setInterval(bot1,1000*60*15)
    setInterval(bot2,1000*60*11)
    setInterval(bot3,1000*60*6)
    function bot1() {
        client.say(entry,"SydneyfunnelAIO tarafından üretildi! -> website: https://sydneyfunnel.herokuapp.com/ iletisim : sydneyfunnelallinone@gmail.com");
    }
    function bot2() {
        client.say(entry,"Aşağıdaki linklerden bize bağışta bulunabilirsiniz :) " +
            "https://www.bynogame.com/destekle/theokoles - https://www.oyunfor.com/twitch-donate/theokoles" +

            " ");
    }
    function bot3() {
        client.say(entry,"Gamerlara özel tasarım ürünleri www.gamerwo.com , https://www.instagram.com/gamerwo_/ ");
    }

});