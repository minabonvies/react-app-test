import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Create from "./Create";

export default function Home() {
  const [members, setMembers] = useState([]);
  const [navigateTo, setNavigateTo] = useState(null); // 新增狀態來控制導航

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

        // 根據 totalCount 數量進行導航
        if (res.data.totalCount === 0) {
          setNavigateTo("/create");
        } else if (res.data.totalCount === 1) {
          setNavigateTo(`/member/${res.data.list[0].id}`);
        }
      });
  }, []);

  // 根據狀態控制導航
  if (navigateTo) {
    return <Navigate to={navigateTo} replace={true} />;
  }

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
              <td>
                <Link to={`/member/${member.id}`}>{member.memberName}</Link>
              </td>
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
