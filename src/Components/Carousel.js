import React,{Component} from 'react';
export class Carousel extends Component{
    render(){
        return(
            <section>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="1000" data-pause="hover">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block  w-100" src="https://wallpapercave.com/wp/OMUmjXr.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://wallpapercave.com/wp/0BwNV7Z.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://wallpapercave.com/wp/fDFHYtc.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://wallpapercave.com/wp/QAsMHtE.jpg" alt="Fourth slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </section>
    );
    }
}