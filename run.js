var tmi = require('tmi.js')
var fs = require('fs')
var channel = "theokoles"
async function readline(file)
{
    var fileStream = fs.createReadStream(file);


}
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

var client = new tmi.client(config)
client.connect();
client.on("connected",(address,port)=> {
client.say(channel, "Connected|Sydneybot " )
})
client.on("chat",(channel, userstate, message, self)=>{
    var command = fs.readFileSync('command.txt', 'utf8')
    var response = fs.readFileSync('response.txt', 'utf8')
    var res = response.split(/\r?\n/)
    var com = command.split(/\r?\n/)
     var comint = com.length
    var mes = message.split(" ")
    var a = mes.slice(2,comint)
    if(self) return;
    if(userstate['mod'] == true && mes[0] == "!add" ){
        fs.appendFile('command.txt', "\n"+mes[1], function (err) {
            if (err) {
                client.say(channel,  err)
            } else {
                client.say(channel,  mes[1] +" basariyla eklendi!")
            }
          })
          fs.appendFile('response.txt', "\n"+a, function (err) {
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
    fs.writeFile('command.txt', updatedcom, (err) => {
        if (err) throw err;
        client.say(channel,mes[1] + " Basariyla silindi")

    });
    fs.writeFile('response.txt', updatedres, (err) => {
        if (err) throw err;
        

    });


    }
    for (var index = 0; index < comint; index++) {
        var comm = com[index]
        var respon = res[index]
       
        if(mes[0] == comm){
        client.say(channel, respon)
        }
        }
})
setInterval(function(){
   client.say(channel,"SydneyfunnelAIO tarafından üretildi! -> iletisim : sydneyfunnelallinone@gmail.com" )
  }, 1000*60*5); 
  setInterval(function(){
    client.say(channel,"Abone olarak bize Destekte bulunabilir Ayrıca asagidaki linklerden bagista bulunabilirsiniz!" )
   }, 1000*60*7);     