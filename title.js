const request = require('request');
var parseString = require('xml2js').parseString;

var url = "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109";
request(url, function (error, response, body) {
    
    var parsedJson = JSON.parse(body);
    var articles = parsedJson.articles;
    articles.map((art) => {
      console.log(art.title);
    })
   
});