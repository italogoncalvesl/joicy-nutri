"use client";
import { ArrowLeft } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export default function QuestionsHome() {
  return (
    <div className="bg-purple h-screen w-full text-white flex justify-center">
      <div className=" h-[88%] md:w-[80%] lg:w-[50%] w-full px-7 justify-end flex flex-col 2xl:w-[30%] ">
        <div className="flex mb-6">
          <Image
            alt="Logo"
            src={"/images/logoBranca.png"}
            width={190}
            height={50}
            className="2xl:w-[250px]"
          />
        </div>
        <div className="flex gap-y-2 flex-col ">
          <p className="font-semibold text-xl 2xl:text-3xl">
            Parabéns por dar o primeiro passo rumo à sua transformação!{" "}
          </p>
          <p className="2xl:text-2xl">
            Para começar com o pé direito, precisamos conhecer um pouco mais
            sobre você.
          </p>
          <p className="2xl:text-xl">
            Responda às perguntas a seguir com atenção.
          </p>
          <p className="2xl:text-2xl">Vamos lá?</p>
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
