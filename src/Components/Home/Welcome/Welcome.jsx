import React, { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Context from "../../../context";
import welcome from "./imgs/welcome.png";
import hill from "./imgs/rock.svg";
import snow from "./imgs/snowflake.svg";
import wave from "./imgs/wave.svg";
import chem from "./imgs/bxs-flask.svg";
import phys from "./imgs/scales-2-line.svg";
import mech from "./imgs/mech.png";
import "./Welcome.css";

import useWindowDimensions from "../../windowResizeHook";
import { useRef } from "react";

export default function Welcome() {
  const { setShowPrice } = useContext(Context);

  let widthSwith = useRef(false)

  const { width } = useWindowDimensions();

  function onShowPrice() {
    const body = document.getElementById("body");
    body.classList.add("body-hidden");
    setShowPrice(true);
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
	if (width <= 545) { 
		if (!widthSwith.current) {
			widthSwith.current = true
			setCurrentSlide(1);
		}
	} else {
		widthSwith.current = false
	}
    
  }, [width]);

  return (
    <>
      <div className="home-welcome" id="welcome">
        <div className="welcome__main">
          <div className="welcome__main-title">
            <h1 className="welcome__main-title_main">
              Лидер в лабораторных
              <br />
              испытаниях грунтов
            </h1>
            <h3 className="welcome__main-title_sub">
              В нашей лаборатории для выполнения испытаний грунтов мы используем
              самое передовое оборудование отечественных и зарубежных
              производителей
            </h3>
            <button className="main-title_btn" onClick={onShowPrice}>
              Посмотреть цены
            </button>
          </div>
          <div className="main_title_img">
            <img src={welcome} alt="Welcome" />
          </div>
        </div>
        {width < 545 ? (
          <>
            <div className="welcome-objects">
              <div
                className="noclicker"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              ></div>

              <Carousel
                className="customers-carousel"
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                infiniteLoop={true}
                autoPlay={true}
                swipeable={false}
                stopOnHover={false}
                transitionTime={20000}
                dynamicHeight={false}
                showIndicators={false}
                useKeyboardArrows={false}
                interval={20000}
                selectedItem={currentSlide}
                onChange={(index) => setCurrentSlide(index)}
              >
                <div className="customers-object">
                  <div className="table table-welcome">
                    <div className="cart">
                      <div className="labs-item">
                        <img src={phys} alt="" />
                        Определение
                        <br />
                        физических
                        <br />
                        свойств грунтов
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={mech} alt="" />
                        Определение
                        <br />
                        механических
                        <br />
                        свойств грунтов
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={wave} alt="" />
                        Динамическая
                        <br />
                        лаборатория
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={snow} alt="" />
                        Мерзлотная
                        <br />
                        лаборатория
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={hill} alt="" />
                        Скальная
                        <br />
                        лаборатория
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={chem} alt="" />
                        Химическая
                        <br />
                        лаборатория
                      </div>
                    </div>
                  </div>
                </div>
                <div className="customers-object">
                  <div className="table table-welcome">
                    <div className="cart">
                      <div className="labs-item">
                        <img src={phys} alt="" />
                        Определение
                        <br />
                        физических
                        <br />
                        свойств грунтов
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={mech} alt="" />
                        Определение
                        <br />
                        механических
                        <br />
                        свойств грунтов
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={wave} alt="" />
                        Динамическая
                        <br />
                        лаборатория
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={snow} alt="" />
                        Мерзлотная
                        <br />
                        лаборатория
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={hill} alt="" />
                        Скальная
                        <br />
                        лаборатория
                      </div>
                    </div>
                    <div className="cart">
                      <div className="labs-item">
                        <img src={chem} alt="" />
                        Химическая
                        <br />
                        лаборатория
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </>
        ) : (
          <div className="welcome__labs">
            <div className="labs_blur"></div>
            <div className="labs-item">
              <img src={phys} alt="" />
              Определение
              <br />
              физических
              <br />
              свойств грунтов
            </div>
            <div className="labs-item">
              <img src={mech} alt="" />
              Определение
              <br />
              механических
              <br />
              свойств грунтов
            </div>
            <div className="labs-item">
              <img src={wave} alt="" />
              Динамическая
              <br />
              лаборатория
            </div>
            <div className="labs-item">
              <img src={snow} alt="" />
              Мерзлотная
              <br />
              лаборатория
            </div>
            <div className="labs-item">
              <img src={hill} alt="" />
              Скальная
              <br />
              лаборатория
            </div>
            <div className="labs-item">
              <img src={chem} alt="" />
              Химическая
              <br />
              лаборатория
            </div>
          </div>
        )}
      </div>
    </>
  );
}
