/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback } from "react";
import {
  getEmployees,
  deleteEmployee as deleteEmployeeApi,
} from "../services/employeeServices";

export function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState("");

  // Define fetchEmployees at hook level using useCallback
  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch employees.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Call it on mount via useEffect
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  // Handle employee deletion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    setDeleteLoading(true);
    setError("");

    try {
      await deleteEmployeeApi(id);
      setEmployees((prev) => prev.filter((employee) => employee.id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete employee.");
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    employees,
    loading,
    deleteLoading,
    error,
    refetch: fetchEmployees,
    deleteEmployee: handleDelete,
  };
}
