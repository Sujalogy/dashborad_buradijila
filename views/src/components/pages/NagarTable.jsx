import { useState, useEffect } from 'react';
import "../../../public/scss/nagarseh.css";

function NagarTable() {
  const apiUrl = "https://burarijila-fmni.onrender.com";
  // const apiUrl = "http://localHost:3000";

  const [selectedNagar, setSelectedNagar] = useState(""); // State to hold the selected nagar
  const [tableData, setTableData] = useState([]); // State to hold the table data
  // eslint-disable-next-line no-unused-vars
  const [totalShulk, setTotalShulk] = useState(0); // State to hold the total shulk

  useEffect(() => {
    fetchData(apiUrl, selectedNagar); // Fetch data when selectedNagar changes
  }, [selectedNagar]);

  async function fetchData(apiUrl, selectedNagar) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const filteredData = data.data.filter((el) => el.nagar === selectedNagar);
      setTableData(filteredData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  function handleCheckboxChange(i, isChecked, age) {
    if (isChecked) {
      setTotalShulk((prevTotal) => prevTotal + shulkCount(age));
    } else {
      setTotalShulk((prevTotal) => prevTotal - shulkCount(age));
    }
    localStorage.setItem(`checkbox_state_${i}`, isChecked ? "true" : "false");
  }

  function shulkCount(age) {
    return age > 18 ? 50 : 30;
  }

  return (
    <>
      <div className="selectNagar">
        {/* <div id="totalShulk">Total Shulk: {totalShulk}</div> */}
        <select
          name="nagar"
          id="nagars"
          value={selectedNagar}
          onChange={(e) => setSelectedNagar(e.target.value)}
        >
          <option value="">नगर चुनिये</option>
          <option value="बुराड़ी">बुराड़ी नगर</option>
          <option value="भलस्वा डेरी">भलसवा डेरी नगर</option>
          <option value="मुकुंदपुर">मुकुंदपुर नगर</option>
          <option value="समयपुर">समयपुर नगर</option>
          <option value="स्वरूप नगर">स्वरूप नगर</option>
          <option value="बख्तावरपुर">बख्तावरपुर नगर</option>
          <option value="झड़ौदा">झड़ौदा नगर</option>
        </select>
      </div>
      <table border="1" className="tabled">
        <thead>
          <tr>
            <th>क्र०</th>
            <th>नाम</th>
            <th>क्रमांक</th>
            <th>दूरभाष</th>
            <th>आयु</th>
            <th>नगर</th>
            <th>मण्डल</th>
            <th>बस्ती</th>
            <th>उपबस्ती</th>
            <th>दायित्व</th>
            <th>शिक्षण</th>
            <th>शुल्क</th>
            <th>confirm</th>
          </tr>
        </thead>
        <tbody id="t_body">
          {tableData.map((el, i) => (
            <tr key={i} className={localStorage.getItem(`checkbox_state_${i}`) === "true" ? "selected" : ""}>
              <td>{i + 1}</td>
              <td>{el.name}</td>
              <td>{el.token}</td>
              <td>{el.phone}</td>
              <td>{el.age}</td>
              <td>{el.nagar}</td>
              <td>{el.mandal}</td>
              <td>{el.basti}</td>
              <td>{el.upbasti}</td>
              <td>{el.post}</td>
              <td>{el.training}</td>
              <td>{shulkCount(el.age)}</td>
              <td>
                <input
                  type="checkbox"
                  checked={localStorage.getItem(`checkbox_state_${i}`) === "true"}
                  onChange={(e) => handleCheckboxChange(i, e.target.checked, el.age)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NagarTable;
