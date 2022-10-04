import { useState } from 'react';

export const AddCandidatePage = () => {
    const [candidateFirstName, setCandidateFirstName] = useState('');
    const [candidateLastName, setCandidateLastName] = useState('');
    const [candidateParty, setCandidateParty] = useState('');

    const submitForm = async e => {
        e.preventDefault();
        
        setCandidateFirstName('');
        setCandidateLastName('');
        setCandidateParty('');
    }

    return (
        <>
            <div className='d-flex justify-content-center text-white'>
                <div className='p-5 bg-iceberg rounded-start border border-secondary mt-4'>
                    <h1>Agregar Candidato</h1>
                    <hr />
                    <form 
                        className='mx-5 px-5'
                        onSubmit={submitForm}
                    >
                        <div className="mb-3">
                            <label className="form-label">
                                Nombre(s)
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5"
                                value={candidateFirstName}
                                onChange={e => setCandidateFirstName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Apellidos
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5"
                                value={candidateLastName}
                                onChange={e => setCandidateLastName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Partido
                            </label>
                            <input 
                                type="text" 
                                className="form-control me-5"
                                value={candidateParty}
                                onChange={e => setCandidateParty(e.target.value)}
                            />
                        </div>

                        <div className='mt-2 text-end'>
                            <button 
                                type='submit'
                                className='btn bg-prussian-blue text-white'
                            >
                                Agregar Candidato
                            </button>
                        </div>          
                    </form>
                </div>
            </div>
        </>
    )
}
