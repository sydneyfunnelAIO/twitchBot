var tmi = require('tmi.js')
var fs = require('fs')
var channe = fs.readFileSync('channels.json', 'utf8')
var channels = channe.split(/\r?\n/)
var x;

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

  client.on("chat", (channel, userstate, message, self) =>{
    if(self) return;
    var mes = message.split(" ")
    var command = fs.readFileSync(`./${channel}command.json`, 'utf8')
    var response = fs.readFileSync(`./${channel}response.json`, 'utf8')
    var res = response.split(/\r?\n/)
    var com = command.split(/\r?\n/)
     var comint = com.length
     var a = mes.slice(2,comint).join(" ");
    for (var index = 0; index < comint; index++) {
        var comm = com[index]
        var respon = res[index]
       
        if(mes[0] == comm){
        client.say(channel, "@"+userstate['username'] +" "+respon)
        }
        }
        if(userstate['mod'] == true && mes[0] == "!add" ){
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
    setInterval(bot1,1000*60*6)
    setInterval(bot2,1000*60*9)
    function bot1() {
        client.say(entry,"SydneyfunnelAIO tarafından üretildi! -> iletisim : sydneyfunnelallinone@gmail.com");
    }
    function bot2() {
        client.say(entry,"Aşağıdaki linklerden bize bağışta bulunabilirsiniz :) " +
            "https://www.bynogame.com/destekle/theokoles - https://www.oyunfor.com/twitch-donate/theokoles - https://streamelements.com/theokoles/tip + https://www.perdigital.com/yayinciya-destek/theokoles" +

            " ");
    }

});