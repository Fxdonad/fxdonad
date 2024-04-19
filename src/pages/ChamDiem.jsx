import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const commonTextColor = 'text-zinc-700 dark:text-zinc-300';
const commonBorderColor = 'border-zinc-300 dark:border-zinc-600';
const commonRounded = 'rounded-md';
const commonPadding = 'p-2';
const buttonClass = 'font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 dark:focus:ring-offset-zinc-800';

const StudentForm = ({ handleSubmit, studentId, setStudentId, score, setScore, evaluation, setEvaluation }) => (
  <div className="w-full max-w-5xl p-4 bg-white rounded-b-lg shadow-md dark:bg-zinc-800">
    <h2 className="mb-4 text-2xl font-semibold text-white">Đánh giá của giáo viên:</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="studentId" className={`block text-sm font-medium ${commonTextColor}`}>+ Mã sinh viên</label>
        <input
          type="text"   
          id="studentId"
          name="studentId"
          className={`${commonPadding} mt-1 block w-full ${commonBorderColor} rounded-md shadow-sm text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
          placeholder="VD: BIT220033"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="score" className={`block text-sm font-medium ${commonTextColor}`}>+ Nhập điểm</label>
        <input
          type="number"
          id="score"
          name="score"
          className={`${commonPadding} mt-1 block w-full ${commonBorderColor} rounded-md shadow-sm text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
          placeholder="VD: 9.5"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="evaluation" className={`block text-sm font-medium ${commonTextColor}`}>+ Nhập đánh giá</label>
        <textarea
          id="evaluation"
          name="evaluation"
          rows="4"
          className={`${commonPadding} mt-1 block w-full ${commonBorderColor} rounded-md shadow-sm text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white`}
          placeholder="VD: Xuất sắc"
          value={evaluation}
          onChange={(e) => setEvaluation(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className={`w-full flex justify-center py-2 ${buttonClass} text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>Gửi</button>
    </form>
  </div>
);

const ChamDiem = () => {
  const [fileContent, setFileContent] = useState('Nội dung của File sẽ hiển thị tại đây khi bạn tải file lên.');
  const [apiData, setAPIData] = useState({ scoreAI: null, noteAI: '' });
  const [studentId, setStudentId] = useState('');
  const [score, setScore] = useState('');
  const [evaluation, setEvaluation] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result);
      };
      reader.readAsText(file);
    }
  };

  const handleCancel = () => {
    setFileContent('Đã hủy.');
  };

  const handleSend = () => {
    console.log("Sending file content to API:", fileContent);

    //send APIGPT method
    const fakeAPIData = {
      scoreAI: 90,
      noteAI: 'Đã đánh giá.',
    };
    setAPIData(fakeAPIData);
    sendDataToAPI({ studentId, score, evaluation });
  };

  const sendDataToAPI = (data) => {
    const combinedData = { ...data, ...apiData };

    //send API method
    console.log("Sending data to API:", combinedData);
    const response = { success: true, messageOK: 'Data sent successfully.', messageFalse: 'Data sent Failed.', };
    if (response.success) {
      console.log("API response:", response.messageOK);
      setStudentId('');
      setScore('');
      setEvaluation('');
    } else {
      console.error("API error:", response.messageFalse);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ studentId, score, evaluation });
    sendDataToAPI({ studentId, score, evaluation });
    alert("Saved !");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-16 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="w-full max-w-5xl p-4 bg-white rounded-lg shadow-md dark:bg-zinc-800">
          <div className="mb-4">
            <label htmlFor="file-upload" className={`block text-sm font-medium ${commonTextColor}`}>
              Tải lên File code của bạn ở đây
            </label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className={`${commonPadding} mt-1 w-full ${commonBorderColor} ${commonRounded} shadow-sm text-sm leading-4 font-medium ${commonTextColor} dark:bg-zinc-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100`}
              onChange={handleFileChange}
            />
          </div>
          <div className={`${commonPadding} ${commonBorderColor} ${commonRounded} text-sm ${commonTextColor} overflow-auto`} style={{ height: '300px' }}>
            <SyntaxHighlighter language="plaintext" style={materialDark}>
              {fileContent}
            </SyntaxHighlighter>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 ${buttonClass}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 ${buttonClass}`}
              onClick={handleSend}
            >
              Send to GPT
            </button>
          </div>
        </div>

        <div className="w-full max-w-5xl p-4 mt-8 text-white bg-white rounded-t-lg shadow-md dark:bg-zinc-800">
          <h2 className="mb-4 text-2xl font-semibold">Đánh Giá của ChatGPT:</h2>
          <div>
            <h3 className="mb-2 font-semibold text-md">+ Điểm chấm GPT</h3>
            <p className="text-lg">{apiData.scoreAI}</p>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 font-semibold text-md">+ Ghi chú từ GPT</h3>
            <p className="text-sm">{apiData.noteAI}</p>
          </div>
        </div>

        <StudentForm 
          handleSubmit={handleSubmit}
          studentId={studentId}
          setStudentId={setStudentId}
          score={score}
          setScore={setScore}
          evaluation={evaluation}
          setEvaluation={setEvaluation}
        />
      </div>
      <footer className="shadow-md bg-slate-600">
        <div className="p-5 text-white">
          © 2024 Create by To Quang Duc - Hoang Minh Hai, CMC University.
        </div>
      </footer>
    </>
  );
};

export default ChamDiem;
