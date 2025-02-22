import HeroContent from "../../components/HeroContent/HeroContent";

const BannerPicture = () => {
  return (
    <>
      <div
        className={`bg-hero-pattern relative bg-cover bg-no-repeat w-full h-[300px] bg-[0%_27%] md:h-[400px]`}
      >
        <HeroContent />;
      </div>
    </>
  );
};

export default BannerPicture;
