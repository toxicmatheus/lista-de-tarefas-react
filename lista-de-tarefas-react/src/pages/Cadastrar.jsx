

export default function Register() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h1 to="/" className="mb-5 inline-block">
          Voltar
        </h1>
        <h1 className="font-bold text-xl mb-6">Cadastre-se</h1>
        <form className="flex flex-col w-80">
          <label htmlFor="nome" className="uppercase text-xs font-bold mb-2 block">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            placeholder="seu nome"
            className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
          />

          <label htmlFor="email" className="uppercase text-xs font-bold mb-2 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@email.com"
            className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
          />

          <label htmlFor="senha" className="uppercase text-xs font-bold mb-2 block">
            Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="********"
            className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
          />

          <button
            type="button"
            className="w-full h-10 rounded bg-purple-400 hover:bg-purple-600 duration-200 hover:text-white font-bold"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}