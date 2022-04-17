import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      users: data,
    },
  };
};

function Result({ users }) {
  const [filtered, setFiltered] = useState([]);

  const useFilter = () => {
    const newList = users
      .filter(person => person.id > 3)
      .map(filteredPerson => filteredPerson.name);
    setFiltered(newList);
  };

  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <a>
            <h3>name: {user.name}</h3>
          </a>
        </div>
      ))}
      <button onClick={useFilter}>Filter name by Id</button>
    </div>
  );
}

export default Result;
