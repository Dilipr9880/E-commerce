class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <html>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/footer.css"/>
        </head>
        <body>
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <!--Women section-->
                    <h4>Women</h4>
                    <ul>
                        <li><a href="dress.html">Dresses</a></li>
                        <li><a href="gpants.html">Pants</a></li>
                        <li><a href="skirts.html">Skirts</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <!--Mens section-->
                    <h4>Mens</h4>
                    <ul>
                        <li><a href="shirts.html">Shirts</a></li>
                        <li><a href="pants.html">Pants</a></li>
                        <li><a href="hoddies.html">Hoddies</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Kids</h4>
                    <ul>
                        <li><a href="kids.html">Kids</a></li>
                        
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="Login.html">Login</a></li>
                        <li><a href="contactus.html">Contact</a></li>
                    </ul>
                </div>
            </div>
            <hr style="color: white;">
            <h5 style="text-align: center; color:#ffffff">Copyright ©Web 2023-2024</h5>
        </div>
    </footer>
        </body>
        </html>
        `
    }
}
window.customElements.define('app-footer', AppFooter)