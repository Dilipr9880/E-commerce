class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link type="text/css" rel="stylesheet" href="style.css">
<link rel="stylesheet" href="css/header.css"/>
    </head>
    <body>
    <div class="header">
    <div class="logo">
        <a href="#"><img style="width: 100px; height:50px" src="images/logo.jpg"> </a>
    </div>
    <div class="search">
        <form>
            
            <input type="text" name="input" placeholder="Product name,category name etc.."/>
            <button type="submit">search</button>
        </form>
    </div>
    <div class="icons">
        <a href="Login.html"><button type="button" class="btn btn-Secondary" id="but" style="background-color: white; color: black; background :white">Login</button></a>
        <a href="cartpage.html"><i class="cart fa fa-shopping-cart" id="cart" style="font-size:36px"></i></a>
    </div>
    
</div>
    <div class="links" style="text-align: center; background-color:#bbbbbb; padding:20px; text-transform:capitalize;">
        <a href="home.html"><b>Home</b></a>
        <a href="allproducts.html"><b>All products</b></a>
        <a href="#">
        <li class="nav-item dropdown">
        <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown"><b>Women</b></a>
        <ul class="dropdown-menu">
            <li><a href="allwomen.html" class="dropdown-item">All</a></li>
            <li><a href="dress.html" class="dropdown-item">Dresses</a></li>
            <li><a href="gpants.html" class="dropdown-item">pants</a></li>
            <li><a href="skirts.html" class="dropdown-item">Skirts</a></li>
        </ul>
    </li>
</a>
<a href="#">
    <li class="nav-item dropdown">
        <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown"><B>Mens</B></a>
        <ul class="dropdown-menu">
            <li><a href="allmen.html" class="dropdown-item">All Products</a></li>
            <li><a href="shirts.html" class="dropdown-item">Shirts</a></li>
            <li><a href="pants.html" class="dropdown-item">pants</a></li>
            <li><a href="hoddies.html" class="dropdown-item">Hoddies</a></li>
        </ul>
    </li>
    </a>
        <a href="kids.html"><b>Kids</b></a>
        <a href="contactus.html"><b>Contact</b></a>

    </div>
    <body>
    </html>
        `
    }
}
window.customElements.define('app-header', AppHeader)