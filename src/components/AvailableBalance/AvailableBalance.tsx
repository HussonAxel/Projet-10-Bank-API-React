import { AvailableBalanceProps } from "./AvailableBalance.type";

const AvailableBalance: React.FC<AvailableBalanceProps> = ({
  ArgentBankType,
  ArgentBankCheckingModifier,
  BalanceValue,
  Balance,
  className,
}) => {
  return (
    <div className={`text-slate-700 ${className}`}>
      <h3 className="text-base">
        {ArgentBankType} {ArgentBankCheckingModifier}
      </h3>
      <p className="text-[40px] font-bold">{BalanceValue}</p>
      <p>{Balance}</p>
    </div>
  );
};

export default AvailableBalance;
