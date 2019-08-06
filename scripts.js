var apiKey = 'e6CTlgKsAG73BWRQ44ILXE39GgZSQAFV'
var question = "guns"
var sInput = $("#matchdiv").text()
var startDate = "&begin_date="+sInput
var eInput = $("#matchdiv").text()
var endDate = "&end_date="+eInput
var url=
url="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question +  "&api-key=e6CTlgKsAG73BWRQ44ILXE39GgZSQAFV"
// startDate + endDate 
// https://api.nytimes.com/svc/search/v2/articlesearch.json
// Example call https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
// q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231
console.log(sInput);
console.log(startDate);

$("#changeidofsubmitbutton").click(function (){
    if (eInput !== "") {
        url="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question + startDate+  "&api-key=e6CTlgKsAG73BWRQ44ILXE39GgZSQAFV"
    }
    console.log(url);
$.ajax({
    type: "GET",
    url: url,
    success: function (response) {
        console.log(response);
        $('#testdiv').html('<p>' + response.response.docs[0].headline.main + '</p>')
        
    }
});
})
