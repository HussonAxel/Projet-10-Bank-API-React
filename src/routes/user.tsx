import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Section from "../ui/Section/Section";
import TransactionPannel from "../ui/TransactionPannel/TransactionPannel";
import AvailableBalance from "../components/AvailableBalance/AvailableBalance";
import { AvailableBalanceContent } from "../components/AvailableBalance/AvailableBalanceContent";
import ButtonPrimary from "../ui/Buttons/ButtonPrimary";
import Greetings from "../components/Greetings/Greetings";

import { handleButtonStyleOnClickEdit } from "../utils/userDataManager/EditDataName";
import { InitialState } from "../Store/Store.type";

export const Route = createFileRoute("/user")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const token = useSelector((state: InitialState) => state.token);

  useEffect(() => {
    if (!token) {
      navigate({
        to: "/sign-in",
        replace: true,
      });
    }
  }, [token, navigate]);

  return (
    <Section className="flex-col">
      <Greetings />
      <ButtonPrimary
        buttonId="editButton"
        ButtonPrimaryContent="Edit Name"
        className="w-fit no-underline max-h-[40px] text-sm m-auto py-3 px-3 mb-8"
        onClick={handleButtonStyleOnClickEdit}
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
              className=" max-w-full no-underline max-h-[40px] cursor-default w-full md:max-w-[200px] "
            />
          </Link>
        </TransactionPannel>
      ))}
    </Section>
  );
}
