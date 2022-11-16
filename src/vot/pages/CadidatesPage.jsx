import { useQuery, gql } from "@apollo/client";

const GET_CANDIDATES = gql`
  {
    candidates(first: 5) {
      id
      firstName
      lastName
      party
    }
  }
`;

export const CadidatesPage = () => {
    const { loading, error, data } = useQuery(GET_CANDIDATES);

    return (
        <>
            <div className="d-flex justify-content-evenly px-2 text-white">
                {data?.candidates.map(({ id, firstName, lastName, party }) => (
                    <div className="p-3 bg-iceberg rounded border border-secondary mt-4" key={id}>
                        <h5>
                            <i className="fa-solid fa-user me-2"></i>Candidato {firstName}
                        </h5>
                        <hr />
                        <form className="mx-3">
                            <div className="mb-3">
                                <label className="form-label">Nombre(s)</label>
                                <input
                                    type="text"
                                    className="form-control me-5 pe-5"
                                    placeholder={firstName}
                                    disabled
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Apellidos</label>
                                <input
                                    type="text"
                                    className="form-control me-5 pe-5"
                                    placeholder={lastName}
                                    disabled
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Partido</label>
                                <input
                                    type="text"
                                    className="form-control me-5"
                                    disabled
                                    placeholder={party}
                                />
                            </div>
                        </form>
                    </div>
                ))}
            </div>
        </>
    );
};
