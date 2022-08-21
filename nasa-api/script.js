


// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLowerCase()
//   const url=`https://api.nasa.gov/planetary/apod?api_key=Glq8eG9FUcGKoaOACNkIfDiHSWFRzp2VQKJrpjnm`

//   fetch(url)
//       .then(res =>res.json())// parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data.hdurl
//         document.querySelector('h3').innerText = data.explanation
//      })
//       .catch(err=>{
//           console.log(`error${err}`)

//     });

// }

document.querySelector("button").addEventListener("click", getFetch);


function getFetch(){

    const choice = document.querySelector('input').value.toLowerCase()
    console.log(choice)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=Glq8eG9FUcGKoaOACNkIfDiHSWFRzp2VQKJrpjnm&date=${choice}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.media_type === "image") {
            document.querySelector("img").src = data.hdurl;
        } else if ( data.media_type === "video") {
            document.querySelector("iframe").src = data.url;
            // document.querySelector("iframe").style.visibility="visible";
            // document.querySelector("img").style.visibility="hidden";
        }
        // document.querySelector("img").src = data.hdurl;
        // document.querySelector("iframe").src = data.video;
        document.querySelector("h3").innerText = data.explanation

    })
    .catch(err => {
        console.log(`error ${err}`)
    })    

 }
 
 