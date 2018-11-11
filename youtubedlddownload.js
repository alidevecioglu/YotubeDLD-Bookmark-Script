var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("v");
window.location.replace("https://www.youtubedld.com/watch?v=" + c);

