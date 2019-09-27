// Theme for searchable Jiffy's
// array of strings (actors, animals)
// create a jquery button using a for loop
// STEP ONE
//  ============================================================

var actors = ["Robert Downey Jr.", "Tom Cruise", "Mark Wahlberg", "Jack Black", "Val Kilmer",
"Matt Damon", "Denzell Washington", "Kevin Hart", "Kevin Costner"]

var buttonDiv = $("#button-area")


for (i = 0; i < actors.length; i++) {
    // console.log(actors [i]) 
     var b = $("<button>")
    // console.log (b)
     b.text(actors[i])
     //console.log(b)
     buttonDiv.append(b)
}



// STEP TWO
// Make the Api Call
$("button").click(function (){
    console.log ("clickedMe")
    makeTheCall()
})

function makeTheCall() {
    let queryUrl= "https://api.giphy.com/v1/gifs/search?api_key=kvkQfPEQZdb7L9zx9hgZ6h2QwHAKwVFy&q=actors&limit=25&offset=0&rating=G&lang=en"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function(response) {
        console.log(response)




    })
}

// Loop through the data arra, grab the url of the image 




//let Api= kvkQfPEQZdb7L9zx9hgZ6h2QwHAKwVFy
// use api key and url 
// ================================================================














// STEP THREE
// Console Log the response object to find image in the array 
// loop through the images array, and save the data you want to variables
// append the data to the HTML



