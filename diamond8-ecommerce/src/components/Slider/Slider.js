import React from 'react'
import '../../pages/Home/Home.css'

const Slider = () => {
  return (<>
    <section id="largeScreenSlider" class="carousel featured container-fluid p-0 slide large-screen-slider d-none d-md-none d-lg-block" data-ride="carousel">
    <h4 class="text-center">Featured products</h4>
    <div class="carousel-inner">
      <div class="carousel-item active border border-dark">
        <div class="container  four-item-slide">
          <div class="row flex-nowrap  border border-dark">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/kids/kids-15-24511659644861967SmartCasualKnee-LengthWinterGirlsDresses1.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
            </div>
            
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/kids/kids-15-24511659644861967SmartCasualKnee-LengthWinterGirlsDresses1.webp")} class="card-img-top" alt="..." />
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-2-MenGreyWeirdly_AwesomeFleeceHoodedSweatshirtw.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
          </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-10-b1bb-40fa27babb9b1665974016673FUGAZEEMenBeigePrintedHoodedSweatshirt1.webp")}class="card-img-top" alt="..." />
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container four-item-slide">
          <div class="row flex-nowrap  border border-dark">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-10-b1bb-40fa27babb9b1665974016673FUGAZEEMenBeigePrintedHoodedSweatshirt1.webp")} class="card-img-top" alt="..." />
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-3-SweatshirtsRoadsterMenSweatshirtsRoadsterMen.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/women/dresses/women-dresses-5-floral-print-fit-n-flare-with-waise-tie-up.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
          </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/women/dresses/women-dresses-5-floral-print-fit-n-flare-with-waise-tie-up.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container four-item-slide">
          <div class="row flex-nowrap  border border-dark">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/kids/kids-11-b3b0-33d674fc7ece1667297416911Jackets1.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/kids/kids-16-621088176ATUNGirlsYellowPinkEmbroideredReadytoWearLehengaBlo.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/kids/kids-12--81b2-4daf4e0f356f1673361025389BeyabellaGirlsBlackSweatshirt3.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
          </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card w-100 overflow-hidden">
                <img src={require("../../imgs/imgs/kids/kids-19-625420NauticaBoysBlueWhiteColourblockedCottonPoloCollarT-.webp")} class="card-img-top" alt="..."/>
                <div class="card-body border border overflow-y-auto">
                    <h3 class="item-price">$50</h3>
                  <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
    <a class="carousel-control-prev" data-bs-target="#largeScreenSlider" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" data-bs-target="#largeScreenSlider" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </section>
  <section id="mediumScreenSlider" class="carousel featured slide container-fluid p-0 medium-screen-slider d-none d-md-block d-lg-none" data-ride="carousel">
      <h4 class="text-center">Featured products</h4>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container two-item-slide">
            <div class="row flex-nowrap border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-12-red-printed-hooded-sweatshirt.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$50</h3>
                    <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-3-SweatshirtsRoadsterMenSweatshirtsRoadsterMen.webp" )}class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$50</h3>
                    <h5 class="card-title">Floral Print Fit & Flare Dress</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container two-item-slide">
            <div class="row flex-nowrap border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-8-Mast--Harbour-Men-Sweatshirts-361510662720014-3.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$50</h3>
                    <h5 class="card-title">Mast harbous Men SweatShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eum!.</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-9-WROGN-Men-Charcoal-Printed-Hooded-Sweatshir.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$50</h3>
                    <h5 class="card-title">Charcoal Printed Hooded SweathShirt</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container two-item-slide">
            <div class="row flex-nowrap border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-11-be9c-0d6a864c4c151650284847730WROGNMenMustardYellowSlimFitSolidHoodedSweat.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
                
            </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-6-c8f59ce288501607161669576-3.webp")}  class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container two-item-slide">
            <div class="row flex-nowrap border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/women/skirts/skirts-9-3e9-5cc82a1e8a181568958537894-Varanga-fushcia-floral-printed-tiered-skirt-with-drawstring--4.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Magenta & Yellow Floral Printed Skirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
            </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/women/skirts/skirts-11-ee1e-4dc0-bd44-1da75427356f1623065924826-5.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        
      </div>
      <a class="carousel-control-prev" data-bs-target="#mediumScreenSlider" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" data-bs-target="#mediumScreenSlider" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </section>
    <section id="smallScreenSlider" class="carousel featured slide small-screen-slider p-0 d-block d-md-none d-lg-none" data-ride="carousel">
      <h4 class="text-center ">Featured products</h4>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-11-be9c-0d6a864c4c151650284847730WROGNMenMustardYellowSlimFitSolidHoodedSweat.webp")} class="card-img-top" alt="..."/>  
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-11-be9c-0d6a864c4c151650284847730WROGNMenMustardYellowSlimFitSolidHoodedSweat.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/pants/mens-pants-5a68a-975ca9be6c691666954801112-ADIDAS-Men-Track-Pants-2261666954800485-4.webp")} alt='product'/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/pants/pants-7-66-1.webp")} class="card-img-top" alt="..."/>

                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/women/dresses/women-dresses-12-square-neck-puff-sleeves.webp")} class="card-img-top" alt="..."/> 
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/shirts/men-shirts-HM-Men-Black-Solid-Cotton-T-shirt-Regular-Fi.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/kids/kids-15-24511659644861967SmartCasualKnee-LengthWinterGirlsDresses1.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/hoodies/men-hoodies-4-RelaxedFitHoodie1.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/women/pants/women-pants-9-skinny-high-jeans.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/men/pants/pants-12.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/women/dresses/women-dresses-6-floral-print-with-v-neck-gown-dress.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container one-item-slide  ">
            <div class="row flex-nowrap  border border-dark">
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card w-100 overflow-hidden">
                  <img src={require("../../imgs/imgs/kids/kids-15-24511659644861967SmartCasualKnee-LengthWinterGirlsDresses1.webp")} class="card-img-top" alt="..."/>
                  <div class="card-body border border overflow-y-auto">
                      <h3 class="item-price">$150</h3>
                    <h5 class="card-title">Yellow Printed Hooded SweathShirt</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                     <a href="#" class="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto"> <i class="fa fa-cart-shopping"></i> Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" data-bs-target="#smallScreenSlider" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" data-bs-target="#smallScreenSlider" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </section>
    </>
  )
}

export default Slider