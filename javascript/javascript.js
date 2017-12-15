

// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0a93f86f37d1478083a5b36b40c31054",
  'begin_date': bgDate,
  'end_date': "20171231",
  'sort': "newest"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


//We will need functions to take in what was typed in the submit boxes to call upon the response

var bgDate =


$("button").on("click", function() { 

}