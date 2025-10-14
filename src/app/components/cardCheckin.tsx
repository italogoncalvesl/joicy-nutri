import Image from "next/image";

interface CardCheckinProps {
  onclick: () => void;
  isActive: boolean;
  title: string;
}

export function CardCheckin({ onclick, isActive, title }: CardCheckinProps) {
  return (
    <button
      onClick={onclick}
      className={`flex flex-row w-full bg-white items-center justify-center rounded-lg text-black p-4 border border-1 gap-x-4 ${
        isActive && "border-purple"
      }`}
    >
      <p className="text-lg">{title}</p>
      <div>
        {isActive ? (
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
  );
}
