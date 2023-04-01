var request = new XMLHttpRequest();

//rating=g (g level rating gifs only)  tag=girl (gifs related to term)
request.open('GET', "https://api.giphy.com/v1/gifs/random?api_key=kpJJ6wGLEiFjU5DE1oJZMdJVXGw4i1NM&tag=girls&rating=g");

request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);

    console.log(parsedData);
    //orignal url of gif
    var original = parsedData.data.images.original.url;
    console.log(original);

    var gif = document.createElement('img');
    gif.setAttribute('src',original);
    document.body.appendChild(gif);
}


request.send();