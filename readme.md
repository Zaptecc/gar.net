## gar.net - A Discord bot written with very little knowledge of JavaScript and lots of help from Google

### Features
- Animated rock paper scissors with emojis!
- A few server management tools such as `ban` and `purge`!
- Love and hug commands to keep your friends in good spirits!
- ASCII tombstone with the `rip` command!
- lots of memes lul

### Manually hosting
This bot was posted on GitHub to allow others to view the code and host it themselves so that they might add their own inside jokes and such. In order to host this bot yourself, there are a few steps you must take. The first step is to navigate to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new bot. The application name doesn't matter but the name you give it in the next step will be the bot's name. Navigate to the bot tab and click 'Add a bot.' This is where you can change the username and profile picture. Once you have done this, click on the copy button under token, and store that in a safe place. Be cautious with this token, because if it gets into the wrong hands it can access your bot and run anything! Although it can be regenerated, it should not be shared with anybody. The next step is to download [Node.JS](nodejs.org) and the [Microsoft Visual Studio Tools (2017)](https://www.microsoft.com/en-us/download/details.aspx?id=56046) if you do not already have those. Once you have that installed, download this repository from GitHub and unzip it. Navigate to the location where the files you just downloaded are and open `config_example.json`. Enter in the secret token you saved earlier, and set a prefix. The other settings in the config file are optional. Save this file as `config.json` and you are almost ready to go! Open terminal/command prompt and navigate to the directory where you unzipped those files. Type in `npm config set msvs_version 2017 --global` and hit enter, and once that is done type in `npm install`. This installs all the required libraries that the code references. You are now ready to go! Type in `node bot.js` and you now have your very own Discord bot!

If you are manually hosting the bot, you will need the 'Manage Server' permission on any Discord servers you intend to have it join. If you have this permission, you must go to the [Discord Developer Portal](https://discord.com/developers/applications), click on your bot's application, and copy the client ID. Once you have that, the link you will use to invite it is https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE&scope=bot&permissions=8

### Commands
Information on commands coming soon, in the meantime you can type [prefix]`help [command]` to get a few more details about what each command does!

<br>
<br>

Contact @Zaptecc#2938 on Discord or open a GitHub issue for support.

Thanks to [flamespinner](https://github.com/flamespinner) and [mcao](https://github.com/mcao) for their help with this project!
