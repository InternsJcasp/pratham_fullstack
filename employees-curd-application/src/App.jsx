import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import EmployeeList from "./pages/employeesList";
import AddEmployee from "./pages/addEmployees";
import EditEmployee from "./pages/editEmployees";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/employees" />
          }
        />

        <Route
          path="/employees"
          element={<EmployeeList />}
        />

        <Route
          path="/employees/add"
          element={<AddEmployee />}
        />

        <Route
          path="/employees/edit/:id"
          element={<EditEmployee />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;