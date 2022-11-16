let { sql } = require('../mysql/mysqlpool.js');
const config = require('../config.json');
let { client } = require('../bot.js');
let { MessageEmbed } = require('discord.js');
const envconfig = require('../envconfig.json');

async function removeExpiredPatreons() {
	sql.query(`SELECT * FROM ${envconfig.MySQL.database}.users WHERE premium IS NOT NULL AND premiumUntil < ?;`, [Date.now()], async (err, rows) => {
		if (err) throw err;

		rows.forEach((row) => {
			/*
            TODO: check if user is still patron and give it back automatically.
            */

			sql.query(`UPDATE ${envconfig.MySQL.database}.users SET premium = ?, premiumUntil = ? WHERE id = ? LIMIT 1;`, [null, null, row.id], async (err, result) => {
				if (err) throw err;
			});
		});
	});
}

setInterval(async () => {
	await removeExpiredPatreons();
}, 1000 * 60 * 60);
