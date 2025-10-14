"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import { Switch, Case } from "react-if";
import { CardQuestion } from "../components/card";
import { CardCheckin } from "../components/cardCheckin";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const questions1 = [
  {
    key: 1,
    title: "Autoestima",
    description: "Perder peso e melhorar minha saúde e autoestima",
  },
  {
    key: 2,
    title: "Manutenção",
    description: "Atingir meu peso ideal e manter a longo prazo",
  },
  {
    key: 3,
    title: "Mudança",
    description:
      "Mudar meus hábitos alimentares e praticar exercícios regularmente",
  },
  {
    key: 4,
    title: "Saúde",
    description: "Reduzir medidas e ter mais disposição no dia a dia",
  },
];

const questions2 = [
  {
    key: 1,
    title: "Não muito ativo",
    description:
      "Passa a maior parte do dia sentando (ex: caixa de banco, trabalha no escritório...).",
  },
  {
    key: 2,
    title: "Levemente ativo",
    description: "Passa boa parte do dia de pé (ex: professor, vendedor...).",
  },
  {
    key: 3,
    title: "Ativo",
    description:
      "Passa boa parte do dia fazendo alguma atividade física (ex: garçom, carteiro...).",
  },
  {
    key: 4,
    title: "Bastante ativo",
    description:
      "Passa a maior parte do dia fazendo atividade física pesada (ex: carpinteiro, ciclista, entregador...).",
  },
];

const questions3 = [
  {
    key: 1,
    title: "Tempo",
    description: "Falta de tempo para preparar refeições e/ou treinar",
  },
  {
    key: 2,
    title: "Emoções",
    description:
      "Dificuldade em controlar a alimentação e lidar com a fome emocional",
  },
  {
    key: 3,
    title: "Disciplina",
    description:
      "Falta de motivação e disciplina para seguir um plano alimentar",
  },
  {
    key: 4,
    title: "Ambientes",
    description: "Influências externas, como eventos sociais e rotina familiar",
  },
];

export default function Perguntas() {
  const [isPage, setIsPage] = useState(1);
  const [selectButton, setSelectButton] = useState(0);

  const [isActiveCheckin, setIsActiveCheckin] = useState<0 | 1 | 2>(0);

  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  function ActiveButton(id: number) {
    if (selectButton === id) {
      setSelectButton(0);
    } else {
      setSelectButton(id);
    }
  }

  function ActiveCardGender(i: 0 | 1 | 2) {
    if (isActiveCheckin === i) {
      setIsActiveCheckin(0);
    } else {
      setIsActiveCheckin(i);
    }
  }

  useEffect(() => {
    setSelectButton(0);
  }, [isPage]);

  return (
    <div className="flex max-h-screen w-full md:w-full flex-col px-7 mt-4 xl:mt-10 justify-center items-center text-black">
      <div className=" h-[88%] md:w-[80%] lg:w-[50%] w-full px-7 justify-end flex flex-col 2xl:w-[30%] ">
        <Navigation step={isPage} />

        <Switch>
          <Case condition={isPage === 1}>
            <span className="font-bold text-black text-lg w-4/5 mt-3">
              Que resultados você quer alcançar quando se trata de perca de
              peso?
            </span>
            <div className="flex flex-col mt-4">
              {questions1.map((item) => (
                <CardQuestion
                  onClick={() => ActiveButton(item.key)}
                  key={item.key}
                  isCard={item.key === selectButton}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </Case>
          <Case condition={isPage === 2}>
            <div className="flex flex-col w-full">
              <span className="font-bold text-black text-lg w-4/5 mt-3">
                Qual seu nível básico de atividade?
              </span>
              <span className="font-semibold text-black/60 text-sm w-4/5">
                Não incluimos treinos - contamos isso separadamente.
              </span>
            </div>
            <div className="flex flex-col mt-3">
              {questions2.map((item) => (
                <CardQuestion
                  onClick={() => ActiveButton(item.key)}
                  key={item.key}
                  isCard={item.key === selectButton}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </Case>
          <Case condition={isPage === 3}>
            <span className="font-bold text-black text-xl mt-3">
              Quais são os maiores obstáculos que te impedem de manter uma
              rotina saudável para a perda de peso?
            </span>
            <div className="flex flex-col mt-3">
              {questions3.map((item) => (
                <CardQuestion
                  onClick={() => ActiveButton(item.key)}
                  key={item.key}
                  isCard={item.key === selectButton}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </Case>
          <Case condition={isPage === 4}>
            <div className="flex flex-col w-full">
              <span className="font-bold text-black text-xl w-4/5 mt-3">
                Conte um pouco sobre você
              </span>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col mt-3">
                <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                  Selecione o sexo que devemos usar para calcular suas
                  necessidades calóricas:
                </span>
                <div className="flex flex-row gap-x-2 mt-3">
                  <CardCheckin
                    title="Masculino"
                    onclick={() => ActiveCardGender(1)}
                    isActive={isActiveCheckin === 1}
                  />
                  <CardCheckin
                    title="Feminino"
                    onclick={() => ActiveCardGender(2)}
                    isActive={isActiveCheckin === 2}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                  Qual sua idade?
                </span>
                <Input
                  className="flex p-4 rounded-md no-underline focus:border-purple bg-white shadow-none"
                  placeholder="Sua idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  type="number"
                />
              </div>
              <div className="flex flex-col h-full">
                <span className="font-semibold text-black/60 text-sm w-4/5 mb-2 ">
                  Qual sua altura?
                </span>
                <div className="flex flex-row gap-x-3">
                  <Input
                    className="flex p-4 h-full rounded-md no-underline focus:border-purple bg-white shadow-none"
                    placeholder="Sua idade"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    type="number"
                  />
                  <div className="flex w-24 min-h-full bg-purple/20 text-lg font-bold items-center justify-center text-purple rounded-md  ">
                    cm
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                  Quanto você pesa?
                </span>
                <div className="flex flex-row gap-x-3">
                  <Input
                    className="flex p-4 h-full rounded-md no-underline focus:border-purple bg-white shadow-none"
                    placeholder="Sua idade"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    type="number"
                  />
                  <div className="flex w-24 min-h-full bg-purple/20 text-lg font-bold items-center justify-center text-purple rounded-md  ">
                    kg
                  </div>
                </div>
              </div>
            </div>
          </Case>
        </Switch>
        {selectButton != 0 && isPage !== 4 && (
          <button
            onClick={() => setIsPage(isPage + 1)}
            className="bg-purple w-full rounded-lg px-4 py-3 mt-4 mb-3 text-white font-bold text-center"
          >
            Próximo
          </button>
        )}
        {isActiveCheckin !== 0 && idade && altura && peso && isPage === 4 && (
          <Link
            href="/resultado"
            className="bg-purple w-full rounded-lg px-4 py-3 mt-4 mb-3 text-white font-bold text-center"
          >
            Próximo
          </Link>
        )}
      </div>
    </div>
  );
}
