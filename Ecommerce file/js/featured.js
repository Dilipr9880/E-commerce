class Featured extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <style>
      .cards-wrapper{
        display: flex;
        margin: 0px 20px;
    }
    .card{
        margin: 0 .5em;
        width:calc(100%/4);
    }
    
    .image-wrapper img{
      max-width: 100%;
      max-height: 100%;
    }
    img{
      width: 100%;
      height: 400px;
    }
    a{
      width: 100%;
    }
    @media (min-width: 600px) and (max-width: 1000px){
      .cards-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1900px;
        height: auto;
    }
    
    .card{
        margin: 0 .5em;
        flex: 0 0 calc(100%/2) calc(100%/2);
    }
    .card::after(2){
      display: none;
  }

.image-wrapper{
  height: 0 0.5em;
  margin: 0px auto;
}
.image-wrapper img{
  max-width: 100%;
  max-height: 100%;
}
    }

    @media screen and (max-width: 567px){
      .cards-wrapper{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
      }
      .card{
          margin: 0 .5em;
          width:calc(100%/2);
      }
    }
      @media screen and (max-width: 567px){
          .card:not(:first-child){
              display: none;
          }
      
      .image-wrapper{
          height: 0 0.5em;
          margin: 0px auto;
      }
      .image-wrapper img{
          max-width: 100%;
          max-height: 100%;
      }
      }
    </style>

</head>
<body>
  <h2 style="text-align: center; margin: 30px;">Featured Products</h2>
  <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="cards-wrapper">
            <div class="card">
              <div class="image-wrapper">
              <img src="images/f1.webp" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Red dress</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark"><i class="fa-solid fa-cart-shopping"></i>Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/f2.webp" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>torn pant</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card" id="c1">
          <div class="image-wrapper">
          <img src="images/f3.webp" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>plaid Skirt</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card" id="d1">
          <div class="image-wrapper">
          <img src="images/f4.webp" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Stripped pant</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="cards-wrapper">
            <div class="card">
              <div class="image-wrapper">
              <img src="images/m1.jpeg" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>White Shirt</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/m2.jpg" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Blue Shirt</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/m3.jpg" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Formal pant</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/m6.jpg" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Coloured hoddie<</b>/h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="cards-wrapper">
            <div class="card">
              <div class="image-wrapper">
              <img src="images/k1.webp" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Girl baby dress</b> </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/k2.avif" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Boy baby dress</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/k6.jpg" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Fashion dress</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        <div class="card">
          <div class="image-wrapper">
          <img src="images/k3.avif" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="text-align: center;"><b>Casual Kid dress</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">Add to cart</a>
  </div>
              </div>
</div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</body>
</html>
        `
    }
}
window.customElements.define('app-feature', Featured)