import React from 'react';
import img1 from './../../images/first.jpg'
import img2 from './../../images/second.jpg'
import img3 from './../../images/third.jpg'
import './HappyClients.css'
const HappyClients = () => {
    return (
      <div>
   <h3 className="text-center mt-5">Happy Clients Says</h3>
<div className="client-container">
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img1} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Saqline Shabbir</h5>
        <p class="card-text">This is a best travel Agency ever. i enjoyed a  lot . first of all thanks to everyone who helped us and thanks SS Travel</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img2} class="img-fluid rounded-start" alt="..."/>
    </div>

    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Steven second</h5>
        <p class="card-text">Best and reasonable agency ever i enjoyed travelling with them . i will travel again soon. </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ahad Raja Mir</h5>
        <p class="card-text">My on of the dream was to visit Niagara falls and SS travel made this easy thanks to SS Travel</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            
        </div>

      </div>
    );
};

export default HappyClients;