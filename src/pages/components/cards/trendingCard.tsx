import Card from "@/pages/components/cards/card";
import Button from "../button";

type GalleryCardInterface = {
  url: string;
  maker: string;
  title: string;
};
export default function TrendingCard({
  url,
  title,
  maker,
}: GalleryCardInterface) {
  return (
    <div className="p-5 flex justify-center">
      <Card>
        <div className="py-8 px-4">
          <div className="relative">
            <img src={url} role="presentation" alt="img" />
            <img
              src={maker}
              role="maker"
              alt="maker"
              className="absolute -translate-y-1/2 right-5 rounded-full w-12"
            />
          </div>

          <div className="py-8 px-4">
            <h6 className="text-lg font-bold">{title}</h6>
            <div className="mt-4">
              <div className="flex justify-between">
                <p className="text-lg text-gray-400">Auction</p>
                <p className="text-primary font-bold">Bid: 0.55ETH</p>
              </div>
              <div className="flex justify-between text-gray-400 font-bold mt-3">
                <p className="text-lg">3h 1m 50s</p>
                <p>0.55ETH</p>
              </div>
            </div>
          </div>
          <Button color="primary" className="px-8 py-4 w-full text-white">
            <p>Price a Bid</p>
          </Button>
        </div>
      </Card>
    </div>
  );
}
