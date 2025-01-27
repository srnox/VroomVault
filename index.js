const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Command setup
const generateCommand = new SlashCommandBuilder()
  .setName('generate')
  .setDescription('Generate a car image')
  .addStringOption(option =>
    option.setName('carname')
      .setDescription('Enter the car name')
      .setRequired(true));

// Register the command when the bot starts
client.once('ready', async () => {
  console.log('Bot is ready!');
  try {
    await client.application.commands.create(generateCommand);
  } catch (error) {
    console.error('Error registering command:', error);
  }
});

// Handle the command
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'generate') {
    await interaction.deferReply();
    
    const carName = interaction.options.getString('carname');
    if (!carName) {
      return await interaction.editReply('Please provide a car name!');
    }
    
    try {
      const response = await axios.get(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(carName)} car&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
      
      if (!response.data || !response.data.urls) {
        return await interaction.editReply('No images found for that car. Try another search!');
      }
      
      const imageUrl = response.data.urls.regular;
      await interaction.editReply({ 
        content: `Here's your ${carName} image:`,
        embeds: [{
          color: 0x0099ff,
          title: `${carName.charAt(0).toUpperCase() + carName.slice(1)}`,
          description: 'Created with love by srnoxo ❤️',
          image: {
            url: imageUrl
          },
          footer: {
            text: 'Powered by Unsplash'
          }
        }]
      });
    } catch (error) {
      console.error('Error:', error);
      await interaction.editReply('There was an error generating the image. Please try again later.');
    }
  }
});

// Login with your bot token from .env file
client.login(process.env.BOT_TOKEN);