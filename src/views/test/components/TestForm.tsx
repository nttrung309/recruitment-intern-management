import React, { useEffect, useState } from "react";

import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const TestForm: React.FC = () => {
    //Redux
    const selectedTestId: string = "test01";

    //Call data from Firebase
    enum QuestionType {
        SingleAnswer, // Một đáp án
        MultipleAnswer, // Nhiều đáp án
        Essay // Tự luận
    };

    const testData = [
        {
            questionID: 1,
            questionContent: "Sum = 24 + 56 + 72 + 82.",
            questionRequire: "Trong trường hợp trên Sum là:",
            questionType: QuestionType.SingleAnswer,
            answers: ['Letter', 'Integer', 'Number', 'Character'],
            correctAnswer: 2
        },
        {
            questionID: 2,
            questionContent: "Sum = 24 + 56 + 72 + 82.",
            questionRequire: "Trong trường hợp trên Sum là:",
            questionType: QuestionType.MultipleAnswer,
            answers: ['Letter', 'Integer', 'Number', 'Character'],
            correctAnswer: 2
        },
        {
            questionID: 3,
            questionContent: "Sum = 24 + 56 + 72 + 82.",
            questionRequire: "Trong trường hợp trên Sum là:",
            questionType: QuestionType.Essay,
            answers: ['Letter', 'Integer', 'Number', 'Character'],
            correctAnswer: 2
        }
    ];

    const  [doingQuesId, setDoingQuesId] = useState<number>(1);
    const [userAnswer, setUserAnswer] = useState<string[]>([]);

    const currentQuestion = testData?.find(question => question.questionID === doingQuesId);

    const HandleUserAnswer = () => (e: RadioChangeEvent) => {
        if (currentQuestion) {
            const newUserAnswer = [...userAnswer];

            newUserAnswer[currentQuestion.questionID - 1] = e.target.value + 1;
            setUserAnswer(newUserAnswer);
        }
    };

    useEffect(() => {
        console.log(userAnswer);
    })

    return (
        <div className="test-form">
            <div className="test-form__question-num">
                Câu: {' ' + currentQuestion?.questionID}
            </div>
            <div className="test-form__question-content">
                {currentQuestion?.questionContent}
            </div>
            <div className="test-form__question-require">
                {currentQuestion?.questionRequire}
            </div>
            <div className="test-form__answers">
                <Radio.Group onChange={HandleUserAnswer()} >
                    {currentQuestion?.answers.map((answer, index) => {
                        switch(currentQuestion?.questionType){
                            case QuestionType.SingleAnswer:
                                return(
                                    <div className={"test-form__answer" + index}>
                                        <Radio value={index}> 
                                            {String.fromCharCode(65 + index)}. {answer}
                                        </Radio>
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                </Radio.Group>
            </div>
        </div>
    );
};

export default TestForm;