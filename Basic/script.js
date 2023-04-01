var request = new XMLHttpRequest();

//open method - 2 args ('type of req', 'api url')
request.open('GET', "https://hplussport.com/api/products.php?order=name");

//fxn to do something with API response
//we use request.onload() to trigger the fxn
request.onload = function(){
    //we will store api response in response variable
    var response = request.response;
    //response we get is of string type so we need to parse it to JSON
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    for(item in parsedData){
        var name = parsedData[item].name;
        var products = document.createElement('li');
        products.innerHTML = name;
        document.body.appendChild(products);

        var imageUrl = parsedData[item].image;
        var images = document.createElement('img');
        images.setAttribute('src', imageUrl);
        document.body.appendChild(images);
    }

    
}

//Now to actually send the request
request.send();