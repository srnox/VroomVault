# CarBot - Discord Car Image Generator

A Discord bot that generates car images using the Unsplash API. Simply type `/generate carname` and get beautiful car images in your Discord channel!

## Features

- Simple slash command interface (`/generate`)
- High-quality car images from Unsplash
- Embedded messages with custom formatting
- Easy to use and deploy

## Prerequisites

Before running this bot, make sure you have:

- Node.js (v18 or higher)
- A Discord Bot Token (see [Getting a Discord Bot Token](#getting-a-discord-bot-token))
- An Unsplash API Access Key (see [Getting an Unsplash API Key](#getting-an-unsplash-api-key))

### Getting a Discord Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" section and click "Add Bot"
4. Click "Reset Token" to get your bot token
5. Enable necessary Privileged Gateway Intents
6. Save your token securely (you'll need it for the .env file)
7. Go to OAuth2 > URL Generator
8. Select "bot" and "applications.commands" scopes
9. Copy the generated URL to invite the bot to your server

### Getting an Unsplash API Key

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Sign up or log in to your Unsplash account
3. Go to your [Applications](https://unsplash.com/oauth/applications)
4. Click "New Application" and accept the terms
5. Name your application and provide required information
6. Find your Access Key in the application details
7. Save your Access Key securely (you'll need it for the .env file)

## Installation

1. Clone this repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your credentials:
```env
BOT_TOKEN=your_discord_bot_token
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

## Usage

1. Start the bot:
```bash
node index.js
```

2. In Discord, use the command:
```
/generate carname
```
Replace `carname` with any car you want to see (e.g., "Tesla Model 3", "Ferrari", "Porsche 911")

## Environment Variables

- `BOT_TOKEN`: Your Discord bot token
- `UNSPLASH_ACCESS_KEY`: Your Unsplash API access key

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Discord.js](https://discord.js.org/) for the Discord API wrapper
- [Unsplash](https://unsplash.com/) for providing high-quality images