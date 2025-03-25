"use client";

import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import { Switch, Case } from "react-if";
import { CardQuestion } from "../components/card";
import { CardCheckin } from "../components/cardCheckin";

const questions1 = [
  {
    key: 1,
    title: "Joicy",
    description: "Perder peso e melhorar minha saúde e autoestima",
  },
  {
    key: 2,
    title: "Joicy",
    description: "Atingir meu peso ideal e manter a longo prazo",
  },
  {
    key: 3,
    title: "Joicy",
    description:
      "Mudar meus hábitos alimentares e praticar exercícios regularmente",
  },
  {
    key: 4,
    title: "Joicy",
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
    title: "Falta de tempo para preparar refeições e/ou treinar",
  },
  {
    key: 2,
    title:
      "Dificuldade em controlar a alimentação e lidar com a fome emocional",
  },
  {
    key: 3,
    title: "Falta de motivação e disciplina para seguir um plano alimentar",
  },
  {
    key: 4,
    title: "Influências externas, como eventos sociais e rotina familiar",
  },
];

export default function Perguntas() {
  const [isPage, setIsPage] = useState(1);
  const [selectButton, setSelectButton] = useState(0);

  const [isActiveCheckin, setIsActiveCheckin] = useState<0 | 1 | 2>(0);

  function ActiveButton(id: number) {
    setSelectButton(id);
  }

  useEffect(() => {
    setSelectButton(0);
  }, [isPage]);

  return (
    <div className="flex h-screen w-full bg-default flex-col px-7 py-12 justify-between text-black">
      <div className="flex flex-col gap-y-5 ">
        <div className="flex w-full items-center justify-center font-medium">
          <p className="text-black">Metas</p>
        </div>
        <Navigation step={isPage} />

        <Switch>
          <Case condition={isPage === 1}>
            <span className="font-bold text-black text-xl w-4/5">
              Que resultados você quer alcançar quando se trata de perca de
              peso?
            </span>
            <div className="flex flex-col">
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
              <span className="font-bold text-black text-xl w-4/5">
                Qual seu nível básico de atividade?
              </span>
              <span className="font-semibold text-black/60 text-sm w-4/5">
                Não incluimos treinos - contamos isso separadamente.
              </span>
            </div>
            <div className="flex flex-col">
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
            <span className="font-bold text-black text-xl">
              Quais são os maiores obstáculos que te impedem de manter uma
              rotina saudável para a perda de peso?
            </span>
            <div className="flex flex-col">
              {questions3.map((item) => (
                <CardQuestion
                  onClick={() => ActiveButton(item.key)}
                  key={item.key}
                  isCard={item.key === selectButton}
                  title={item.title}
                />
              ))}
            </div>
          </Case>
          <Case condition={isPage === 4}>
            <div className="flex flex-col w-full">
              <span className="font-bold text-black text-xl w-4/5">
                Conte um pouco sobre você
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                Selecione o sexo que devemos usar para calcular suas
                necessidades calóricas:
              </span>
              <div className="flex flex-row gap-x-4">
                <CardCheckin
                  title="Masculino"
                  onclick={() => setIsActiveCheckin(setIsActiveCheckin())}
                  isActive={isActiveCheckin === 1}
                />
                <CardCheckin
                  title="Feminino"
                  onclick={() => setIsActiveCheckin(!isActiveCheckin)}
                  isActive={isActiveCheckin === 2}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                Qual sua idade?
              </span>
              <input
                className="flex p-4 rounded-md no-underline bg-no-repeat"
                placeholder="Sua idade"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                Qual sua altura?
              </span>
              <div className="flex flex-row gap-x-4">
                <input
                  className="flex p-4 rounded-md no-underline bg-no-repeat"
                  placeholder="Sua idade"
                />
                <div className="flex w-full h-full bg-purple/20 text-lg font-bold items-center justify-center text-purple rounded-md  ">
                  cm
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-black/60 text-sm w-4/5 mb-2">
                Qaunto você pesa?
              </span>
              <div className="flex flex-row gap-x-4">
                <input
                  className="flex p-4 rounded-md no-underline bg-no-repeat"
                  placeholder="Sua idade"
                />
                <div className="flex w-full h-full bg-purple/20 text-lg font-bold items-center justify-center text-purple rounded-md  ">
                  kg
                </div>
              </div>
            </div>
          </Case>
        </Switch>
      </div>
      {selectButton != 0 && (
        <button
          onClick={() => setIsPage(isPage + 1)}
          className="bg-purple w-full rounded-lg px-4 py-3 text-white font-bold text-center"
        >
          Próximo
        </button>
      )}
    </div>
  );
}
