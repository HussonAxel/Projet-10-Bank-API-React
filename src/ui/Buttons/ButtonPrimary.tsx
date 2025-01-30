interface ButtonPrimaryProps {
  ButtonPrimaryContent: string;
  className?: string;
  onClick?: () => void;
  buttonId?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  ButtonPrimaryContent,
  className,
  onClick,
  buttonId,
}) => {
  return (
    <button
      id={buttonId}
      onClick={onClick}
      className={`block w-full py-2 px-4 text-lg font-bold mt-4 bg-[#00bc77] border-[#00bc77] text-white text-center underline ${className}`}
    >
      {ButtonPrimaryContent}
    </button>
  );
};

export default ButtonPrimary;
