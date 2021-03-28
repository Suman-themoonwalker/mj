import React,{Component} from 'react';
export class Footer extends Component{
    render(){
        return(
<footer className="page-footer">

<div className="container text-center text-md-left mt-5">
    <div className="row">
      
      <div className="col-md-2 col-sm-12 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold" id="help">CONTENT</h6>
        <ul className="help list-unstyled" id="ul_help">
          <li className="my-2 color:light"><a href="#">Royalty-free Creative</a></li>
          <li className="my-2"><a href="#">Video</a></li>
          <li className="my-2"><a href="#">Editorial</a></li>
          <li className="my-2"><a href="#">Archieve</a></li>
          <li className="my-2"><a href="#">Custom Content</a></li>
          <li className="my-2"><a href="#">Creative Collections</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold" id="company">SOLUTIONS</h6>
        <ul className="list-unstyled" id="ul_company">
          <li className="my-2"><a href="#">Overview</a></li>
          <li className="my-2"><a href="#">Plans and Pricing</a></li>
          <li className="my-2"><a href="#">Premium Access</a></li>
          <li className="my-2"><a href="#">Assignments</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-4 mb-4">
        <h6 className="text-uppercase font-weight-bold" id="business">TOOLS & SERVICES</h6>
        <ul className="list-unstyled" id="ul_business">
          <li className="my-2"><a href="#">Media Manager</a></li>
          <li className="my-2"><a href="#">Rights and Clearance</a></li>
          <li className="my-2"><a href="#">Plug-ins and Extensions</a></li>
          <li className="my-2"><a href="#">Creative Insights</a></li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">Coupon Partners</h6>
        <ul className="list-unstyled">
          <li className="my-2"><a href="#">Mirraw Coupons</a></li>
          <li className="my-2"><a href="#">Mirraw Offers</a></li>
        </ul>
        <h6 className="text-uppercase font-weight-bold" id="social">Social</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#"><i className="fab fa-twitter-square"></i></a>    
            <a className="logo" href="#"><i className="fab fa-facebook-square"></i>     </a>
            <a className="logo" href=""><i className="fab fa-instagram-square"></i>    </a>
            <a className="logo" href="#"><i className="fab fa-google-play"></i>   </a>
            <a className="logo" href="#"><i className="fab fa-app-store-ios"></i>  </a>
            <a className="logo" href="#"><i className="fab fa-linkedin"></i>  </a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-sm-12 mx-4 mb-4">
        <h6 className="text-uppercase font-weight-bold" id="Press">Press</h6>
        <div className="row" id="sponsors">
          <div className="col" id="dna"><a href="#"><img src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png"/></a></div>
          <div className="col" id="story"><a href="#"><img src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png"/></a></div>
        </div>
        <div className="row" id="sponsors">
          <div className="col" id="payu"><a href="#"><img src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png"/></a></div>
          <div className="col" id="paypal"><a href="#"><img src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png"/></a></div>
        </div>
      </div>

    </div>
</div>

<div className="footer-copyright text-center py-2">
  <p>Copyright&copy;2021, Michael Jackson.com All Rights Reserved.</p>
</div>
</footer>


        );
    }
}