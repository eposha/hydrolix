import { Collapsible } from 'views/components/Collapsible';

const Jobs = () => {
  return (
    <>
      Jobs
      <>
        <Collapsible
          header="Table"
          list={[
            { id: '1', title: 'one', href: '#' },
            { id: '2', title: 'one', href: '#' },
            { id: '3', title: 'one', href: '#' },
          ]}
          type="table"
          open
        />

        <Collapsible
          header="Dictionaries"
          list={[
            { id: '1', title: 'two', href: '#' },
            { id: '2', title: 'two', href: '#' },
            { id: '3', title: 'two', href: '#' },
          ]}
          type="dictionaries"
        />

        <Collapsible
          header="Functions"
          list={[
            { id: '1', title: 'three', href: '#' },
            { id: '2', title: 'three', href: '#' },
            { id: '3', title: 'three', href: '#' },
          ]}
          type="functions"
        />
      </>
    </>
  );
};

export default Jobs;
