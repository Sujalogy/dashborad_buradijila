// import React from 'react'
import Header from "./Header";
import Linkers from "./Linkers";
import "../../public/scss/dashboard.css";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Dashboard() {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    // const API = "https://burarijila-fmni.onrender.com";
    const API = "https://lime-determined-hermit-crab.cyclic.cloud";
    fetch(API)
      .then((res) => res.json())
      .then((result) => gettingData(result.data))
      .catch((err) => console.log(err));

    function gettingData(data) {
      var getSchoolStudent = data.filter((el) => {
        if (el.age <= 18) {
          return el;
        }
      });
      var getCollegeStudent = data.filter((el) => {
        if (el.age > 18 && el.age < 25) {
          return el;
        }
      });
      var getOthers = data.filter((el) => {
        if (el.age > 24) {
          return el;
        }
      });
      var getBurari = data.filter((el) => {
        if (el.nagar === "बुराड़ी") {
          return el;
        }
      });
      var getBhalaswa = data.filter((el) => {
        if (el.nagar === "भलस्वा डेरी") {
          return el;
        }
      });

      var getMukund = data.filter((el) => {
        if (el.nagar === "मुकुंदपुर") {
          return el;
        }
      });

      var getSamaye = data.filter((el) => {
        if (el.nagar === "समयपुर") {
          return el;
        }
      });

      var getSwroop = data.filter((el) => {
        if (el.nagar === "स्वरूप नगर") {
          return el;
        }
      });

      var getBhakhtawar = data.filter((el) => {
        if (el.nagar === "बख्तावरपुर") {
          return el;
        }
      });

      var getJhadoda = data.filter((el) => {
        if (el.nagar === "झड़ौदा") {
          return el;
        }
      });
      var len1 = getBurari.length;
      var len2 = getBhalaswa.length;
      var len3 = getMukund.length;
      var len4 = getSamaye.length;
      var len5 = getSwroop.length;
      var len6 = getBhakhtawar.length;
      var len7 = getJhadoda.length;
      var sSC = getSchoolStudent.length;
      var cSC = getCollegeStudent.length;
      var gOther = getOthers.length;

      document.getElementById("burariLength").textContent = len1;
      document.getElementById("burariLength2").textContent = len1;
      document.getElementById("bhalaswaLength").textContent = len2;
      document.getElementById("bhalaswaLength2").textContent = len2;
      document.getElementById("mukundLength").textContent = len3;
      document.getElementById("mukundLength2").textContent = len3;
      document.getElementById("samayeLength").textContent = len4;
      document.getElementById("samayeLength2").textContent = len4;
      document.getElementById("swroopLength").textContent = len5;
      document.getElementById("swroopLength2").textContent = len5;
      document.getElementById("bhakhtawarLength").textContent = len6;
      document.getElementById("bhakhtawarLength2").textContent = len6;
      document.getElementById("jhadodaLength").textContent = len7;
      document.getElementById("jhadodaLength2").textContent = len7;
      document.getElementById("totalCount").textContent = data.length;
      document.getElementById("count1").textContent = sSC;
      document.getElementById("count2").textContent = cSC;
      document.getElementById("count3").textContent = gOther;

      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const ctx = document.getElementById("myChart").getContext("2d");
      if (chartRef2.current) {
        chartRef2.current.destroy();
      }
      const ctx2 = document.getElementById("myChart2").getContext("2d");

      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [
            "बुराड़ी",
            "भलस्वा डेरी",
            "मुकुंदपुर",
            "समयपुर",
            "स्वरूप नगर",
            "बख्तावरपुर",
            "झड़ौदा",
          ],
          datasets: [
            {
              label: "Data",
              data: [len1, len2, len3, len4, len5, len6, len7],
              // data: [1, 2, 3, 4, 5, 6, 7],
              backgroundColor: [
                "red",
                "blue",
                "green",
                "orange",
                "yellow",
                "pink",
                "brown",
              ],
            },
          ],
        },
      });

      chartRef2.current = new Chart(ctx2, {
        type: "bar",
        data: {
          labels: ["स्कूल विद्यार्थी", "कॉलेज विद्यार्थी", "अन्ये"],
          datasets: [
            {
              label: ["data"],
              data: [sSC, cSC, gOther],
              // data: [2, 4, 5],
              backgroundColor: ["red", "orange", "yellow"],
            },
          ],
        },
        options: {
          responsive: true, // Set the chart to be responsive
        },
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="mains">
        <div className="aside">
          <div className="filters">
            <Linkers />
          </div>
        </div>
        <div className="body">
          <div className="left check">
            <canvas id="myChart"></canvas>
          </div>
          <div className="right check">
            <div className="four">
              <table border={1} className="table">
                <thead>
                  <tr>
                    <th>नगर</th>
                    <th>बुराड़ी</th>
                    <th>भलस्वा डेरी</th>
                    <th>मुकुंदपुर</th>
                    <th>समयपुर</th>
                    <th>स्वरूप नगर</th>
                    <th>बख्तावरपुर</th>
                    <th>झड़ौदा</th>
                  </tr>
                </thead>
                <tbody id="tbody_el">
                  <tr>
                    <td>संख्या</td>
                    <td id="burariLength"></td>
                    <td id="bhalaswaLength"></td>
                    <td id="mukundLength"></td>
                    <td id="samayeLength"></td>
                    <td id="swroopLength"></td>
                    <td id="bhakhtawarLength"></td>
                    <td id="jhadodaLength"></td>
                  </tr>
                </tbody>
              </table>
              <table border="1" className="table_mobile">
                <thead>
                  <tr>
                    <th>नगर</th>
                    <th>संख्या</th>
                  </tr>
                </thead>
                <tbody id="tbody_el">
                  <tr>
                    <td>बुराड़ी</td>
                    <td id="burariLength2"></td>
                  </tr>
                  <tr>
                    <td>भलस्वा डेरी</td>
                    <td id="bhalaswaLength2"></td>
                  </tr>
                  <tr>
                    <td>मुकुंदपुर</td>
                    <td id="mukundLength2"></td>
                  </tr>
                  <tr>
                    <td>समयपुर</td>
                    <td id="samayeLength2"></td>
                  </tr>
                  <tr>
                    <td>स्वरूप नगर</td>
                    <td id="swroopLength2"></td>
                  </tr>
                  <tr>
                    <td>बख्तावरपुर</td>
                    <td id="bhakhtawarLength2"></td>
                  </tr>
                  <tr>
                    <td>झड़ौदा</td>
                    <td id="jhadodaLength2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="totals">
              <div className="left">
                <div className="one">
                  <h4>
                    स्कूल विद्यार्थी : <span id="count1"></span>
                  </h4>
                </div>
                <div className="two border">
                  <h4>
                    कॉलेज विद्यार्थी : <span id="count2"></span>
                  </h4>
                </div>
                <div className="three">
                  <h4>
                    अन्ये : <span id="count3"></span>
                  </h4>
                </div>
              </div>
              <div className="right">
                <canvas id="myChart2"></canvas>
              </div>
              <div className="five position">
                <h3>
                  कुल संख्या : <span id="totalCount">0</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <footer>{/* <h1>राष्ट्रीय स्वयंसेवक संघ</h1> */}</footer>
    </>
  );
}

export default Dashboard;
