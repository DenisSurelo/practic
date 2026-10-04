import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "@/components/Layout/Layout";
import { AppBar } from "@/components/AppBar/AppBar";
import { TaskForm } from "@/components/TaskForm/TaskForm";
import { TaskList } from "@/components/TaskList/TaskList";
import { selectError, selectIsLoading } from "@/redux/selectors";
import { fetchTasks } from "@/redux/tasks/tasksOperations";
import { Routes, Route } from "react-router"
import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "@/pages/LoginPage"

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={
        <>
          <AppBar />
          <TaskForm />
          <TaskList />
          {isLoading && !error && <h1>Erorr</h1>}
        </>
      }
      />

      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
    </Routes>



  );
};
