import React, { useMemo, useState, useRef, useEffect } from "react";
import { MultiSelectDropdown } from "../dropdown";
import "./index.css";

const checkedStatus = ["CHECK", "HIDDEN", "DISABLED"];

const pData = {
  config: {
    id: {
      id: "id",
      header: "ID",
      accessor: "id",
      dynamicColumn: "CHECK",
      isShow: true,
    },
    name: {
      id: "name",
      header: "Name",
      accessor: "name",
      dynamicColumn: "CHECK",
      isShow: true,
    },
    age: {
      id: "age",
      header: "Age",
      accessor: "age",
      dynamicColumn: "CHECK",
      isShow: true,
    },
    gender: {
      id: "gender",
      header: "Gender",
      accessor: "gender",
      dynamicColumn: "CHECK",
      isShow: true,
    },
    role: {
      id: "role",
      header: "Role",
      accessor: "role",
      dynamicColumn: "CHECK",
      isShow: true,
    },
    city: {
      id: "city",
      header: "City",
      accessor: "city",
      dynamicColumn: "UNCHECK",
      isShow: true,
    },
  },
  data: [
    {
      id: 1,
      name: "Shubham",
      age: 24,
      gender: "Male",
      role: "Frontend Engineer",
      city: "Delhi",
    },
    {
      id: 2,
      name: "Amit",
      age: 27,
      gender: "Male",
      role: "Backend Engineer",
      city: "Pune",
    },
    {
      id: 3,
      name: "Neha",
      age: 26,
      gender: "Female",
      role: "UI Designer",
      city: "Bengaluru",
    },
    {
      id: 4,
      name: "Rohit",
      age: 29,
      gender: "Male",
      role: "Product Manager",
      city: "Mumbai",
    },
    {
      id: 5,
      name: "Anjali",
      age: 25,
      gender: "Female",
      role: "QA Engineer",
      city: "Noida",
    },
    {
      id: 6,
      name: "Karan",
      age: 28,
      gender: "Male",
      role: "DevOps Engineer",
      city: "Gurgaon",
    },
    {
      id: 7,
      name: "Pooja",
      age: 24,
      gender: "Female",
      role: "Frontend Engineer",
      city: "Jaipur",
    },
    {
      id: 8,
      name: "Vikas",
      age: 31,
      gender: "Male",
      role: "Tech Lead",
      city: "Bengaluru",
    },
    {
      id: 9,
      name: "Sneha",
      age: 27,
      gender: "Female",
      role: "Business Analyst",
      city: "Hyderabad",
    },
    {
      id: 10,
      name: "Arjun",
      age: 26,
      gender: "Male",
      role: "Software Engineer",
      city: "Chennai",
    },
    {
      id: 11,
      name: "Riya",
      age: 23,
      gender: "Female",
      role: "Intern",
      city: "Delhi",
    },
    {
      id: 12,
      name: "Manish",
      age: 32,
      gender: "Male",
      role: "Engineering Manager",
      city: "Pune",
    },
    {
      id: 13,
      name: "Kriti",
      age: 25,
      gender: "Female",
      role: "Frontend Engineer",
      city: "Indore",
    },
    {
      id: 14,
      name: "Nikhil",
      age: 28,
      gender: "Male",
      role: "Full Stack Engineer",
      city: "Bhopal",
    },
    {
      id: 15,
      name: "Isha",
      age: 26,
      gender: "Female",
      role: "Product Designer",
      city: "Mumbai",
    },
    {
      id: 16,
      name: "Saurabh",
      age: 29,
      gender: "Male",
      role: "Backend Engineer",
      city: "Noida",
    },
    {
      id: 17,
      name: "Megha",
      age: 24,
      gender: "Female",
      role: "QA Engineer",
      city: "Chandigarh",
    },
    {
      id: 18,
      name: "Rahul",
      age: 30,
      gender: "Male",
      role: "Solutions Architect",
      city: "Bengaluru",
    },
    {
      id: 19,
      name: "Ayesha",
      age: 27,
      gender: "Female",
      role: "Data Analyst",
      city: "Kolkata",
    },
    {
      id: 20,
      name: "Deepak",
      age: 33,
      gender: "Male",
      role: "Engineering Manager",
      city: "Gurgaon",
    },
    {
      id: 21,
      name: "Simran",
      age: 25,
      gender: "Female",
      role: "HR Executive",
      city: "Delhi",
    },
    {
      id: 22,
      name: "Harsh",
      age: 28,
      gender: "Male",
      role: "Frontend Engineer",
      city: "Ahmedabad",
    },
    {
      id: 23,
      name: "Naina",
      age: 26,
      gender: "Female",
      role: "Marketing Analyst",
      city: "Pune",
    },
    {
      id: 24,
      name: "Abhishek",
      age: 29,
      gender: "Male",
      role: "Full Stack Engineer",
      city: "Lucknow",
    },
    {
      id: 25,
      name: "Tanvi",
      age: 24,
      gender: "Female",
      role: "UI Designer",
      city: "Nagpur",
    },
    {
      id: 26,
      name: "Mohit",
      age: 31,
      gender: "Male",
      role: "DevOps Engineer",
      city: "Jaipur",
    },
    {
      id: 27,
      name: "Kavya",
      age: 23,
      gender: "Female",
      role: "Intern",
      city: "Indore",
    },
    {
      id: 28,
      name: "Prateek",
      age: 27,
      gender: "Male",
      role: "Software Engineer",
      city: "Kanpur",
    },
    {
      id: 29,
      name: "Aditi",
      age: 28,
      gender: "Female",
      role: "Product Manager",
      city: "Bengaluru",
    },
    {
      id: 30,
      name: "Siddharth",
      age: 34,
      gender: "Male",
      role: "Director Engineering",
      city: "Mumbai",
    },
    {
      id: 31,
      name: "Payal",
      age: 26,
      gender: "Female",
      role: "QA Engineer",
      city: "Udaipur",
    },
    {
      id: 32,
      name: "Varun",
      age: 29,
      gender: "Male",
      role: "Backend Engineer",
      city: "Delhi",
    },
    {
      id: 33,
      name: "Shruti",
      age: 24,
      gender: "Female",
      role: "Frontend Engineer",
      city: "Bengaluru",
    },
    {
      id: 34,
      name: "Yash",
      age: 28,
      gender: "Male",
      role: "Full Stack Engineer",
      city: "Surat",
    },
    {
      id: 35,
      name: "Pallavi",
      age: 27,
      gender: "Female",
      role: "Data Scientist",
      city: "Hyderabad",
    },
    {
      id: 36,
      name: "Rakesh",
      age: 35,
      gender: "Male",
      role: "CTO",
      city: "Delhi",
    },
    {
      id: 37,
      name: "Shalini",
      age: 29,
      gender: "Female",
      role: "Scrum Master",
      city: "Pune",
    },
    {
      id: 38,
      name: "Ankit",
      age: 26,
      gender: "Male",
      role: "Software Engineer",
      city: "Patna",
    },
    {
      id: 39,
      name: "Bhavna",
      age: 28,
      gender: "Female",
      role: "UX Researcher",
      city: "Mumbai",
    },
    {
      id: 40,
      name: "Naveen",
      age: 32,
      gender: "Male",
      role: "Platform Engineer",
      city: "Chennai",
    },
    {
      id: 41,
      name: "Divya",
      age: 25,
      gender: "Female",
      role: "Frontend Engineer",
      city: "Bengaluru",
    },
    {
      id: 42,
      name: "Ashish",
      age: 30,
      gender: "Male",
      role: "Backend Engineer",
      city: "Noida",
    },
    {
      id: 43,
      name: "Ritu",
      age: 27,
      gender: "Female",
      role: "Product Analyst",
      city: "Gurgaon",
    },
    {
      id: 44,
      name: "Sandeep",
      age: 34,
      gender: "Male",
      role: "Tech Lead",
      city: "Pune",
    },
    {
      id: 45,
      name: "Mansi",
      age: 23,
      gender: "Female",
      role: "Intern",
      city: "Delhi",
    },
    {
      id: 46,
      name: "Gaurav",
      age: 31,
      gender: "Male",
      role: "Solutions Engineer",
      city: "Jaipur",
    },
    {
      id: 47,
      name: "Preeti",
      age: 26,
      gender: "Female",
      role: "QA Engineer",
      city: "Bhopal",
    },
    {
      id: 48,
      name: "Aditya",
      age: 28,
      gender: "Male",
      role: "Software Engineer",
      city: "Indore",
    },
    {
      id: 49,
      name: "Sonal",
      age: 29,
      gender: "Female",
      role: "Customer Success",
      city: "Mumbai",
    },
    {
      id: 50,
      name: "Ravi",
      age: 33,
      gender: "Male",
      role: "Operations Manager",
      city: "Delhi",
    },
  ],
};

export const Table = ({
  config = pData.config,
  data = pData.data,
  hideHeader = true,
  rowHeight = 200,
}) => {
  const wrapperRef = useRef(null);

  const options = useMemo(() => {
    return Object.keys(config)
      .filter((key) => config[key].isShow)
      .map((key) => ({
        label: config[key].header,
        value: config[key].id,
        id: config[key].id,
      }));
  }, [config]);

  const [selected, setSelected] = useState(
    options.filter(({ id }) =>
      checkedStatus.includes(config[id].dynamicColumn),
    ),
  );

  const [scrollTop, setScrollTop] = useState(0);

  /** CONFIG **/
  const viewportHeight = 600;
  const totalRows = data.length;
  const totalHeight = totalRows * rowHeight;
  const visibleRowCount = Math.ceil(viewportHeight / rowHeight);
  const overscan = 5;

  /** DERIVED **/
  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const endIndex = Math.min(
    totalRows,
    startIndex + visibleRowCount + overscan * 2,
  );

  const offsetY = startIndex * rowHeight;

  const visibleRows = data.slice(startIndex, endIndex);
  const tableHeaderToShow = selected.map(({ value }) => value);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onScroll = () => {
      setScrollTop(el.scrollTop);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="table-wrapper" ref={wrapperRef}>
      {!hideHeader && (
        <div className="table-header">
          <h3>User Table</h3>
          <MultiSelectDropdown
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      )}

      <div className="table-scroll-area">
        {/* SPACER */}
        <div className="spacer" style={{ height: totalHeight }} />

        {/* TABLE LAYER */}
        <div
          className="table-layer"
          style={{ transform: `translateY(${offsetY}px)` }}
        >
          <table className="table" border="1" cellPadding="8">
            <thead className="table-head">
              <tr>
                {tableHeaderToShow.map((key) => (
                  <th key={key}>{config[key].header}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {visibleRows.map((item, idx) => (
                <tr key={startIndex + idx} style={{ height: rowHeight }}>
                  {tableHeaderToShow.map((key) => (
                    <td key={key}>{item[config[key].accessor]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p>End of Table</p>
    </div>
  );
};
