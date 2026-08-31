import { useState, useEffect } from "react";
import { fetchEmployees } from "../services/employeeService";

export function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const data = await fetchEmployees();
        if (isMounted) {
          setEmployees(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load employee data.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { employees, loading, error };
}
