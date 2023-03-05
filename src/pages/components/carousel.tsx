import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as OriginCarousel } from "react-responsive-carousel";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

export default function Carousel() {
  return (
    <OriginCarousel
      autoPlay
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      className="max-w-[600px]"
      renderArrowPrev={(clickHandler, hasNext, label) => {
        return (
          <p
            onClick={clickHandler}
            className="absolute right-16 -bottom-12 arrow-button"
          >
            <ArrowLongLeftIcon className="arrow-icon" />
          </p>
        );
      }}
      renderArrowNext={(clickHandler, hasNext, label) => {
        return (
          <p
            onClick={clickHandler}
            className="absolute right-3 -bottom-12 arrow-button"
          >
            <ArrowLongRightIcon className="arrow-icon" />
          </p>
        );
      }}
    >
      <div>
        <img src="https://neftify.vercel.app/images/items/10.jpg" alt="1" />
      </div>
      <div>
        <img src="https://neftify.vercel.app/images/items/12.jpg" alt="1" />
      </div>
      <div>
        <img src="https://neftify.vercel.app/images/items/9.jpg" alt="1" />
      </div>
      <div>
        <img src=" https://neftify.vercel.app/images/items/11.jpg" alt="1" />
      </div>
    </OriginCarousel>
  );
}
