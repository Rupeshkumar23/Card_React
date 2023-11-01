import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
function Tour({ tour, removeTour }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleRemoveTour = () => {
    removeTour(tour.id);
  };

  return (
    <Card className="tour rounded p-3">
      <div className="img-container">
        <Card.Img variant="top" src={tour.img} alt="Pic" className="Img_card" />
        <span className="close-btn" onClick={handleRemoveTour}>
        <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <Card.Body className="tour-info">
        <Card.Title className="mb-2 text-danger bg-white p-1">{tour.city}</Card.Title>
        <Card.Subtitle className="mb-2 text-white bg-danger p-1">{tour.name}</Card.Subtitle>
        <Card.Text className='para'>
          {showInfo && <p>{tour.info}</p>}
        </Card.Text>
        <Button className="Btn" onClick={() => setShowInfo(!showInfo)}>
      {showInfo ? (
        <span>
         Hide Info  <FontAwesomeIcon icon={faCaretUp} />
        </span>
      ) : (
        <span>
           Show Info <FontAwesomeIcon icon={faCaretDown} />
        </span>
      )}
    </Button>
      </Card.Body>
    </Card>
  );
}

export default Tour;
