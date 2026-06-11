import { useEffect, useState } from "react";
import { axiosAuth } from "../../utils/axiosAuth";
import { useAuth } from "../../contexts/auth/authContext";

export default function UserProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useAuth();
  const userId = user.id;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axiosAuth.get(`/properties?user_id=${userId}`);
        const fetchedProperties = response.data.data;
        setProperties(fetchProperties);
      } catch (err) {
        console.error(err.response?.data);
        if (err.response.data) {
        }
      } finally {
      }
    };
  }, []);
  return <p>hello user</p>;
}
