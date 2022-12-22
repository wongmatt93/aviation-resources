import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import ResourcesContainer from "./ResourcesContainer";
import "./ResourcesPage.css";

const ResourcesPage = () => {
  const { loadedResources } = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadedResources.length > 0) {
      setLoading(false);
    }
  }, [loadedResources]);

  return (
    <main className="ResourcesPage">
      {loading ? (
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      ) : (
        <>
          {" "}
          <input
            type="text"
            placeholder="Search Aviation Resources"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ResourcesContainer
            search={search}
            loadedResources={loadedResources}
          />
        </>
      )}
    </main>
  );
};

export default ResourcesPage;
