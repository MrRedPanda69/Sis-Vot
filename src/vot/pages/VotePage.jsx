

export const VotePage = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='p-5 bg-iceberg rounded-start border border-secondary mt-4'>
                    <h1>Vota por un candidato</h1>
                    <hr />
                    <form className='mx-5'>
                        <div className="mb-3">
                            <select className='form-select form-select-lg'>
                                <option selected>-- Seleccina un candidato --</option>
                                <option value={1}>Jorge Gregorio Loredo Hernandez</option>
                                <option value={2}>Pablo Cesar Ibarra Briones</option>
                                <option value={3}>Alan Eduardo Martinez Rodriguez</option>
                            </select>

                            <div className='mt-2 text-end'>
                                <button className='btn bg-prussian-blue text-white'>
                                    Votar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>    
        </>
    )
}
