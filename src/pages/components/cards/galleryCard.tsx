import Card from "@/pages/components/cards/card";

type GalleryCardInterface = {
  url: string;
  title: string;
  summary?: string;
};
export default function GalleryCard({
  url,
  title,
  summary,
}: GalleryCardInterface) {
  return (
    <div className="p-5 flex justify-center">
      <Card>
        <img src={url} role="presentation" alt="img" />
        <div className="py-8 px-4">
          <h6 className="text-lg font-bold">{title}</h6>
          <div className="mt-4">
            <p>{summary}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
