import { useState } from "react";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import people from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, description, image, job } = people[index];

  const nextPerson = () => {
    const newIndex = index + 1;
    setIndex(checkIndex(newIndex));
  };
  const prevPerson = () => {
    const newIndex = index - 1;
    setIndex(checkIndex(newIndex));
  };

  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    if (index === randomIndex) {
      setIndex(checkIndex(randomIndex + 1));
    } else {
      setIndex(checkIndex(randomIndex));
    }
  };

  const checkIndex = (theIndex) => {
    if (theIndex > people.length - 1) {
      return 0;
    } else if (theIndex < 0) {
      return people.length - 1;
    } else {
      return theIndex;
    }
  };
  return (
    <section className="card">
      <div className="image-quote">
        <span className="quote-item">
          <FaQuoteRight className="quote" />
        </span>
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <div className="info-div">
        <p className="info">{description}</p>
      </div>
      <div className="left-right-icons">
        <button className="icons" onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className="icons" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="surprise-btn" onClick={() => randomPerson()}>
        Suprise Me
      </button>
    </section>
  );
};

export default Review;
