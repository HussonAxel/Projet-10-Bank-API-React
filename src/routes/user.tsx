import { createFileRoute } from "@tanstack/react-router";
import Section from "../ui/Section/Section";
import TransactionPannel from "../ui/TransactionPannel/TransactionPannel";
import AvailableBalance from "../components/AvailableBalance/AvailableBalance";
import { AvailableBalanceContent } from "../components/AvailableBalance/AvailableBalanceContent";
import ButtonPrimary from "../ui/Buttons/ButtonPrimary";
import Greetings from "../components/Greetings/Greetings";

export const Route = createFileRoute("/user")({
  component: Index,
});

function Index() {
  return (
    <Section className="flex-col">
      <Greetings firstName="Tony " lastName="Jarvis!" />
      <ButtonPrimary
        ButtonPrimaryContent="Edit name"
        className="max-w-[93px] no-underline max-h-[40px] text-sm m-auto py-3 px-3 mb-8"
      />
      {AvailableBalanceContent.map((balance, index) => (
        <TransactionPannel className="flex justify-between">
          <AvailableBalance
            key={index}
            ArgentBankType={balance.ArgentBankType}
            ArgentBankCheckingModifier={balance.ArgentBankCheckingModifier}
            BalanceValue={balance.BalanceValue}
            Balance={balance.Balance}
          />
          <ButtonPrimary
            ButtonPrimaryContent={"View Transaction"}
            className="max-w-[200px] no-underline max-h-[40px] cursor-default"
          />
        </TransactionPannel>
      ))}
    </Section>
  );
}
