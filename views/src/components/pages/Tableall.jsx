// import React from 'react'
import "../../../public/scss/table.css";

function Tableall() {
  // const apiUrl = "https://burarijila-fmni.onrender.com";
  const apiUrl = "https://lime-determined-hermit-crab.cyclic.cloud";
  fetchData(apiUrl);
  let totalShulk = 0;
  // let totalSankhya = 0;
  async function fetchData(apiUrl) {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const res = data.data;
        const result = res.filter((el, i) => {
          return { el, i };
        });
        displayData(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }
  function displayData(data) {
    data.forEach((el, i) => {
      const body = document.getElementById("t_body");
      const trTag = document.createElement("tr");
      const srTg = document.createElement("td");
      srTg.innerText = i + 1;
      const nameTg = document.createElement("td");
      nameTg.innerText = el.name;
      const rollTg = document.createElement("td");
      rollTg.innerText = el.token;
      const phoneTg = document.createElement("td");
      phoneTg.innerText = el.phone;
      const ageTg = document.createElement("td");
      ageTg.innerText = el.age;
      const nagarTg = document.createElement("td");
      nagarTg.innerText = el.nagar;
      const mandalTg = document.createElement("td");
      mandalTg.innerText = el.mandal;
      const bastiTg = document.createElement("td");
      bastiTg.innerText = el.basti;
      const upbastiTg = document.createElement("td");
      upbastiTg.innerText = el.upbasti;
      const postTg = document.createElement("td");
      postTg.innerText = el.post;
      const trainingTg = document.createElement("td");
      trainingTg.innerText = el.training;
      const shulkTg = document.createElement("td");
      shulkTg.innerText = shulkCount(el.age);

      const confirmTd = document.createElement("td");
      const confirmCheckbox = document.createElement("input");
      confirmCheckbox.type = "checkbox";
      confirmCheckbox.addEventListener("change", function () {
        if (this.checked) {
          trTag.classList.add("selected");
          localStorage.setItem(`checkbox_state_${i}`, "true");
          totalShulk += shulkCount(el.age);
        } else {
          trTag.classList.remove("selected");
          localStorage.removeItem(`checkbox_state_${i}`);
          totalShulk -= shulkCount(el.age);
        }

        const totalShulkElement = document.getElementById("totalShulk");
        totalShulkElement.innerText = totalShulk;
      });
      const isChecked = localStorage.getItem(`checkbox_state_${i}`);
      if (isChecked === "true") {
        confirmCheckbox.checked = true;
        trTag.classList.add("selected");
        totalShulk += shulkCount(el.age);
      }
      confirmTd.appendChild(confirmCheckbox);

      trTag.append(
        srTg,
        nameTg,
        rollTg,
        phoneTg,
        ageTg,
        nagarTg,
        mandalTg,
        bastiTg,
        upbastiTg,
        postTg,
        trainingTg,
        shulkTg
      );
      body.append(trTag);
    });
  }
  function shulkCount(age) {
    if (age > 18) {
      return 50;
    }
    return 30;
  }
  return (
    <>
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
          </tr>
        </thead>
        <tbody id="t_body"></tbody>
      </table>
    </>
  );
}

export default Tableall;
