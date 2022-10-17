import { Chart } from 'react-google-charts';

// TODO: get for number on votes

export const data = [
    ['Candidatos', 'Votos'],
    ['Jorge Loredo', 4],
    ['Pablo Ibarra', 8],
    ['Alan Martinez', 6]
]

export const options = {
    title: 'Resultado de votaciones ',
    is3D: true
}

export const ResultsPage = () => {
    return (
        <>
            <Chart
                chartType='PieChart'
                width='100%'
                height='600px'
                data={data}
                options={options}
            />
            {/* <div className='d-flex justify-content-center text-white'>
                <div className='p-5 bg-iceberg rounded-start border border-secondary mt-4'>
                    <h1>Candidatos</h1>
                    <hr />
                    <form className='mx-5'>
                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                <i className="fa-solid fa-user me-2"></i>
                                Candidato 1
                            </label>

                            <p className='mb-0'>Nombre:</p>
                            <input 
                                type="text" 
                                className="form-control me-2"
                                placeholder='Jorge Loredo'
                                disabled
                            />
                            <p className='mt-2 mb-0'>Partido:</p>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder='X'
                                disabled
                            /> 
                            <hr />
                        </div>

                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                <i className="fa-solid fa-user me-2"></i>
                                Candidato 2
                            </label>

                            <p className='mb-0'>Nombre:</p>
                            <input 
                                type="text" 
                                className="form-control me-2"
                                placeholder='Pablo Ibarra'
                                disabled
                            />
                            <p className='mt-2 mb-0'>Partido:</p>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder='Y'
                                disabled
                            />
                            <hr />
                        </div>

                        <div className="mb-3">
                            <label 
                                className="form-label"
                            >
                                <i className="fa-solid fa-user me-2"></i>   
                                Candidato 3
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5"
                                placeholder='Alan Eduardo Martinez Rodriguez'
                                disabled
                            />
                        </div>
                    </form>
                </div>

                <div className='p-5 bg-iceberg rounded-end border border-secondary mt-4'>
                    <Chart
                        chartType='PieChart'
                        width='100%'
                        height='500px'
                        data={data}
                        options={options}
                    />
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
            </div> */}
        </>
    )
}
