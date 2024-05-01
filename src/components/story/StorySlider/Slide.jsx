import React from "react";
import "./StorySlider.css";
import { useSelector } from "react-redux";

const Slide = ({ slides, imgIndex }) => {
    const { isSmallScreen } = useSelector((state) => state.layout);
    return (
        <div className="slides" style={{ width: "100%", height: "100%" }}>
            {slides &&
                slides.map((slide, index) => (
                    <React.Fragment key={index}>
                        <img
                            className="slide_image"
                            style={{
                                display: index === imgIndex ? "block" : "none",
                                width: "100%",
                                height: isSmallScreen ? "100vh" : "90vh",
                            }}
                            src={slide?.imageUrl}
                            alt={`Slide ${index}`}
                        />
                        <div
                            className="slide_text"
                            style={{ display: index === imgIndex ? "block" : "none" }}
                            key={`text-${index}`}
                        >
                            <h1 className="slide_heading">{slide?.heading}</h1>
                            <p className="slide_p">{slide?.description}</p>
                        </div>
                    </React.Fragment>
                ))}
        </div>
    );
};

export default Slide;