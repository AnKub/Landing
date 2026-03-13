"use client";
import { useState, useEffect } from 'react';
import quizData from './quizData';
import styles from './Quiz.module.scss';

function useQuizPersistence(step: number, setStep: (n: number) => void, answers: any[], setAnswers: (a: any[]) => void, questionsLength: number) {
  useEffect(() => {
    if (step < questionsLength) {
      localStorage.setItem('quizStep', step.toString());
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
    } else {
      localStorage.removeItem('quizStep');
      localStorage.removeItem('quizAnswers');
    }
  }, [step, answers, questionsLength]);

  useEffect(() => {
    const savedStep = localStorage.getItem('quizStep');
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (savedStep && savedAnswers) {
      setStep(Number(savedStep));
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [startTime] = useState(Date.now());

  useQuizPersistence(step, setStep, answers, setAnswers, quizData.length);

  const current = quizData[step];
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSelect = (option: string) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[step] = option;
      return copy;
    });
    setInputValue('');
    setError('');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleNext = () => {
    if (current.type === 'input') {
      const value: number = Number(inputValue);
      if (
        (current.min && value < current.min) ||
        (current.max && value > current.max)
      ) {
        setError(`Value must be between ${current.min} and ${current.max}`);
        return;
      }
      if (current.validate && !current.validate(value, answers)) {
        setError(current.error);
        return;
      }
      handleSelect(value.toString());
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    setError('');
    setInputValue('');
  };


  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  useEffect(() => {
    if (step >= quizData.length && !sent && !sending) {
      setSending(true);
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, timeSpent }),
      })
        .then(res => res.json())
        .then(data => {
          setSent(true);
          setSending(false);
        })
        .catch(() => {
          setErrorMsg('Failed to send results. Please try again later.');
          setSending(false);
        });
    }
  }, [step, sent, sending, answers, startTime]);

  if (step >= quizData.length) {
    return (
      <div className={styles.quizSection}>
        <div className={styles.quizBox}>
          {sending && 'Sending your results...'}
          {errorMsg && <div className={styles.error}>{errorMsg}</div>}
          {sent && !sending && !errorMsg && 'Thank you for completing the quiz!'}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizSection}>
      <div className={styles.quizBox}>
  
        <div className={styles.question}>{current.question}</div>      
        <div className={styles.progress}>Step {step + 1} of {quizData.length}</div>
        {current.type === 'select' && current.options && (
          <div className={styles.options}>
            {(current.options as string[]).map((option: string) => (
              <button
                key={option}
                className={
                  answers[step] === option
                    ? `${styles.optionBtn} ${styles.selected}`
                    : styles.optionBtn
                }
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {current.type === 'input' && (
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type={current.inputType || 'text'}
              value={inputValue}
              onChange={handleInput}
              placeholder={current.placeholder}
            />
            {error && <div className={styles.error}>{error}</div>}
          </div>
        )}
        <div className={styles.controls}>
          {step > 0 && (
            <button className={styles.navBtn} onClick={handleBack}>
              Back
            </button>
          )}
          {(answers[step] || inputValue) && (
            <button className={styles.navBtn} onClick={handleNext}>
              {step === quizData.length - 1 ? 'Submit' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
