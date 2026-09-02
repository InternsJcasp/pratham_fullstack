import axios from "axios";
import { useEffect, useState } from "react";

function UserDataAPI() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userDataFetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");

        setUser(response.data.users);
      } catch (error) {
        setError("Failed to load API", error);
      } finally {
        setLoading(false);
      }
    };

    userDataFetch();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {user.map((users) => (
        <p key={users.id}>{users.firstName}</p>
      ))}
    </div>
  );
}

export default UserDataAPI;
