import { TransactionPannelProps } from "./TransactionPannel.type";

const TransactionPannel: React.FC<TransactionPannelProps> = ({
  children,
  className,
}) => {
  return (
    <article
      className={`flex flex-col md:flex-row w-4/5 bg-white mb-8 p-6 mx-auto ${className}`}
    >
      {children}
    </article>
  );
};

export default TransactionPannel;
