import i3 from  './Images/i3.jpg';
import i4 from  './Images/i3.jpg';
import i5 from  './Images/i3.jpg';
import'./Slider.css';
function Silder (){
    return(
        <><div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={i3} className="d-block w-97 height-400" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={i4} className="d-block w-97 height-400" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={i5} className="d-block w-97 height-400" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </>
    );
}
export default Silder;