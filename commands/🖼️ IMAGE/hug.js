const Discord = require("discord.js");
const superagent = require("snekfetch");

      module.exports = {
  name: "hug",
  aliases: [],
  execute: async(client, message, args, data, db) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to give hug!"
            }})
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant hug yourself!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/hug')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Just got a hug from " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " got a hug from " + message.author.toString()))
              .setFooter(`this is so cute`)
              .setURL(response.body.url);
<<<<<<< HEAD
          message.channel.send({embeds: [embed]});
=======
          message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }
      }
module.exports.help = {
    name: "hug",
    description: "Give hug to mentioned user",
    usage: "hug <user>",
    type: "Fun" 
}