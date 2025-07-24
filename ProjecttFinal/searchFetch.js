// //Higher Order Function
// const arr = [1,2,3,4]

// let a = arr.map((e)=>{
//     // console.log(e)           //print index of arr one by one
//     // return e*e  !=4             //it will check the vallue and compare with 4 is equal to the return value or not then true false ma chaii result aaunxa
//     // return 4                //return 4 choti garxa and 4 naii print garxa....
//     // return e%2                  //modulus check garera print garxa...           ans 1,0,1,0...
//     // return e*6                  // result [6,12,18,24]....
// })

// console.log(a)





// ----------------------------------------Search Fetch ko laagi yo ho saili---------------------------------------------


const form = document.querySelector("#dabba")
const movieContainer = document.querySelector("#movieContainer")
const APIKEY = "224918c9"

form.addEventListener("submit", async (e) => {
    const movieName = document.getElementById("movieInput").value.trim()
    e.preventDefault()
    // movieName.value=trim()           //another method to trim the extra space and alll....

    if (movieName === "") {
        alert("Please enter a movie name!")
        return
    }

    // const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${APIKEY}`)
    // const data = await response.json()
    // console.log(data)


    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${APIKEY}`)
        const data = await response.json()
        console.log(data)

        if (data.Response === "True") {  // 'Response' is capitalized in OMDB API
            movieContainer.innerHTML = data.Search.map((movie) => {
                return `
                <div class="movieCard">
                    <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" alt="Movie Poster">
                    <h4>${movie.Title}</h4>
                    <p>Year: ${movie.Year}<br> Type: ${movie.Type}<br> Rating: ${movie.imdbRating}</p>
                </div>
            `;
            }).join('');
        } else {
            movieContainer.innerHTML = `<p>No movies found</p>`;
        }
    } catch (error) {
        movieContainer.innerHTML = `<p>Error fetching data</p>`;
        console.error(error);
    }
})


// --------------------------------------------Name string garney tarika-----------------------------------------------------------
// const name="Feroz"

// // constant name dollar sign use garna ko lagi feri tindey naii use garna parney "" yesley kaam gardaina dhanyabad
// console.log(`My name is ${name}`)          //name ma cut laaxa cuz deprecated meaning eutaii variable bar bar use garna sakxan jasto bhayo risk hunxa bhnera warning ho