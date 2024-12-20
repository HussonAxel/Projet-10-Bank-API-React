import React, { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { TransactionProps } from "./Transactions.type";

const Transactions: React.FC<TransactionProps> = ({
  dateTransaction,
  descriptionTransaction,
  amountTransaction,
  balance,
  typeOfTransaction,
  categoryOfTransaction,
  notesForTransaction,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-4/5 mx-auto border-b-2 border-gray-200">
      <div
        className="grid grid-cols-[40px_1fr_1fr_1fr_1fr] p-4 cursor-pointer bg-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <article className="flex items-center">
          {isExpanded ? (
            <BiUpArrow className="text-gray-500" />
          ) : (
            <BiDownArrow className="text-gray-500" />
          )}
        </article>
        <span className="text-gray-600">{dateTransaction}</span>
        <span>{descriptionTransaction}</span>
        <span className="text-right">{amountTransaction}</span>
        <span className="text-right">{balance}</span>
      </div>

      {isExpanded && (
        <div className="pl-14 p-4 bg-white space-y-3">
          <div>
            <span className="text-gray-600">Transaction Type:</span>
            {typeOfTransaction}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600">Category:</span>
            <span>{categoryOfTransaction}</span>
            <button className="p-1 rounded-full">
              <FaPencilAlt className="w-3 h-3 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600">Notes:</span>
            <span>{notesForTransaction}</span>
            <button className="p-1 rounded-full">
              <FaPencilAlt className="w-3 h-3 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Transactions;
