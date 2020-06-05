Bot.on('message',(message) => {    //kick command
  if (!message.guild) return;
  if(message.author.bot) return;
  if(message.content.startsWith('.kick') && (message.member.roles.cache.has(Admin) || message.member.roles.cache.has(Moderator)) && (message.channel.id === MembersManagerChan)){
    const user = message.mentions.users.first();
    if(user){
      const member = message.guild.member(user);
      if(member){
        message.delete().then(member.kick()).catch(err => {
          console.log(err);
        })
        if(true){
          message.channel.send(`${user} has been sent to gulag`);
          return;
        }
      }
      else{
        message.reply(`im not able to kick him...`)
      }
    }
    else{
      message.reply(`the user maybe its not in the server...`)
    }
  }
  else if(message.content.startsWith('.kick') && message.channel.id !== MembersManagerChan){
    message.delete().then(message.reply(`this is not the right channel for that...`))
  }
  else if(message.content.startsWith('.kick') && !(message.member.roles.cache.has(Admin) || message.member.roles.cache.has(Moderator))){
    message.delete().then(message.channel.send(`you are not allowed to run this command`))
  }
})


Bot.on('message',(message) => {  //ban command
  if (!message.guild) return;
  if(message.author.bot) return;
  if(message.content.startsWith('.ban') && (message.member.roles.cache.has(Admin) || message.member.roles.cache.has(Moderator)) && (message.channel.id === MembersManagerChan)){
    const user = message.mentions.users.first();
    if(user){
      const member = message.guild.member(user);
      if(member){
        message.delete().then(member.ban()).catch(err => {
          console.log(err);
        })
        if(true){
          message.channel.send(`${user} banned with success`);
          return;
        }
      }
      else{
        message.reply(`im not able to ban him...`)
      }
    }
    else{
      message.reply(`the user is not in the server...`)
    }
  }
  else if(message.content.startsWith('.ban') && message.channel.id !== MembersManagerChan){
    message.delete().then(message.reply(`this is not the right channel for that...`))
  }
  else if(message.content.startsWith('.ban') && !(message.member.roles.cache.has(Admin) || message.member.roles.cache.has(Moderator))){
    message.delete().then(message.channel.send(`you are not allowed to run this command`))
  }
})
