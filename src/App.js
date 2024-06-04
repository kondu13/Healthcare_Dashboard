import './App.css';
import {useState, useEffect, React} from  "react";
import Navbar from './Navbar.js' ;
import Patients from './Patients.js';
import Profile from './Profile.js';
import LabResults from './LabResults.js';
import DiagnosisList from './DiagnosisList.js';
import DiagnosisHistory from './DiagnosisHistory.js';

const username = 'coalition';
const password = 'skills-test';
const credentials = `${username}:${password}`;
const auth = btoa(credentials);

function App() {

  // const [data, setData] = useState();
  const [targetData, setTargetData] = useState([]);
  const [patientsDetails, setPatientsDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const responseData = await response.json();
        // setData(responseData);

        const target = responseData.find((item) => item.name === "Jessica Taylor");
        setTargetData(target);

        const patientDetails = responseData.map((obj) => ({
          name: obj.name,
          gender: obj.gender,
          age: obj.age,
          profile_picture: obj.profile_picture,
        }));
        setPatientsDetails(patientDetails);
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Navbar/>
      <div className='sub-wrapper'>
        <Patients patientDetails={patientsDetails}/>
        
        <div className='sub-wrapper-1'>
          <DiagnosisHistory diagnosis_history={targetData.diagnosis_history}/>
          <DiagnosisList diagnosis_list={targetData.diagnostic_list}/>
        </div>

        <div className='sub-wrapper-2'>
          <Profile targetData={targetData}/>
          <LabResults labResults={targetData.lab_results}/>
        </div>
          
      </div>
    </div>
  );
}

export default App;
