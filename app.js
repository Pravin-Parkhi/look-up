function findPerson(){
    debugger
    const serchInput = document.getElementById('searchInput');
    const email = serchInput.value;
//    window.location = `http://127.0.0.1:50071/search-details.html?email=${email}`;
//    window.replace = `http://127.0.0.1:50071/search-details.html`
}

function fetchRecords(){
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    debugger
    const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`
    fetch(url)
        .then(function(data) {
        debugger
        console.log(data)
    })
        .catch(function(error) {
        // If there is any error you will catch them here
    });
}