import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const API_IMG="https://image.tmdb.org/t/p/w500";

function MovieBox({id,title,poster_path,vote_average,release_date,overview}) {
 const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
return (
<div className="card text- center bg-secondary mb.3">
       <div  className="card-body">
        <img className="card-img-top" src={API_IMG+poster_path} alt=""/>
        <div  className="card-body">
        <button type="button" className="btn btn-dark"  onClick={handleShow}>View More</button>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img className="card-img-top" src={API_IMG+poster_path} alt=""/>
            <h6>{id}</h6>
            <h1>{title}</h1>
            <h6>Overview:<br></br>{overview}</h6>
            <h6>Release Date :<br></br>{release_date}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
       
        </Modal.Footer>
      </Modal>
      </div>
    </div>
      </div>
)
};


export default MovieBox;



// I try to use modal to create movie card  but I can not  because  hook (useState) can not define .
/*const API_IMG="https://image.tmdb.org/t/p/w500";

const  MovieBox = ({title,poster_path,vote_average,release_date,overview}) => {
    return (
<div className="card text- center bg-secondary mb.3">
       <div  className="card-body">
        <img className="card-img-top" src={API_IMG+poster_path} alt=""/>
        <div  className="card-body">

      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        
       <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">

           <div class="modal-content">
           <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
               <h4 class="modal-title">Modal Header</h4>
            </div>
                <div class="modal-body">
                    <img className="card-img-top" src={API_IMG+poster_path} alt=""/>
                    <h3>{title}</h3>
                    <h5>Release Date:{release_date}</h5>
                    <bar></bar>
                    <h5>Overview</h5>
                    <p>{overview}</p>
                </div>
                <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
)
}*/



