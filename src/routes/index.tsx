import { createFileRoute } from "@tanstack/react-router";
import BannerPicture from "../ui/BannerPicture/BannerPicture";
import FeatureHighlights from "../components/FeatureHighlights/FeatureHighlights";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <BannerPicture />
      <FeatureHighlights />
    </div>
  );
}
