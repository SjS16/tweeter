/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$('document').ready(function (event) {

function createTweetElement(data) {
    const articleContainer = $('<article>').addClass('tweet');
    const header = $('<header>');
    const avatar = $('<img>', { src: (data.user.avatars.small)}).addClass('avatar');
    // avatar['src'] = data.user.avatars.small;
    header.append(avatar);
    const authorName = $('<h2>');
    authorName.text(data.user.name);
    header.append(authorName);
    const handle = $('<p>').addClass('shortName');
    handle.append(data.user.handle);
    header.append(handle);
    articleContainer.append(header);
    const div = $('<div>');
    const content = $('<p>');
    content.append(data.content.text);
    div.append(content);
    articleContainer.append(div);
    const footer = $('<footer>').addClass('footer1');
    const date = $('<span>').addClass('date');
    const dateFix = new Date(data.created_at);
    date.append(dateFix);
    footer.append(date);
    articleContainer.append(footer)
    const icons = $('<span>').addClass('icons');
    const flag = $('<i>').addClass('fa fa-flag');
    icons.append(flag);
    const retweet = $('<i>').addClass('fa fa-retweet');
    icons.append(retweet);
    const heart = $('<i>').addClass('fa fa-heart');
    icons.append(heart);
    footer.append(icons);
    articleContainer.append(footer);
    return articleContainer;
}


// Test / driver code (temporary). Eventually will get this from the server.
const data = [
    {
        "user": {
            "name": "Newton",
            "avatars": {
                "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": {
                "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    },
    {
        "user": {
            "name": "Johann von Goethe",
            "avatars": {
                "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
        },
        "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
    }
];

function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    const header = $('<header>');
    const avatar = $('<img>', { src: (tweet.user.avatars.small) }).addClass('avatar');
    header.append(avatar);
    const authorName = $('<h2>');
    authorName.text(tweet.user.name);
    header.append(authorName);
    const handle = $('<p>').addClass('shortName');
    handle.append(tweet.user.handle);
    header.append(handle);
    $tweet.append(header);
    const div = $('<div>');
    const content = $('<p>');
    content.append(tweet.content.text);
    div.append(content);
    $tweet.append(div);
    const footer = $('<footer>').addClass('footer1');
    const date = $('<span>').addClass('date');
    const dateFix = new Date(tweet.created_at);
    date.append(dateFix);
    footer.append(date);
    $tweet.append(footer)
    const icons = $('<span>').addClass('icons');
    const flag = $('<i>').addClass('fa fa-flag');
    icons.append(flag);
    const retweet = $('<i>').addClass('fa fa-retweet');
    icons.append(retweet);
    const heart = $('<i>').addClass('fa fa-heart');
    icons.append(heart);
    footer.append(icons);
    $tweet.append(footer);
    return $tweet;
}

function renderTweets(tweets) {
    for (var tweet of tweets) {  // loops through tweets
        var newTweet = createTweetElement(tweet); // calls createTweetElement for each tweet 
        $('#tweets-container').append(newTweet); // takes return value and appends it to the tweets container
    }
}

renderTweets(data);

});