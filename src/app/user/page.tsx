"use client"
import { useState } from "react";

export default function User() {
  const [produtoSelecionado, setProdutoSelecionado] = useState<string>('');
  const [produtos, setProdutos] = useState<string[]>(['Produto A', 'Produto B']);
  const [confirmacao, setConfirmacao] = useState<boolean>(false);

  const selecionarProduto = (produto: string) => {
    setProdutoSelecionado(produto);
    setConfirmacao(false);
  }

  const confirmarSelecao  = () => {
    setProdutoSelecionado('');
    setConfirmacao(true);
  }

  return (
    <>
      {/* Production Hero */}
      <div
        className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      >
        <div className="flex justify-center items-center">
          <h1 className="ml-3 text-3xl font-bold">Participante</h1>
        </div>
      </div>

      {/* Exibe o produto selecionado */}
      {!produtoSelecionado ? (
        <p className="text-sm text-center">Nenhum produto selecionado</p>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-sm">Produto selecionado: <span className="font-semibold text-md">( {produtoSelecionado} )</span></p>
          <button 
            onClick={confirmarSelecao}
            className="mt-2 group rounded-lg dark:bg-neutral-800/30 border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
              CONFIRMAR
          </button>
        </div>
      ) }

      {/* options list */}        
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        {produtos.map((produto, index) => (
          <button
            key={index} 
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            onClick={() => selecionarProduto(produto)}
          >
            <div className="flex flex-col items-center">
              <h2 className="mb-3 text-2xl font-semibold">
                {produto}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                Descrição do produto
              </p>
            </div>
          </button>
        ))} 
      </div>
    </>
  )
}