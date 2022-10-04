import { useState } from 'react';

export const VotePage = () => {
    const [vote, setVote] = useState('');

    const submitForm = e => {
        e.preventDefault();
    }

    return (
        <>
            <div className='d-flex justify-content-center text-white'>
                <div className='p-5 bg-iceberg rounded-start border border-secondary mt-5'>
                    <h2>Vota por un candidato</h2>
                    <hr />
                    <form 
                        onSubmit={submitForm}
                        className='mx-4'
                    >
                        <div>
                            <select className='form-select form-select-lg'>
                                <option defaultValue={true}>-- Selecciona un candidato --</option>
                                <option value={1}>Jorge Gregorio Loredo Hernandez</option>
                                <option value={2}>Pablo Cesar Ibarra Briones</option>
                                <option value={3}>Alan Eduardo Martinez Rodriguez</option>
                            </select>

                            <div className='mt-2 text-end'>
                                <button className='btn bg-prussian-blue text-white px-4 mt-2'>
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
