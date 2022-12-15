import { useState } from "react";
import ResourcesContainer from "./ResourcesContainer";
import "./ResourcesPage.css";

const ResourcesPage = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="ResourcesPage">
      <input
        type="text"
        placeholder="Search Aviation Resources"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ResourcesContainer search={search} />
    </main>
  );
};

export default ResourcesPage;
