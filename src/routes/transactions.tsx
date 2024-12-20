import { createFileRoute } from "@tanstack/react-router";
import Section from "../ui/Section/Section";
import AvailableBalance from "../components/AvailableBalance/AvailableBalance";
import { AvailableBalanceContent } from "../components/AvailableBalance/AvailableBalanceContent";
import TransactionPannel from "../ui/TransactionPannel/TransactionPannel";
import Transactions from "../components/Transactions/Transactions";
import { TransactionsContent } from "../components/Transactions/TransactionsContent";

export const Route = createFileRoute("/transactions")({
  component: Index,
});

function Index() {
  return (
    <Section className="bg-[#dfe6ed] flex flex-col">
      <TransactionPannel className="w-full text-center max-h-[180px] border-2 border-[#c3cfd9] content-center">
        <AvailableBalance
          ArgentBankType={AvailableBalanceContent[0].ArgentBankType}
          ArgentBankCheckingModifier={
            AvailableBalanceContent[0].ArgentBankCheckingModifier
          }
          BalanceValue={AvailableBalanceContent[0].BalanceValue}
          Balance={AvailableBalanceContent[0].Balance}
          className="gap-2 flex flex-col"
        />
      </TransactionPannel>
      {TransactionsContent.map((transaction, index) => (
        <Transactions
          key={index}
          dateTransaction={transaction.dateTransaction}
          descriptionTransaction={transaction.descriptionTransaction}
          amountTransaction={transaction.amountTransaction}
          balance={transaction.balance}
          typeOfTransaction={transaction.typeOfTransaction}
          categoryOfTransaction={transaction.categoryOfTransaction}
        />
      ))}
    </Section>
  );
}
