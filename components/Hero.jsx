import React from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const textRef = React.useRef();

  const labels = ["Website", "App", "Design", "Webshop"];

  React.useEffect(() => {
    if (currentIndex === labels.length) {
      setCurrentIndex(0);
    }
    const textElement = textRef.current;

    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="hero">
        <div className="hero-info">
          <h2 className="main-title">
            Wij zijn jouw eindbestemming voor een{" "}
            <span ref={textRef}>{labels[currentIndex]}</span>
          </h2>

          <p className="body-paragraph">
            Jouw online project start hier. Van web- tot appdevelopment. BYTE24
            brengt jouw online project tot leven.
          </p>

          <button className="hero-cta-btn">
            Gratis e-book Software ontwikkeling uitbesteden
          </button>
        </div>

        <div className="animation">
          <img src="./hero-animation.gif" alt="" />
        </div>
      </div>
    </>
  );
}
