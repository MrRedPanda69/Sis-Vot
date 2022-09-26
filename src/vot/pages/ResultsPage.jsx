

export const ResultsPage = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='p-5 bg-iceberg rounded-start border border-secondary mt-4'>
                    <h1>Candidatos</h1>
                    <hr />
                    <form className='mx-5'>
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Candidato 1
                            </label>
                            <input 
                                type="text" 
                                className="form-control mx-5"
                                placeholder='Jorge Gregorio Loredo Hernandez'
                                disabled
                            />
                        </div>

                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Candidato 2
                            </label>
                            <input 
                                type="text" 
                                className="form-control mx-5"
                                placeholder='Pablo Cesar Ibarra Briones'
                                disabled
                            />
                        </div>

                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Candidato 2
                            </label>
                            <input 
                                type="text" 
                                className="form-control mx-5"
                                placeholder='Alan Eduardo Martinez Rodriguez'
                                disabled
                            />
                        </div>
                    </form>
                </div>

                <div className='p-5 bg-iceberg rounded-end border border-secondary mt-4'>
                    <h1>Votos</h1>
                    <hr />
                    <form className='mx-5'>
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Votos
                            </label>
                            <input 
                                type="text" 
                                className="form-control mx-5"
                                placeholder='8'
                                disabled
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Votos
                            </label>
                            <input 
                                type="text" 
                                className="form-control mx-5"
                                placeholder='7'
                                disabled
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Votos
                            </label>
                            <input 
                                type="text" 
                                className="form-control mx-5"
                                placeholder='10'
                                disabled
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
