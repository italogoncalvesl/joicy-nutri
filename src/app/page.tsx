"use client";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-purple h-screen w-full text-white">
      <div className="bg-purple h-[90%] w-full px-7 justify-end flex flex-col ">
        <div className="flex mb-6">
          <Image
            alt="Logo"
            src={"/images/logoBranca.png"}
            width={190}
            height={50}
          />
        </div>
        <div className="flex gap-y-2 flex-col">
          <h1 className="font-semibold text-xl">
            Parabéns por dar o primeiro passo rumo à sua transformação!{" "}
            <br></br>
            Estamos aqui para te ajudar nesse processo de perda de peso de forma
            saudável e sustentável.
          </h1>
          <h2>
            Para começar com o pé direito, precisamos conhecer um pouco mais
            sobre você.
          </h2>
          <p>
            Responda às perguntas a seguir com atenção, pois elas vão nos ajudar
            a entender seus objetivos e desafios, garantindo que você tenha o
            melhor suporte possível durante o desafio.
          </p>
          <p>Vamos lá?</p>
          <div className="flex flex-row w-full items-center justify-center h-fit gap-x-3 mt-3">
            <ArrowLeft size="30" color="#FFFFFF" className="mx-3" />
            <Link
              href="/perguntas"
              className="bg-white w-full rounded-lg px-4 py-3 text-purple font-bold text-center"
            >
              Próximo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
