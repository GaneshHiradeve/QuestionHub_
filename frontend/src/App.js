import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quora from "./components/Quora.js";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { ProtectedRoute } from "protected-route-react";
import "react-toastify/dist/ReactToastify.css";
import { getuserProfile } from "./components/redux/action/user";
import Swal from "sweetalert2";
import { getallPost, getuserPost } from "./components/redux/action/post";
// import AdminDash from "./components/dashboard/AdminDash";
// import { ClassNames } from "@emotion/react";
// import Userpost from "./components/Userpost";
// import { toast } from "react-toastify";

function App() {
  const {
    isAuthenticated,
    message,
    error,
    allData,
    userpost,
    categorydata,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: error,
        icon: "error",
      });
      dispatch({ type: "cleanError" });
    }

    if (message) {
      Swal.fire({
        title: message,
        icon: "success",
      });
      dispatch({ type: "cleanMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getuserProfile());
    dispatch(getallPost());

    dispatch(getuserPost());
  }, [dispatch]);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/home"
              >
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/home"
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/home"
              >
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={allData} />
              </ProtectedRoute>
            }
          />
          {/* /dashboard */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={userpost} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/technology"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={categorydata} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lifestyle"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={categorydata} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/politics"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={categorydata} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/food"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={categorydata} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/economics"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={categorydata} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/sport"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Quora allData={categorydata} />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/admindash"
            element={
              <ProtectedRoute
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
                isAuthenticated={isAuthenticated}
                redirect="/home"
              >
                <AdminDash userData={allData} />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
