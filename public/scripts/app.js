
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$('document').ready(function (event) {
    
$('.new-tweet form').on('submit', function (event) {
    event.preventDefault()
    var data = $(this).find("textarea").val();
        if (data === "" || data === null) {
            alert("Please write a tweet!");
            return;
        } if (data.length > 140) {
            alert("Your tweet is too long!")
            return;
        }
    console.log(data)
        $.post('/tweets', {"text":data}).done(function () {
            loadTweets();
            })
})

function loadTweets() {
        $.ajax({
            url: 'http://localhost:8080/tweets',
            method: 'GET',
            success: function (results) {
                renderTweets(results);
            }
    })
};  

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
    content.text(tweet.content.text);
    div.append(content);
    $tweet.append(div);
    const footer = $('<footer>').addClass('footer1');
    const date = $('<span>').addClass('date');
    const dateFix = moment(tweet.created_at).fromNow();
    date.append(dateFix);
    footer.append(date);
    $tweet.append(footer)
    const icons = $('<span>').addClass('icons');
    const flag = $('<i>').addClass('fa fa-flag').addClass('fa-fw');
    icons.append(flag);
    const retweet = $('<i>').addClass('fa fa-retweet').addClass('fa-fw');
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
        $('#tweets-container').prepend(newTweet); // takes return value and appends it to the tweets container
    }
}

// renderTweets(data);

});