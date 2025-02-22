import { FeatureHighlightsData } from "./FeatureHighlightsContent";

const FeatureHighlights: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start">
      {FeatureHighlightsData.map((feature, index) => (
        <article
          key={index}
          className="flex flex-col flex-1 text-center p-9 items-center m-auto"
        >
          <img
            src={feature.picture}
            className="w-full h-full max-h-[152px] max-w-[152px] rounded-full border-[10px] border-[#00bc77] p-4"
          />
          <h2 className="color-[##222] text-xl font-bold my-5">
            {feature.title}
          </h2>
          <p className="color-[#2e4255]">{feature.content}</p>
        </article>
      ))}
    </section>
  );
};

export default FeatureHighlights;
