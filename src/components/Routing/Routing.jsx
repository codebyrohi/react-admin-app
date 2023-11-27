import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
export const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Route>
             {/* Other routes */}
             <Route path="*" element={NotFound} />
        </Routes>
      </Router>
    </>
  );
};
