import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

function App() {
  // const [count, setCount] = useState(0);
  const [members, setMembers] = useState([]);

  const KEY = "WV83JRA9h4rUeRFx";
  const SECRET = "aAcraCU4VMLiqTSa";
  const API = "https://telesale-drvet-api-nygimqgkxq-de.a.run.app/service";

  const phoneBy3cx = "88665683";
  const rightPhoneLength = "8";

  useEffect(() => {
    axios
      .get(
        `${API}/member?phoneBy3cx=${phoneBy3cx}&rightPhoneLength=${rightPhoneLength}`,
        {
          headers: {
            "x-api-key": KEY,
            "x-api-secret": SECRET,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setMembers(res.data.list);
      });
  }, []);

  return (
    <>
    <table>
            <thead>
              <tr>
                <th>客戶名稱</th>
                <th>電話</th>
                <th>市話</th>
                <th>公司電話</th>
              </tr>
            </thead>
      {members.map((member) => (
        <>
            <tbody key={member.id}>
              <tr>
                <td>{member.memberName}</td>
                <td>{member.phone}</td>
                <td>{member.localPhone}</td>
                <td>{member.companyPhone}</td>
              </tr>
            </tbody>
        </>
      ))}
      </table>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
