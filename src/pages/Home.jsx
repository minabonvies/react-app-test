import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
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
            <tbody key={member.id}>
              <tr>
              <td><Link to={`/member/${member.id}`}>{member.memberName}</Link></td>
                <td>{member.phone}</td>
                <td>{member.localPhone}</td>
                <td>{member.companyPhone}</td>
              </tr>
            </tbody>
        ))}
      </table>
    </>
  );
}
