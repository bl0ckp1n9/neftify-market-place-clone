import AliceCarousel from "react-alice-carousel";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
export default function GalleryCarousel({ items }: { items: any[] }) {
  return (
    <AliceCarousel
      items={items}
      disableDotsControls
      responsive={responsive}
      renderPrevButton={() => {
        return (
          <p className="absolute right-16 -top-16 arrow-button ">
            <ArrowLongLeftIcon className="arrow-icon" />
          </p>
        );
      }}
      renderNextButton={() => {
        return (
          <p className="absolute right-3 -top-16 arrow-button ">
            <ArrowLongRightIcon className="arrow-icon" />
          </p>
        );
      }}
    />
  );
}
