export default function Tasks() {
  return (
    <>
      <header className="flex justify-between items-center py-4 px-15 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-100 h-10 pl-4 rounded bg-white"
        />
        <button className="leading-10 bg-purple-800 rounded px-4 font-bold text-white duration-200 cursor-pointer hover:bg-purple-400 hover:text-black">
          Nova Tarefa
        </button>
      </header>

      <main className="p-15 bg-slate-200 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Tarefas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card de exemplo */}
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold mb-4">Título da tarefa</h3>
            <p>Descrição da tarefa</p>
            <div className="flex justify-end gap-3 mt-4">
              <box-icon name="pencil" className="cursor-pointer hover:fill-purple-500" />
              <box-icon name="trash" className="cursor-pointer hover:fill-purple-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold mb-4">Outra tarefa</h3>
            <p>Outra descrição</p>
            <div className="flex justify-end gap-3 mt-4">
              <box-icon name="pencil" className="cursor-pointer hover:fill-purple-500" />
              <box-icon name="trash" className="cursor-pointer hover:fill-purple-500" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}