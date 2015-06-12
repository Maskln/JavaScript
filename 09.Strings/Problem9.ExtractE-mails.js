//Write a function for extracting all email addresses from given text.
//    All sub-strings that match the format @… should be recognized as emails.
//    Return the emails as array of strings.

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt saddw.dsfe@abv.bg blandit tincidunt. Fusce leort_dsd@gmail.com pharetra, nibh in mollis pesho_97@yahoo.com bibendum, neque nibh.';

console.log(getEmails(text));

function getEmails(text){
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}