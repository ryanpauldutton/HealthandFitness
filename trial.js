const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
		"X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});