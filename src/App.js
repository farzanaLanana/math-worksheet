import React, { useState } from 'react';
import './index.css';

const questions = [
  { id: 1, question: "17 rounded off to the nearest 10 is..", options: [10, 20, 17], answer: 20 },
  { id: 2, question: "45 rounded off to the nearest 10 is..", options: [50, 45, 40], answer: 50 },
  { id: 3, question: "75 rounded off to the nearest 10 is..", options: [70, 80, 175], answer: 80 },
  { id: 4, question: "19 rounded off to the nearest 10 is..", options: [20, 10, 19], answer: 20 },
  { id: 5, question: "64 rounded off to the nearest 10 is..", options: [64, 70, 60], answer: 60 },
  { id: 6, question: "0 rounded off to the nearest 10 is..", options: [10, 1, 0], answer: 0 },
  { id: 7, question: "98 rounded off to the nearest 10 is..", options: [80, 100, 89], answer: 100 },
  { id: 8, question: "199 rounded off to the nearest 10 is..", options: [190, 100, 200], answer: 200 },
  { id: 9, question: "94 rounded off to the nearest 10 is..", options: [100, 94, 90], answer: 90 },
  { id: 10, question: "165 rounded off to the nearest 10 is..", options: [160, 170, 150], answer: 170 },
  { id: 11, question: "445 rounded off to the nearest 10 is..", options: [450, 440, 500], answer: 450 },
  { id: 12, question: "999 rounded off to the nearest 10 is..", options: [99, 1000, 909], answer: 1000 },
];

function App() {
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption,
    });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    if (!name) {
      alert("Please enter your name before submitting the quiz.");
      return;
    }
    let newScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const handleReset = () => {
    setAnswers({});
    setScore(null);
    setName('');
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="text-center font-sans p-4">
      <header className="bg-csyellow text-white p-4 rounded">
        <h1 className="text-2xl">Rounding Off to Nearest 10</h1>
      </header>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded shadow-lg mt-6">
        <div className="mb-4">
          <label className="block mb-2 text-lg">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </label>
        </div>
        <div className="p-4 bg-white rounded shadow text-left">
          <p className="font-bold mb-2">{questions[currentQuestionIndex].question}</p>
          {questions[currentQuestionIndex].options.map((option) => (
            <label key={option} className="block mb-1">
              <input
                type="radio"
                name={`question-${questions[currentQuestionIndex].id}`}
                value={option}
                checked={answers[questions[currentQuestionIndex].id] === option}
                onChange={() => handleOptionChange(questions[currentQuestionIndex].id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="bg-cssuccess text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
        {score !== null && (
          <div className="mt-6 text-xl font-bold">
            <p>Your score is: {score} / 12</p>
          </div>
        )}
      </div>
      <footer className="mt-6">
        <p>&copy; MathInEnglish.com</p>
      </footer>
    </div>
  );
}

export default App;
