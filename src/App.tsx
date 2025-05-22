import ComplaintsView from "./components/ComplaintsView";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <>
      <DashboardLayout children={<ComplaintsView />} />
    </>
  );
}

export default App;
