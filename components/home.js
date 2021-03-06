const HomeView = `
    <section class="hero-section">
        <div class="container">
            <h3 class="hero-heading">search any email address</h3>
            <p class="sub-heading-wrapper">
                <span class="sub-heading-prefix">Start Here</span> <span class="sub-heading-postfix">- Look up the owner's name, photos and online profiles. See what you find!</span>
            </p>
            <div class="search-input-wrapper">
                <div class="field">
                    <input type="email" id="searchInput" placeholder="EMAIL" name="email" class="email-input">
                    <label for="email" id="emailLabel">EMAIL</label>
                </div>
                <button class="search-button" onclick="handleSearchClick();">Go!</button>
            </div>
            <p class="security-text-wrapper">
                <img class="security-icon" src="./assets/lock.svg" alt="Security" />
                <span class="security-text">Enter Any Email Address. They won't be notified.</span>
            </p>
        </div>
    </section>
    <section class="info-section">
        <div class="container">
            <h3 class="info-heading">Reverse Email Lookup</h3>
            <p class="info-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    </section>
    <section class="bullet-points-section">
        <div class="container bullet-points-wrapper">
            <div class="bullet">
                <div class="bullet-point">1</div>
                <div class="bullet-info-wrapper">
                    <p class="bullet-heading">Lorem Ipsum</p>
                    <p class="bullet-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div class="bullet">
                <div class="bullet-point">2</div>
                <div class="bullet-info-wrapper">
                    <p class="bullet-heading">Lorem Ipsum</p>
                    <p class="bullet-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div class="bullet">
                <div class="bullet-point">3</div>
                <div class="bullet-info-wrapper">
                    <p class="bullet-heading">Lorem Ipsum</p>
                    <p class="bullet-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div class="bullet">
                <div class="bullet-point">4</div>
                <div class="bullet-info-wrapper">
                    <p class="bullet-heading">Lorem Ipsum</p>
                    <p class="bullet-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div class="bullet">
                <div class="bullet-point">5</div>
                <div class="bullet-info-wrapper">
                    <p class="bullet-heading">Lorem Ipsum</p>
                    <p class="bullet-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div class="bullet">
                <div class="bullet-point">6</div>
                <div class="bullet-info-wrapper">
                    <p class="bullet-heading">Lorem Ipsum</p>
                    <p class="bullet-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    </section>
`