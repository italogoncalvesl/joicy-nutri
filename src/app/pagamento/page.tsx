import { ArrowCircleRight2 } from "iconsax-react";
import Image from "next/image";

export default function Pagamento() {
  return (
    <div className="flex w-full h-screen bg-purple/30 items-center justify-center px-8 flex-col">
      <Image
        alt="Logo"
        src={"/images/logoRoxa.png"}
        width={190}
        height={50}
        className="absolute top-10"
      />
      <div className="bg-white h-fit w-fit p-5 rounded-lg items-center justify-center flex flex-col shadow-md">
        <p className="font-bold text-3xl text-purple">Ingresso</p>
        <div className=" flex flex-col mt-4 gap-y-4">
          <div className="flex flex-row gap-x-3">
            <ArrowCircleRight2 size="24" color="#A172C2" />
            <span>Planejamento alimentar atualizado semanalmente</span>
          </div>
          <div className="flex flex-row gap-x-3">
            <ArrowCircleRight2 size="24" color="#A172C2" />
            <span>⁠Grupo do desafio</span>
          </div>
          <div className="flex flex-row gap-x-3">
            <ArrowCircleRight2 size="24" color="#A172C2" />
            <span>⁠Materiais Exclusivos do desafio </span>
          </div>
          <div className="flex flex-row gap-x-3">
            <ArrowCircleRight2 size="24" color="#A172C2" />
            <span>⁠Premiação para o melhor resultado</span>
          </div>
        </div>
        <span className="mt-4">
          De <span className="text-red-500 font-semibold">R$999,00</span> por
          apenas 3x de{" "}
        </span>
        <span className="text-6xl font-bold text-green-500">R$12,90</span>
        <a
          href="https://wa.me/558898050369?text=Ol%C3%A1%2C%20Joicy%20Nutri%21%0AFiz%20minha%20inscri%C3%A7%C3%A3o%20no%20Desafio%20Virada%20de%20Chave%202.0%20e%20gostaria%20de%20receber%20a%20chave%20para%20pagamento%20via%20PIX%20ou%20o%20link%20para%20pagamento%20no%20cart%C3%A3o%20de%20cr%C3%A9dito.%0A%0AAguardo%20as%20informa%C3%A7%C3%B5es%20para%20concluir%20minha%20inscri%C3%A7%C3%A3o.%0A%0AObrigado%28a%29%21"
          target="_blank"
          className="w-full flex bg-purple rounded-md items-center justify-center mt-4"
        >
          <p className="text-white font-semibold py-3">Concluir inscrição</p>
        </a>
      </div>
    </div>
  );
}
