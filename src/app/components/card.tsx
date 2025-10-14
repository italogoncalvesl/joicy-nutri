import Image from "next/image";

interface CardQuestionProps {
  isCard: boolean;
  title: string;
  description?: string;
  onClick: () => void;
}

export function CardQuestion({
  isCard,
  title,
  description,
  onClick,
}: CardQuestionProps) {
  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={onClick}
          className={`flex flex-row  bg-white items-center justify-between rounded-lg text-black p-4 border border-1 mb-3 ${
            isCard && "border-purple"
          }`}
        >
          <div className="flex items-start flex-col text-start">
            <p
              className={`font-bold text-purple  
    `}
            >
              {title}
            </p>
            <p className="text-sm text-black/80">{description}</p>
          </div>
          <div className="min-w-14 flex items-center justify-center">
            {isCard ? (
              <div className="flex bg-purple rounded-full h-[26px] w-[26px] items-center justify-center">
                <Image
                  alt="check"
                  src={"/images/check.png"}
                  width={14}
                  height={14}
                  className="mt-[1px]"
                />
              </div>
            ) : (
              <div
                className={`flex border rounded-full h-[26px] w-[26px]  border-purple`}
              ></div>
            )}
          </div>
        </button>
      </div>
    </>
  );
}
