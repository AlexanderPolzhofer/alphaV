import { LineOrBarChart } from '../../components/Chart/LineOrBarChart';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <LineOrBarChart type="LineChart" />
    </>
  );
};
