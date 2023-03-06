// pages/index.tsx
import Button from "./components/button";
import Carousel from "./components/carousel";
import type { NextPageWithLayout } from "./_app";
import "react-alice-carousel/lib/alice-carousel.css";
import GalleryCard from "@/pages/components/cards/galleryCard";
import GalleryCarousel from "@/pages/components/galleryCarousel";
import Card from "./components/cards/card";
import RankingCard from "@/pages/components/cards/rankingTopCard";
import TrendingCard from "@/pages/components/cards/trendingCard";
import CarouselSeg from "@/pages/components/segments/carouselSeg";
import { WalletIcon } from "@heroicons/react/24/outline";
import CreateAndSellCard from "@/pages/components/cards/createAndSetCard";
import InfoLayout from "./components/layout/infoLayout";

const galleryCards = [
  // eslint-disable-next-line react/jsx-no-undef
  <GalleryCard
    url="https://neftify.vercel.app/images/items/3.jpg"
    title="Chito x Givenchy"
    summary="Testing NFT Card"
  />,
  <GalleryCard
    url="https://neftify.vercel.app/images/items/3.jpg"
    title="Chito x Givenchy"
    summary="Testing NFT Card"
  />,
  <GalleryCard
    url="https://neftify.vercel.app/images/items/3.jpg"
    title="Chito x Givenchy"
    summary="Testing NFT Card"
  />,
  <GalleryCard
    url="https://neftify.vercel.app/images/items/3.jpg"
    title="Chito x Givenchy"
    summary="Testing NFT Card"
  />,
  <GalleryCard
    url="https://neftify.vercel.app/images/items/3.jpg"
    title="Chito x Givenchy"
    summary="Testing NFT Card"
  />,
];

const trendingCards = [
  <TrendingCard
    url="https://neftify.vercel.app/images/items/9.jpg"
    title="Liquid Wave"
    maker="https://neftify.vercel.app/images/avatar/4.jpg"
  />,
  <TrendingCard
    url="https://neftify.vercel.app/images/items/9.jpg"
    title="Liquid Wave"
    maker="https://neftify.vercel.app/images/avatar/4.jpg"
  />,
  <TrendingCard
    url="https://neftify.vercel.app/images/items/9.jpg"
    title="Liquid Wave"
    maker="https://neftify.vercel.app/images/avatar/4.jpg"
  />,
  <TrendingCard
    url="https://neftify.vercel.app/images/items/9.jpg"
    title="Liquid Wave"
    maker="https://neftify.vercel.app/images/avatar/4.jpg"
  />,
  <TrendingCard
    url="https://neftify.vercel.app/images/items/9.jpg"
    title="Liquid Wave"
    maker="https://neftify.vercel.app/images/avatar/4.jpg"
  />,
  <TrendingCard
    url="https://neftify.vercel.app/images/items/9.jpg"
    title="Liquid Wave"
    maker="https://neftify.vercel.app/images/avatar/4.jpg"
  />,
];

const Page: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <Intro />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Ranking />
      </section>
      <section>
        <Trending />
      </section>
      <section>
        <CreateAndSell />
      </section>
      <section>
        <InfoLayout
          header={() => {
            return (
              <>
                <h1>Browse by category</h1>
                <p>Here are a few reasons why you should choose Neftify</p>
              </>
            );
          }}
          className="grid-cols-4 gap-y-8 gap-x-8"
        >
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg font-bold py-4 text-center">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-center text-lg   py-4 font-bold">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg text-center  py-4 font-bold">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg text-center font-bold  py-4">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg text-center font-bold  py-4">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg text-center font-bold  py-4">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg text-center font-bold  py-4">Art</h6>
          </Card>
          <Card>
            <img
              src="https://neftify.vercel.app/images/items/14.jpg"
              role="presentation"
              alt="img"
            />
            <h6 className="text-lg text-center font-bold  py-4">Art</h6>
          </Card>
        </InfoLayout>
      </section>
    </>
  );
};

const Intro = () => {
  return (
    <div className="container flex flex-col  items-center md:flex-row md:justify-between">
      <div className="segment max-w-[600px] py-20">
        <div className="flex flex-col ">
          <h1>
            Discover , Collect and Sell
            <span className="text-blue-600"> extraordinary NFTs</span>
          </h1>
          <p className="text-lg text-gray-500 my-10">
            on the world's first & largest NFT marketplace
          </p>
        </div>
        <div className="flex space-x-10">
          <Button color="primary" className="py-2 w-40 text-white">
            Explore
          </Button>
          <Button
            color="white"
            className="py-2 w-40 border-[1px] border-primary "
          >
            Create
          </Button>
        </div>
      </div>

      <div className="segment ">
        <div className=" relative">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <CarouselSeg title="Notable Drops">
      <GalleryCarousel items={galleryCards} />
    </CarouselSeg>
  );
};

const Ranking = () => {
  return (
    <InfoLayout
      header={() => {
        return (
          <>
            <h1>Top collections over last 7 days</h1>
            <p>Here are a few reasons why you should choose Neftify</p>
          </>
        );
      }}
      className="grid-cols-3 gap-y-8 gap-x-4"
    >
      <RankingCard
        url="https://neftify.vercel.app/images/items/1.jpg"
        title="SandBox"
        price="136305.63"
        num={1}
        priceFluctuation="+104.35"
      />
      <RankingCard
        url="https://neftify.vercel.app/images/items/1.jpg"
        title="SandBox"
        price="136305.63"
        num={2}
        priceFluctuation="+104.35"
      />
      <RankingCard
        url="https://neftify.vercel.app/images/items/1.jpg"
        title="SandBox"
        price="136305.63"
        num={3}
        priceFluctuation="+104.35"
      />
      <RankingCard
        url="https://neftify.vercel.app/images/items/1.jpg"
        title="SandBox"
        price="136305.63"
        num={4}
        priceFluctuation="+104.35"
      />
      <RankingCard
        url="https://neftify.vercel.app/images/items/1.jpg"
        title="SandBox"
        price="136305.63"
        num={5}
        priceFluctuation="+104.35"
      />
      <RankingCard
        url="https://neftify.vercel.app/images/items/1.jpg"
        title="SandBox"
        price="136305.63"
        num={6}
        priceFluctuation="+104.35"
      />
    </InfoLayout>
  );
};

const Trending = () => {
  return (
    <CarouselSeg title="Trending Items">
      <GalleryCarousel items={trendingCards} />
    </CarouselSeg>
  );
};

const CreateAndSell = () => {
  return (
    <InfoLayout
      header={() => {
        return (
          <>
            <h1>Top collections over last 7 days</h1>
            <p>Here are a few reasons why you should choose Neftify</p>
          </>
        );
      }}
      className="grid-cols-2 gap-y-20 "
    >
      <CreateAndSellCard
        title="Set up your Wallet"
        summary="Once you’ve set up your wallet of choice, connect it to Neftify by clicking the wallet icon in the top right corner. Learn about the wallets we support."
        icon={<WalletIcon className="w-8 h-8 text-white" />}
      />
      <CreateAndSellCard
        title="Set up your Wallet"
        summary="Once you’ve set up your wallet of choice, connect it to Neftify by clicking the wallet icon in the top right corner. Learn about the wallets we support."
        icon={<WalletIcon className="w-8 h-8 text-white" />}
      />
      <CreateAndSellCard
        title="Set up your Wallet"
        summary="Once you’ve set up your wallet of choice, connect it to Neftify by clicking the wallet icon in the top right corner. Learn about the wallets we support."
        icon={<WalletIcon className="w-8 h-8 text-white" />}
      />
      <CreateAndSellCard
        title="Set up your Wallet"
        summary="Once you’ve set up your wallet of choice, connect it to Neftify by clicking the wallet icon in the top right corner. Learn about the wallets we support."
        icon={<WalletIcon className="w-8 h-8 text-white" />}
      />
    </InfoLayout>
  );
};
export default Page;
