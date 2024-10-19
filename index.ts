const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token
const token = '8047813066:AAHHjMEMKa7pgwVDMeqpSWxPC8ZiTBBEpCo';

// Create a bot that uses polling to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any incoming messages
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Create buttons
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Launch App', web_app: {url: 'https://prizexapp.com'}},
                    { text: 'Join Community', url: 'https://t.me/prizexrewards'}
                ]
            ]
        }
    };

    // Send a message with buttons
    bot.sendMessage(chatId, 'Welcome to PrizeX! 🎉 \n\n Hi there! 👋 We are thrilled to have you here. With our app, you can easily participate in exciting lotteries for amazing prizes, like the latest gadgets, cars, and more! 🎁🚗📱 \n\n Here is how it works: \n\nBrowse Prizes - Explore the list of available products and choose the ones you like to win.\n\nBuy Tickets - Purchase tickets for any prize that catches your eye.\n\nJoin the Draw - On the draw date, our system randomly picks a winner for each prize.\n\nCheck Results - See if you are the lucky winner by visiting the Tickets page anytime!\n\nIf you need help or have any questions, just type “/help” or reach out to us directly. Good luck, and let the fun begin! 🍀🎟️', options);
});

bot.onText('', (msg) => {
    const chatId = msg.chat.id;
    if(msg.text != '/start'){
        const options = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: 'Launch App', web_app: {url: 'https://prizexapp.com'}},
                        { text: 'Join Community', url: 'https://t.me/prizexrewards'}
                    ]
                ]
            }
        };
        // Send a message with buttons
        bot.sendMessage(chatId, 'Welcome to PrizeX! 🌐 \n\n Ready to dive into exciting lotteries and stand a chance to win amazing prizes? Tap the buttons below to get started!', options);

    }
});