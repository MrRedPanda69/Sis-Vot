import { Chart } from 'react-google-charts';
import { useQuery, gql } from "@apollo/client";

const GET_CANDIDATES = gql`
  {
    candidates(first: 5) {
      firstName
      lastName
      votes
    }
  }
`;

export const ResultsPage = () => {
    const { loading, error, data } = useQuery(GET_CANDIDATES);

    const options = {
        title: 'Resultado de votaciones ',
        is3D: true
    }

    const dataChart = [
        ['Candidatos', 'Votos'],
    ];

    data?.candidates.map(({ firstName, lastName, votes }) => {
        dataChart.push([`${firstName} ${lastName}`, +votes])
    });

    return (
        <>
            <Chart
                chartType='PieChart'
                width='100%'
                height='600px'
                data={dataChart}
                options={options}
            />
        </>
    )
}
