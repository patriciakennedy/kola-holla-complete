//ep 1: Ensure JavaScript is running
// document.addEventListener("DOMContentLoaded", function() {
//     console.log('JavaScript is running!');
// });

// Step 2: Define the fetchKoalas function
// function fetchKoalas() {
//   console.log('Fetching koalas...');

//   axios
//     .get('/koalas') //  Using relative URL
//     .then((response) => {
//       console.log('Koalas received:', response.data); // Log received data
//     })
//     .catch((error) => console.error(' Error fetching koalas:', error));
// }

// // Step 3: Call fetchKoalas when the page loads
// document.addEventListener("DOMContentLoaded", fetchKoalas);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getKoalas() {
    // Get koalas fromm the server???
    axios.get('/')

    .then(response => {
        console.log("got data from /server", response);
    })
    .catch(error => {
        console.log("error");
    })
    console.log("in getKoalas function");
}

getKoalas();