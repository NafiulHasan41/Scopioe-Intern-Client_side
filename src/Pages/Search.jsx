import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TherapistCard from "../Components/Card/TherapistCard";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const data = location.state.topic.toString();

  const [therapist, setTherapist] = useState([]);
  const [filteredTherapist, setFilteredTherapist] = useState([]);

  useEffect(() => {
    async function getTherapists() {
      try {
        const response = await axios.get("https://nafiulhasan41.github.io/Student-Housing-json/featured.json");
        setTherapist(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching therapist data:", error);
        setLoading(false);
      }
    }

    getTherapists();
  }, []);

  useEffect(() => {
    if (!loading && therapist.length > 0 && data) {
      const filtered = therapist.filter(item =>
        item.zipCode === data.toLowerCase() || item.cityName.toLowerCase() === data.toLowerCase()
      );
      setFilteredTherapist(filtered);
    }
  }, [loading, therapist, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      {filteredTherapist.length > 0 ? (
        <ul>
          {filteredTherapist.map((therapist, index) => (
            <TherapistCard key={index} therapist={therapist} />
          ))}
        </ul>
      ) : (
        <p>No therapists found for the selected city or ZIP code.</p>
      )}
    </div>
  );
};

export default Search;
