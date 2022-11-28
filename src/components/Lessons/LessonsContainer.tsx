import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_LESSONS } from "../../GraphQL/Queries";
import LessonCard from "./LessonCard";
import "./LessonsContainer.css";

const LessonsContainer = () => {
  const { error, loading, data } = useQuery(GET_LESSONS);

  useEffect(() => {
    data && console.log(data.lesson);
  }, [data]);

  return <ul className="LessonsContainer"></ul>;
};

export default LessonsContainer;
