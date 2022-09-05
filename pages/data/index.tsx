import { useExampleTable } from 'src/hooks/tables';
import Table from 'views/features/Table/Table';

const Data = () => {
  const { data, columns } = useExampleTable();

  return <Table columns={columns} data={data} />;
};

export default Data;
