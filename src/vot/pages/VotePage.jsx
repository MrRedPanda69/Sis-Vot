import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";

const GET_CANDIDATES = gql`
  {
    candidates(first: 5) {
      id
      firstName
      lastName
    }
  }
`;

export const VotePage = () => {
    const [vote, setVote] = useState('');
    const { loading, error, data } = useQuery(GET_CANDIDATES);

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
                                <option disabled>-- Selecciona un candidato --</option>
                                {
                                    data?.candidates.map(({ id, firstName, lastName }) => (
                                        <option key={id} value={id}>{firstName} {lastName}</option>
                                    ))
                                }
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
