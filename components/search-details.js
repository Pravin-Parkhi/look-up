const SearchDetailsView = `
    <section class="search-result-section">
        <div class="container">
            <h3 class="search-result-heading">Result</h3>
            <p class="search-result-sub-heading">
                Look at the result below to see the details of person you're search for.
            </p>
        </div>
    </section>
    <section class="search-details-section">
        <div class="container">
            <div class="search-details-wrapper">
                <div class="search-details-sub-section">
                    <div class="user-details-wrapper">
                        <div class="user-avatar">
                            <img class="user-icon" src="./assets/icn_person.svg" alt="User" />
                        </div>
                        <div class="user-info">
                            <h3 class="search-details-heading">John Doe, 35</h3>
                            <p class="search-details-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="person-details-wrapper">
                    <div class="search-details-sub-section">
                        <h3 class="search-details-sub-heading">Address</h3>
                        <p class="search-details-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div class="search-details-sub-section">
                        <h3 class="search-details-sub-heading">Email</h3>
                        <p class="search-details-description">loremipsum@ipsum.com</p>
                    </div>
                    <div class="search-details-sub-section">
                        <h3 class="search-details-sub-heading">Phone Numbers</h3>
                        <p class="phone-number">(555)555-5555</p>
                        <p class="phone-number">(555)555-5555</p>
                        <p class="phone-number">(555)555-5555</p>
                    </div>
                    <div class="search-details-sub-section">
                        <h3 class="search-details-sub-heading">Relatives</h3>
                        <p class="search-details-description">Jane Smith</p>
                        <p class="search-details-description">John Smith Jr</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="search-again-section">
        <div class="container">
            <h3 class="hero-heading">Can't find the right person?</h3>
            <p class="sub-heading-wrapper">
                <span class="sub-heading-prefix">Try again</span> 
                <span class="sub-heading-postfix">- Make a new search</span>
            </p>
            <div class="search-input-wrapper">
                <input type="email" id="searchInput" placeholder="EMAIL" name="email" class="email-input">
                <button class="search-button" onclick="findPerson()">Go!</button>
            </div>
            <p class="security-text-wrapper">
                <img class="security-icon" src="./assets/lock.svg" alt="Security" />
                <span class="security-text">Enter Any Email Address. They won't be notified.</span>
            </p>
        </div>
    </section>
`

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