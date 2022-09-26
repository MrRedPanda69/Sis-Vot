

export const CadidatesPage = () => {
    return (
        <>
            <div className='d-flex justify-content-evenly px-2'>
                <div className='p-3 bg-iceberg rounded border border-secondary mt-4'>
                    <h5>Candidato Jorge Loredo</h5>
                    <hr />
                    <form className='mx-3'>
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Nombre(s)
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5 pe-5"
                                placeholder='Jorge Gregorio'
                                disabled
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
                                className="form-control me-5 pe-5"
                                placeholder='Loredo Hernandez'
                                disabled
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
                                disabled
                                placeholder='Partido X'
                            />
                        </div>
                    </form>
                </div>
                
                <div className='p-3 bg-iceberg rounded border border-secondary mt-4'>
                    <h5>Candidato Pablo Ibarra</h5>
                    <hr />
                    <form className='mx-3'>
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Nombre(s)
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5 pe-5"
                                placeholder='Pablo Cesar'
                                disabled
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
                                className="form-control me-5 pe-5"
                                placeholder='Ibarra Briones'
                                disabled
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
                                disabled
                                placeholder='Partido Y'
                            />
                        </div>
                    </form>
                </div>

                <div className='p-3 bg-iceberg rounded border border-secondary mt-4'>
                    <h5>Candidato Alan Martinez</h5>
                    <hr />
                    <form className='mx-3'>
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                Nombre(s)
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5 pe-5"
                                placeholder='Alan Eduardo'
                                disabled
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
                                className="form-control me-5 pe-5"
                                placeholder='Martinez Vela'
                                disabled
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
                                disabled
                                placeholder='Partido Z'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
