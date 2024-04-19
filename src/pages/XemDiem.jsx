import React, { useState, useEffect } from 'react';

// Shared Tailwind CSS class strings
const inputClass = 'px-4 py-2 w-full max-w-md border rounded-md shadow-sm focus:outline-none focus:ring-2';
const cellClass = 'py-4 px-6';
const rowClass = 'border-b dark:bg-zinc-800 dark:border-zinc-700 odd:bg-white even:bg-zinc-50 odd:dark:bg-zinc-800 even:dark:bg-zinc-700 text-secondaryGray';

// Mock data for demonstration
const mockData = [
  { studentId: 'SV001', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV002', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV003', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV004', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV005', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV006', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV007', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV008', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV009', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0010', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0011', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0012', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0013', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0014', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0020', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0030', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0015', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0021', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0031', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0016', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0024', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0033', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0017', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0023', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0032', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0018', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0026', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  { studentId: 'SV0037', aiGrade: 7, teacherGrade: 9, averageGrade: 10 },
  { studentId: 'SV0019', aiGrade: 8, teacherGrade: 7.5, averageGrade: 6 },
  { studentId: 'SV0029', aiGrade: 9, teacherGrade: 8, averageGrade: 7 },
  // Add more mock data...
];

// Main component
const XemDiem = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    // Simulate fetching data
    setData(mockData);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const sortTable = (field) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    setData(sortedData);
  };

  const filteredData = data.filter(student => student.studentId.toLowerCase().includes(searchTerm));

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

  // Slice data to display only for the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Function to handle changing page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-primaryGreen to-secondaryGray">
        <div className="pt-16">
          <div className="flex justify-center my-4">
            <input
              type="text"
              placeholder="Search by Student ID"
              className={`${inputClass} focus:ring-indigo-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:focus:ring-indigo-500`}
              onChange={handleSearch}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full leading-normal rounded-lg overflow-hidden">
              <thead>
                <tr className="text-left">
                  <th className={`${cellClass} lg:w-auto sm:w-1/4 cursor-pointer`} onClick={() => sortTable('studentId')}>ID</th>
                  <th className={`${cellClass} lg:w-auto sm:w-1/4 cursor-pointer`} onClick={() => sortTable('aiGrade')}>AI</th>
                  <th className={`${cellClass} lg:w-auto sm:w-1/4 cursor-pointer`} onClick={() => sortTable('teacherGrade')}>Teacher</th>
                  <th className={`${cellClass} lg:w-auto sm:w-1/4 cursor-pointer`} onClick={() => sortTable('averageGrade')}>Average</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((student, index) => (
                  <tr key={index} className={rowClass}>
                    <td className={`${cellClass} lg:w-auto sm:w-1/4`}>{student.studentId}</td>
                    <td className={`${cellClass} lg:w-auto sm:w-1/4`}>{student.aiGrade}</td>
                    <td className={`${cellClass} lg:w-auto sm:w-1/4`}>{student.teacherGrade}</td>
                    <td className={`${cellClass} lg:w-auto sm:w-1/4`}>{student.averageGrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`mx-2 px-3 py-1 rounded-md focus:outline-none ${currentPage === i + 1 ? 'bg-indigo-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-slate-600 shadow-md">
        <div className="p-5 text-white">
          © 2024 Create by To Quang Duc - Hoang Minh Hai, CMC University.
        </div>
      </footer>
    </>
  );
};

export default XemDiem;
