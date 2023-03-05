import Card from "@/pages/components/cards/card";

type RankingCardInterface = {
  num: number;
  url: string;
  title: string;
  price: string;
  priceFluctuation: string;
};

export default function RankingCard({
  num,
  url,
  title,
  price,
  priceFluctuation,
}: RankingCardInterface) {
  return (
    <Card className="flex items-center justify-between  py-4 px-4 ">
      <div className="flex items-center gap-x-4 ">
        <p className="text-xl">{num}</p>
        <img src={url} alt="img" className="h-[50px] w-[50px] rounded-full" />
        <div>
          <h6>{title}</h6>
          <p>{price}</p>
        </div>
      </div>

      <div>
        <p className="text-green-500 text-xl ">{priceFluctuation}</p>
      </div>
    </Card>
  );
}
