import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid footer'>
      <div class="row flex-column align-items-center flex-md-row flex-lg-row">

<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
  <div class="footer-women card w-100">
    <ul class="list-group list-group-flush text-center">
    <a href='./pages/product-categories/men/men.html'><h4 class="footer-heading card-header text-center">Men</h4></a>
      <li class="list-group-item"><a href="#">Hoodies</a></li>
      <li class="list-group-item"><a href="#">Pants</a></li>
      <li class="list-group-item"><a href="#">Shirts</a></li>
    </ul>
  </div>
</div>
<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
  <div class="footer-men card w-100">
    <ul class="list-group list-group-flush text-center">
    <a href='./pages/product-categories/women/women.html'><h4 class="footer-heading card-header text-center">Women</h4></a>
      <li class="list-group-item"><a href="#">Dresses</a></li>
      <li class="list-group-item"><a href="#">Pants</a></li>
      <li class="list-group-item"><a href="#">Skirts</a></li>
    </ul>
  </div>
</div>
<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
  <div class="footer-kids card w-100">
  <ul class="list-group list-group-flush text-center">
  <a href="#"><h4 class="footer-heading card-header text-center">Kids</h4></a>
      
    </ul>
  </div>
</div>
<div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
  <div class=" card w-100">
    <h4 class="footer-heading text-center card-header">Links</h4>
    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item"><a href="#">Home</a></li>
      <li class="list-group-item"><a href="#">Login</a></li>
      <li class="list-group-item"><a href="#">Contact</a></li>
    </ul>
  </div>
</div>
</div>
<div class="row copyright-row d-flex justify-content-around">
<div class="col-12 col-md-6 col-lg-6 copyright-col d-flex justify-content-around align-items-items">
  <span>Copyright &copy; Diamond8 2022-23</span>
</div>
</div>

    </footer>
  )
}

export default Footer