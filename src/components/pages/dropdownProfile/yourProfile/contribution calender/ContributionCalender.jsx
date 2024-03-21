import { useState } from "react";
import "./contribution.scss";
import GitHubCalendar from "react-github-calendar";

// Function to generate year options dynamically
function generateYearOptions() {
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  // Loop from the current year down to 2021
  for (let year = currentYear; year >= 2021; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return yearOptions;
}

const ContributionCalender = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="contributions mt-1">
      {/* contributions years   */}
      <p className=" text-muted year">
        Contributions Year: <span className="text-color">{year}</span>
      </p>
      <select
        onClick={(e) => setYear(e.target.value)}
        className="contribution-years mt-5"
      >
        {generateYearOptions()}
      </select>

      {/* contributions graph  */}
      <div className="graph custom-scrollbar">
        <GitHubCalendar
          year={year}
          showWeekdayLabels={true}
          fontSize={12}
          blockSize={12}
          username="mkmasudrana806"
        />
      </div>
    </div>
  );
};

export default ContributionCalender;
