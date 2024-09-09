import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Member() {
  let { id } = useParams(); // 解構

  const KEY = "WV83JRA9h4rUeRFx";
  const SECRET = "aAcraCU4VMLiqTSa";
  const API = "https://telesale-drvet-api-nygimqgkxq-de.a.run.app/service";

  const [memberStr, setMemberStr] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/member/${id}`, {
        headers: {
          "x-api-key": KEY,
          "x-api-secret": SECRET,
        },
      })
      .then((res) => {
        console.log(res);
        setMemberStr(JSON.stringify(res));
      });
  }, [id]);

  return (
    <>
      <h1>Member Page</h1>
      <p>{memberStr}</p>
    </>
  );
}
