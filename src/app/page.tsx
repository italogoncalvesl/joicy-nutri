"use client";

import Image from "next/image";
import Link from "next/link";

const listJoicy = [
  { text: "Avaliação nutricioal" },
  { text: "Plano alimentar personalizado" },
  { text: "Controle de peso" },
  { text: "Hipertrofia muscular" },
  { text: "Tratamento de doenças" },
  { text: "Melhora da qualidade de vida" },
  { text: "Suporte individualizado" },
];

export default function Home() {
  return (
    <div className="bg-[#362A4A] min-h-screen w-full text-white flex items-center justify-start flex-col font-montserrat">
      <div className="text-center flex flex-col mt-12 w-full items-center">
        <p className="font-grotesk text-2xl w-full mb-[2px]">Joicy Nutri</p>
        <div className="text-sm ">
          <p>Nutricionista - Especializada em </p>
          <p>Nutrição Clinica e Esportiva | CRN 11954</p>
        </div>
      </div>

      <p className="text-4xl mt-8 font-grotesk md:mt-12 mb-2 lg:mt-8 md:mb-0">
        Serviços:
      </p>

      <div className="flex flex-col-reverse md:flex-row md:gap-x-2 items-center mt-3 w-[68%] 2xl:w-[30%] lg:w-[40%] h-full text-[#2B223A] md:items-start">
        {/* INICIO DOS BLOCOS BRANCOS */}
        <div className="bg-white mb-2 rounded-lg sw-full h-full items-center flex flex-col py-4 px-2 shadow-xl text-xs md:h-[412px] md:w-1/2">
          <div className="w-full flex flex-col items-center">
            <Image
              alt="Foto de Joicy"
              src={"/images/foto.png"}
              width={300}
              height={300}
              className="w-3/4 pb-2 md:w-full md:px-5 lg:w-full xl:w-full 2xl:w-[96%]"
            />
            <p className="text-[#866DAE] font-grotesk text-lg text-center ">
              Joicy Nutri
            </p>
            <p className="font-montserrat font- text-xs mt-[-6px] text-[#C2A380] mb-3">
              Atendimento Presencial & Online
            </p>
            {listJoicy.map((index) => (
              <div
                key={index.text}
                className="flex-row flex gap-x-1 font-normal items-start text-start w-full pl-2 lg:mt-[2px] md:mt-[1px] xl:mt-[0]"
              >
                <Image
                  alt="check"
                  src={"vetores/Verifica.svg"}
                  width={12}
                  height={12}
                />
                {index.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-1 w-full md:w-[100%] md:h-[412px] gap-y-2 mb-2">
          {/* BLOCO DE LOCALIZAÇÃO */}
          <div className="bg-white rounded-lg h-full items-center flex flex-col py-2 px-2 shadow-xl">
            <div className="flex flex-row gap-x-1">
              <Image
                src={"vetores/Localizacao.svg"}
                alt="Icone de localização"
                width={20}
                height={20}
                className="pb-2"
              />
              <p className="font-groteskBold">Missão Velha-CE</p>
            </div>

            <p className="font-montserrat font-extrabold text-xs text-center mt-1">
              GALERIA PE, JOÃO BOSCO DE LIMA<br></br>{" "}
              <span className="font-normal">
                R. Cel, José Dantas, 1254 - Centro
              </span>
            </p>

            <a
              href={"https://wa.me/88998050369"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B1A1CA] w-[90%] h-[40px] py-1 mt-2 flex flex-row justify-center items-center px-2 gap-x-2 rounded-md shadow-inner shadow-black/20"
            >
              <Image
                src={"vetores/Whatsapp.svg"}
                alt="Icone de whats"
                width={26}
                height={26}
              />
              <p className="text-xs text-start font-bold">
                AGENDE AQUI O <br />
                SEU ATENDIMENTO
              </p>
            </a>
          </div>
          {/* BLOCO DE INSCRIÇÃO */}
          <div className="bg-white rounded-lg h-full items-center justify-center flex flex-col py-2 px-2 shadow-xl">
            <div className="flex flex-row gap-x-1 justify-center items-center mx-4">
              <Image
                src={"/vetores/Chave.svg"}
                alt="Icone da chave"
                width={26}
                height={26}
                className="pb-2 mr-[-10px]"
              />
              <div className="flex flex-col">
                <p className="font-groteskBold text-center pl-1">
                  DESAFIO VIRADA DE
                </p>
                <p className="font-groteskBold text-center pl-1 mt-[-5px]">
                  CHAVE 2.0
                </p>
              </div>
            </div>

            <Link
              href="/questionsHome"
              className="bg-[#B1A1CA] w-[90%] h-[40px] py-1 mt-2 flex flex-row justify-center items-center px-2 gap-x-2 rounded-md shadow-inner shadow-black/20"
            >
              <Image
                src={"vetores/Entrar.svg"}
                alt="Icone de entrar"
                width={27}
                height={27}
              />
              <p className="text-sm text-center font-montserrat font-extrabold">
                INSCRIÇÃO
              </p>
            </Link>
          </div>
          <div className="bg-white rounded-lg h-full items-center flex flex-col py-2 px-2 shadow-xl">
            <div className="flex flex-col justify-center items-center gap-x-1">
              <Image
                src={"vetores/PDF.svg"}
                alt="Icone de localização"
                width={40}
                height={40}
                className="pb-2 mt-2 mb-1"
              />
              <p className="font-bold text-xs text-center mt-[-3px]">
                Tenha acesso a ferramentas
              </p>
              <p className="font-bold text-xs text-center mt-[-3px]">
                que vão te ajudar a ter mais
              </p>
              <p className="font-bold text-xs text-center mt-[-3px]">
                autonomia e praticidade.
              </p>
            </div>

            <button className="bg-[#B1A1CA] w-[90%] justify-center py-1 mt-2 flex flex-row items-center px-2 gap-x-2 rounded-md shadow-inner shadow-black/20">
              <Image
                src={"/vetores/Ebook.svg"}
                alt="Icone de ebook"
                width={28}
                height={28}
              />
              <div>
                <p className="font-extrabold text-xs text-start">VER E-BOOKS</p>
                <p className="font-extrabold text-xs text-start mt-[-2]">
                  DISPONÍVEIS
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex text-center justify-center items-center flex-col">
        <p className="font-grotesk text-3xl w-[60%] text-center mt-8 md:mt-10 md:w-[40%] md:text-4xl">
          O que falam os pacientes?
        </p>
        <p className="font-extrabold mt-3 lg:text-xl">EXCELENTE</p>
        <div className="flex-row flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              alt="Estrelas"
              src={"vetores/Estrela.svg"}
              width={22}
              height={22}
              key={i}
            />
          ))}
        </div>
        <div className="border border-[#C2A380] px-2 py-1 rounded-lg text-sm mt-6 lg:text-sm">
          <p>VEJA ALGUNS</p>
          <p className="font-semibold mt-[-6px]">DEPOIMENTOS</p>
        </div>
        <Image
          alt="flecha"
          src={"vetores/Flecha.svg"}
          width={20}
          height={20}
          className="mt-2 rotate-90 md:w-[25px] md:mt-3 "
        />
      </div>
    </div>
  );
}
