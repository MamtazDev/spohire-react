import calender from "./../../../assets/CalendarBlank.svg";
import timer from "./../../../assets/timer.svg";
import stack from "./../../../assets/stack.svg";
import wallet from "./../../../assets/wallet.svg";
import briefcase from "./../../../assets/briefcase.svg";

const JobOverview = () => {
  const details = [
    {
      pic: calender,
      label: "Job Posted:",
      result: "14 Jun, 2024",
    },
    {
      pic: timer,
      label: "Job expire in:",
      result: "14 Aug, 2024",
    },
    {
      pic: stack,
      label: "Job Level:",
      result: "Entry Level",
    },
    {
      pic: wallet,
      label: "Language",
      result: "English",
    },
    {
      pic: briefcase,
      label: "Education",
      result: "Entry Level",
    },
  ];
  return (
    <div className="description_outline job_overview">
      <p className="title mb-5">Job Overview</p>
      <div className="row g-4">
        {details.map((data, index) => (
          <div className="col-lg-4" key={index}>
            <img className="mb-3" src={data.pic} alt="" />
            <p className="label mb-1">{data.label}</p>
            <p className="result">{data.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOverview;
