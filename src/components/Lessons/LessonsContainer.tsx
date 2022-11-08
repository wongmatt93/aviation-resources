import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ACS } from "../../GraphQL/Queries";
import ACSOutline from "../../Models/ACSModels/ACSOutline";
import LessonCard from "./LessonCard";
import "./LessonsContainer.css";

const LessonsContainer = () => {
  const [acs, setACS] = useState<ACSOutline[]>([]);

  const { error, loading, data } = useQuery(GET_ACS);

  useEffect(() => {
    data && setACS(data.airman_certification_standards);
  }, [data]);
  return (
    <div className="LessonsContainer">
      <ul>
        {acs &&
          acs.map((outline) => (
            <LessonCard key={outline.id} outline={outline} />
          ))}
      </ul>
    </div>
  );
};

export default LessonsContainer;
