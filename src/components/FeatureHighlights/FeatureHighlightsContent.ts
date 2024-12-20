import { FeatureHighlightsProps } from "./FeatureHighlights.type";
import iconChat from "../../assets/static/icons/icon-chat.png";
import iconMoney from "../../assets/static/icons/icon-money.png";
import iconSecurity from "../../assets/static/icons/icon-security.png";

export const FeatureHighlightsData: FeatureHighlightsProps[] = [
  {
    title: "You are our #1 priority",
    content:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. ",
    picture: iconChat,
  },
  {
    title: "More savings means higher rates",
    content:
      "The more you save with us, the higher your interest rate will be! ",
    picture: iconMoney,
  },
  {
    title: "Security you can trust",
    content:
      "We use top of the line encryption to make sure your data and money is always safe. ",
    picture: iconSecurity,
  },
];
