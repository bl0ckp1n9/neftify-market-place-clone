import GalleryCarousel from "@/pages/components/galleryCarousel";

export default function CarouselSeg({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="py-10">
        <h1 className="font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
}
