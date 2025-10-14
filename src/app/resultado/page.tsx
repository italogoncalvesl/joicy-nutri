import Image from "next/image";
import Link from "next/link";

export default function Resultado() {
  return (
    <div className="flex w-full h-screen bg-purple/30 items-center justify-center px-8 flex-col">
      <Image
        alt="Logo"
        src={"/images/logoRoxa.png"}
        width={190}
        height={50}
        className="absolute top-10"
      />
      <div className="bg-white h-fit w-fit md:w-[56%] xl:w-[30%] 2xl:w-[25%] p-5 rounded-lg items-center justify-center flex flex-col shadow-md">
        <Image
          alt="Avatar"
          src={"/images/avatar.png"}
          width={200}
          height={200}
        />
        <span className="font-bold  text-purple mt-3 text-center">
          Ótimo! Suas respostas mostram que o Desafio Virada de Chave é ideal
          para você.
        </span>
        <span className="text-black/80 text-center">
          Agora, você será direcionado para a finalização da sua inscrição.
        </span>
        <Link
          href="/pagamento"
          className="w-full flex bg-purple rounded-md items-center justify-center mt-4"
        >
          <p className="text-white font-semibold py-3">Prosseguir</p>
        </Link>
      </div>
    </div>
  );
}
