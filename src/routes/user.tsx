import { createFileRoute, Link } from "@tanstack/react-router";
import Section from "../ui/Section/Section";
import TransactionPannel from "../ui/TransactionPannel/TransactionPannel";
import AvailableBalance from "../components/AvailableBalance/AvailableBalance";
import { AvailableBalanceContent } from "../components/AvailableBalance/AvailableBalanceContent";
import ButtonPrimary from "../ui/Buttons/ButtonPrimary";
import Greetings from "../components/Greetings/Greetings";
import EditDataName from "../utils/userDataManager/EditDataName";

export const Route = createFileRoute("/user")({
  component: Index,
});

function Index() {
  const { editDataName } = EditDataName();

  return (
    <Section className="flex-col">
      <Greetings firstName="Tony " lastName="Jarvis!" />
      <ButtonPrimary
        buttonId="editButton"
        ButtonPrimaryContent="Edit"
        className="max-w-[93px] no-underline max-h-[40px] text-sm m-auto py-3 px-3 mb-8"
        onClick={editDataName}
      />
      {AvailableBalanceContent.map((balance, index) => (
        <TransactionPannel className="flex justify-between" key={index}>
          <AvailableBalance
            ArgentBankType={balance.ArgentBankType}
            ArgentBankCheckingModifier={balance.ArgentBankCheckingModifier}
            BalanceValue={balance.BalanceValue}
            Balance={balance.Balance}
          />
          <Link to="/transactions">
            <ButtonPrimary
              ButtonPrimaryContent={"View Transactions"}
              className="max-w-[200px] no-underline max-h-[40px] cursor-default"
            />
          </Link>
        </TransactionPannel>
      ))}
    </Section>
  );
}
