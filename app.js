const routes = {
  '/' : HomeView,
  '/search-details' : SearchDetailsView
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];


const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    const index = pathname.indexOf('?')
    if (index > 0)
        pathname = pathname.substr(0, index);
    rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}

function handleSearchClick(){
    const serchInput = document.getElementById('searchInput')
    const email = serchInput.value
    if(validateEmail(email)){
        onNavigate(`/search-details?email=${email}`)
        fetchRecords()
    } else {
       let eleLabel = document.getElementById('emailLabel')
       let eleInput = document.getElementById('searchInput')
       eleLabel.innerHTML = 'Please add valid email address'
       eleLabel.style.color = 'red'
       eleInput.style.borderColor = 'red'
    }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function fetchRecords (){
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        let authors = data.results;
        return authors.map(function(author) {
          let li = createNode('li'),
              img = createNode('img'),
              span = createNode('span');
          img.src = author.picture.medium;
          span.innerHTML = `${author.name.first} ${author.name.last}`;
          append(li, img);
          append(li, span);
          append(ul, li);
        })
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });
}