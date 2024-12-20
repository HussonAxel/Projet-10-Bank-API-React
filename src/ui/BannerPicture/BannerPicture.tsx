import HeroContent from "../../components/HeroContent/HeroContent";

const BannerPicture = () => {
  return (
    <>
      <div
        className={`bg-hero-pattern relative bg-cover bg-no-repeat w-full h-[400px] bg-[0%_33%] `}
      >
        <HeroContent />;
      </div>
    </>
  );
};

export default BannerPicture;
