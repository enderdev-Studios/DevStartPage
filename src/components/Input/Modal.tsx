export default function Modal({ state, onSubmit, onClick }: { state: boolean, onSubmit: any, onClick: any }) {
    const modalState = state ? "solid" : "hidden";
    const backdrop = state ? "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" : "hidden"
    return (
        <div className={backdrop}>
                <div className={`relative rounded-xl inset-0 dark:bg-[#181825] dark:text-[#cdd6f4] text-[#4c4f69] bg-[#e6e9ef] h-max w-96 m-2 ml-32 p-3 ${modalState}`} >

                    <div className="relative w-full p-2 mb-2">
                        <button onClick={onClick} className="absolute cursor-pointer text-2xl top-0 right-0"><i className='bx bx-x'></i></button>
                    </div>
                    <h3 className="text-2xl font-bold ml-2">Crear Acceso Directo</h3>
                    <form
                        className="flex flex-col m-3"
                        onSubmit={onSubmit}>
                        <label className="text-lg">Nombre:</label>
                        <input type="text" name="name" placeholder="Google" className="mb-2 p-2 rounded text-[#5c5f77] dark:text-[#a6adc8] m-2 outline-0 focus:border-b-2 focus:border-[#7c7f93]" required autoComplete="off" />
                        <label className="text-lg">URL</label>
                        <input type="text" name="url" placeholder="https://google.com" className="mb-2 p-2 rounded text-[#5c5f77] dark:text-[#a6adc8] m-2 outline-0 focus:border-b-2 focus:border-[#7c7f93]" required autoComplete="off" />
                        <button type="submit" className="dark:bg-[#89b4fa] dark:hover:bg-[#6ca0f5] bg-[#1e66f5] hover:bg-[#1c56c9] text-[#4c4f69] dark:text-[#cdd6f4] font-bold py-1 px-2 rounded mt-2 cursor-pointer">Create</button>
                    </form>
                </div>

        </div>
    );
};
