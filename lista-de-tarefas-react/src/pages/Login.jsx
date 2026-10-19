

export default function Login() {
  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h1 className="font-bold text-xl mb-6">Seja bem-vindo(a)</h1>
        <form className="flex flex-col w-80">
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

          <h1 className="my-5">
            Cadastre-se
          </h1>

          <button
            type="button"
            className="w-full h-10 rounded bg-purple-400 hover:bg-purple-600 duration-200 hover:text-white font-bold"
          >
            Logar
          </button>
        </form>
      </div>
    </div>
  )
}