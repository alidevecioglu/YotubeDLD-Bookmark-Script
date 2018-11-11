# YoutubeDLD Bookmark Script

[YoutubeDLD Download](javascript:(function()%7Bvar%20url_string%20%3D%20window.location.href%3Bvar%20url%20%3D%20new%20URL(url_string)%3Bvar%20c%20%3D%20url.searchParams.get(%22v%22)%3Bwindow.location.replace(%22https%3A%2F%2Fwww.youtubedld.com%2Fwatch%3Fv%3D%22%20%2B%20c)%7D)())

## Javascript Code
```sh
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("v");
window.location.replace("https://www.youtubedld.com/watch?v=" + c);
```
## Bookmark Code
```sh
javascript:(function()%7Bvar%20url_string%20%3D%20window.location.href%3Bvar%20url%20%3D%20new%20URL(url_string)%3Bvar%20c%20%3D%20url.searchParams.get(%22v%22)%3Bwindow.location.replace(%22https%3A%2F%2Fwww.youtubedld.com%2Fwatch%3Fv%3D%22%20%2B%20c)%7D)()
```
