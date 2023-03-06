import { ArrowRightIcon, WalletIcon } from "@heroicons/react/24/outline";
import Card from "@/pages/components/cards/card";

type CreateAndSellCardInterface = {
  title: string;
  summary: string;
  icon: React.ReactNode;
};

export default function CreateAndSellCard({
  title,
  summary,
  icon,
}: CreateAndSellCardInterface) {
  return (
    <div className="flex justify-center">
      <div>
        <div className="bg-primary p-4 w-fit rounded-lg absolute  -translate-y-1/2 translate-x-1/3">
          {icon}
        </div>
        <Card className="relative py-12 px-8 rounded-2xl">
          <h6>{title}</h6>
          <p className="text-gray-400 mt-4">{summary}</p>
          <button className="text-primary mt-4 flex items-center gap-x-1">
            <span>Explore</span> <ArrowRightIcon className="h-5 w-5" />
          </button>
        </Card>
      </div>
    </div>
  );
}
