class allproducts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>All Products</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h555rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <link type="text/css" rel="stylesheet" href="style.css">
            <style>
                img{
                    height: 250px;
                    width: 100%;
                }
                @media (min-width: 600px) and (max-width: 1000px){
                    .card{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 750px;
                        flex-grow: 1;
                    }
                }
                @media (min-width: ) and (max-width: 567px){
                    .card{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 900px;
                        flex-grow: 1;
                    }
                }
            </style>
        </head>
        <body>
            <h2 style="text-align: center;">All Products</h2>
            <div>
                <div class="row">
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/f1.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Red dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/f2.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Stripedpants</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/f3.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Cream jeans</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/f4.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Ripped jeans</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/f5.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Black dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/f6.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Pink Dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <!--Mens-->
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/m1.jpeg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">White Shirt</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/m2.jpg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Blue Shirt</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/m3.jpg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Formal pant</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/m4.jpg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">casual pant</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/m5.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Blackhoddies</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/m6.jpg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">ColourHoddie</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <!--Kids-->
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/k1.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Girl baby dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/k2.avif" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Boy baby dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/k3.avif" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Casual kid dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/k4.jpg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Formal kid Dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/k5.webp" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Fashion kid Dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    <div class="card" style="width: 175px; margin:30px;">
                        <img class="card-img-top" src="images/k6.jpg" alt="image of team member">
                        <div class="card-body">
                            <h5 class="card-title">Pink Dress</h5>
                            <p style="text-align: center;">$15</p>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit maiores, nam aliquam reprehenderit magni veritatis.</p>
                            <button type="button" class="btn btn-dark" style="width: 100%; margin:0px 0px;"><i class="fa-solid fa-cart-shopping"></i><br>add to cart</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </body>
        </html>
        `
    }
}
window.customElements.define('all-products', allproducts)