import { useState, useEffect } from "react";
import Question from "../models/Question";
import tomatoApiClient from "../services/api-client";

const useGameClient = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    {} as Question
  );

  useEffect(() => {
    const controller = new AbortController();
    tomatoApiClient
      .get("/", {
        signal: controller.signal,
      })
      .then((response) => {
        setCurrentQuestion(response.data);
      });

    return () => {
      controller.abort();
    };
  }, [currentQuestionNumber]);

  return {
    currentScore,
    currentQuestionNumber,
    currentQuestion,
    setCurrentScore,
    setCurrentQuestionNumber,
  };
};

export default useGameClient;
