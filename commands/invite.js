module.exports = {
	name: ['invite'],
	execute(message, args, lang) {
		let { MessageEmbed } = require('discord.js');
		const config = require('../config.json');

		let embed = new MessageEmbed()
			.setTitle(`ZSurvive | Invite`)
			.setDescription(`<@${message.author.id}> [**INVITE**](https://discord.com/api/oauth2/authorize?client_id=1041448694765060166&permissions=2147740672&scope=bot)`)
			.setColor(config.EmbedsColor)
			.setFooter(lang.defaultFooter, config.Logo);

		message.channel.send(embed);
	},
};
