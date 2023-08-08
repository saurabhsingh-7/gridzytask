import Sidebar from './components/Sidebar';
import AdditionalSidebar from './components/AdditionalSidebar';
import WorkSection from './components/WorkSection';
import TaskCard from './components/TaskCard';

import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
     <Sidebar/>
     <AdditionalSidebar />
       <div className="mainview" style={{ flex: 1}}>
          <NavBar/>
          <WorkSection />
          <TaskCard />
        </div>
    </div>
  );
}

export default App;
