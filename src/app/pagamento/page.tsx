export default function Pagamento() {
  return (
    <div className="flex w-full h-screen bg-purple/30 items-center justify-center px-8">
      <div className="bg-white h-fit w-fit p-5 rounded-lg items-center justify-center flex flex-col shadow-md">
        <p className="font-bold text-3xl">Ingresso</p>
        <div className=" flex flex-col mt-4">
          <span> - Planejamento alimentar semanalmente</span>
          <span> - ⁠Grupo do desafio</span>
          <span> - ⁠Materiais Exclusivos do desafio </span>
          <span> - ⁠Premiação para o melhor resultado</span>
        </div>
        <span className="mt-4">De R$999,00 por apenas 3x de </span>
        <span className="text-4xl font-bold">R$9,90</span>
        <button className="w-full flex bg-purple rounded-md items-center justify-center mt-4">
          <p className="text-white font-semibold py-3">Prosseguir</p>
        </button>
      </div>
    </div>
  );
}
