import { useState } from "react";
import Ba from "../../estados/BA";
import Rj from "../../estados/RJ";
import Rs from "../../estados/RS";
import Mg from "../../estados/MG";
import Sp from "../../estados/SP";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "-50px",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-50px",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const [modal, setModal] = useState(false);

  const test = (sigla) => {
    setModal(sigla);
  };

  return (
    <div style={sliderStyles}>
      {modal == "sp" && (
        <Sp modal={modal == "sp"} closeModal={setModal} disable={true} />
      )}
      {modal == "mg" && (
        <Mg modal={modal == "mg"} closeModal={setModal} disable={true} />
      )}
      {modal == "ba" && (
        <Ba modal={modal == "ba"} closeModal={setModal} disable={true} />
      )}
      {modal == "rj" && (
        <Rj modal={modal == "rj"} closeModal={setModal} disable={true} />
      )}
      {modal == "rs" && (
        <Rs modal={modal == "rs"} closeModal={setModal} disable={true} />
      )}
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div
        style={slideStylesWidthBackground}
        onClick={() => test(slides[currentIndex].sigla)}
      ></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
