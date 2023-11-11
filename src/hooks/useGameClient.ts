import { useState, useEffect } from "react";
import Question from "../models/Question";
import tomatoApiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGameClient = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    {} as Question
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    tomatoApiClient
      .get("/", {
        signal: controller.signal,
      })
      .then((response) => {
        setCurrentQuestion(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
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
    isLoading,
    error,
  };
};

export default useGameClient;
