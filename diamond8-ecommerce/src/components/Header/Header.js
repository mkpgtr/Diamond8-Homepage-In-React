import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md bg-body-tertiary first-nav">
        
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Diamond8</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex ms-md-auto nav-search" role="search">
                <input class="form-control  search-input" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success search-btn" type="submit">Search</button>
              </form>
              <ul class="navbar-nav align-items-md-center ms-auto mb-lg-0 cart-n-loginbtn">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><button class="btn btn-primary">Login</button></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                </li>
                
              </ul>
              
            </div>
            </div>
        
        
      </nav>
      
      
      <nav class="navbar navbar-expand bg-body-tertiary second-nav">
        <div class="container-fluid">
        
            <div class="collapse d-flex justify-content-between navbar-collapse" id="navbarNav">
              <ul class="navbar-nav justify-content-around flex-wrap w-100">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="#">All Products</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Women
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All</a></li>
                    <li><a class="dropdown-item" href="#">Dresses</a></li>
                    <li><a class="dropdown-item" href="#">Pants</a></li>
                    <li><a class="dropdown-item" href="#">Skirts</a></li>
                    
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Men
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All</a></li>
                    <li><a class="dropdown-item" href="#">Hoodies</a></li>
                    <li><a class="dropdown-item"  href="#">Shirts</a></li>
                    <li><a class="dropdown-item" href="#">Pants</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Kids</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" >Contact</a>
                </li>
                
              </ul>
            </div>
            </div>
        
      </nav>
    </header>
  )
}

export default Header