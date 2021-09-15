const { TwitterClient } = require("twitter-api-client");

const tweet = async (status) => {
  const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_API_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  await twitterClient.tweets.statusesUpdate({ status });
};

(async () => {
  try {
    const myTweet = `#Checkout this #Django #Python #projects in #Django #HTML #CSS #Python #Repo on @github https://bit.ly/2XkOsia #Follow: @NiKs290192 on @Github, @Twitter, @Instagram for more updates :)`;
    await tweet(myTweet);
  } catch (err) {
    console.error(err);
  }
})();
