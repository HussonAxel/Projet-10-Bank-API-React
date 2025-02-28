import { createFileRoute } from "@tanstack/react-router";
import Section from "../ui/Section/Section";
import AvailableBalance from "../components/AvailableBalance/AvailableBalance";
import { AvailableBalanceContent } from "../components/AvailableBalance/AvailableBalanceContent";
import TransactionPannel from "../ui/TransactionPannel/TransactionPannel";
import Transactions from "../components/Transactions/Transactions";
import { TransactionsContent } from "../components/Transactions/TransactionsContent";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { InitialState } from "../Store/Store.type";

export const Route = createFileRoute("/transactions")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const token = useSelector((state: InitialState) => state.token);

  useEffect(() => {
    if (!token) {
      navigate({
        to: "/login",
        replace: true,
      });
    }
  });

  return (
    <Section className="bg-[#dfe6ed] flex flex-col">
      <TransactionPannel className="w-full text-center max-h-[180px] border-2 border-[#c3cfd9] content-center justify-center">
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
