

export const AddCandidatePage = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='p-5 bg-iceberg rounded-start border border-secondary mt-4'>
                    <h1>Agregar Candidato</h1>
                    <hr />
                    <form 
                        className='mx-5'
                        onSubmit={e => e.preventDefault()}
                    >
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Nombre(s)
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5 px-5"
                            />
                        </div>

                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Apellidos
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5"
                            />
                        </div>

                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Partido
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5"
                            />
                        </div>

                        <div className='mt-2 text-end'>
                            <button className='btn bg-prussian-blue text-white'>
                                Agregar Candidato
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
