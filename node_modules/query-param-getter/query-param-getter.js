// super siple, crazy fast query param getter
// source: http://jsperf.com/querystring-with-javascript/9
module.exports = function (name) {
    var half = location.search.split(name + '=')[1];
    return half ? decodeURIComponent(half.split('&')[0]) : undefined;
};
