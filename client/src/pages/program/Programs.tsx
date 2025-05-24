import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  summary: string;
};

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
      });
  }, []);

  return (
    <div>
      <h1>Liste des séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
