import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/modules';
import { DoingQuesIdSelector, SelectedTestIdSelector, TestDataSelector } from "src/modules/test/testStore";
import { QuestionType } from "src/modules/test/testStore";

import type { RadioChangeEvent } from 'antd';
import { Radio, Checkbox, Input } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import type { GetProp } from 'antd';
import { setDoingQuesId } from "src/modules/test/action";

const { TextArea } = Input;


const TestForm: React.FC = () => {
    const dispatch = useDispatch();

    //Redux
    const selectedTestId = useSelector(SelectedTestIdSelector);
    const testData = useSelector(TestDataSelector);
    const  doingQuesId = useSelector(DoingQuesIdSelector);
    const [userAnswer, setUserAnswer] = useState<any[]>([]);
    const [currentQuestion, SetCurrentQuestion] = useState<any>();

    const HandleSingleAnswer = () => (e: RadioChangeEvent) => {
        if (currentQuestion) {
            const newUserAnswer = [...userAnswer];

            newUserAnswer[currentQuestion.questionID - 1] = e.target.value + 1;
            setUserAnswer(newUserAnswer);
        }
    };

    const HandleMultipleAnswer: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        console.log('checked = ', checkedValues);
        if (currentQuestion) {
            const newUserAnswer = [...userAnswer];

            newUserAnswer[currentQuestion.questionID - 1] = checkedValues;
            setUserAnswer(newUserAnswer);
        }
    };

    const HandleEssayAnswer = (textAnswer: any) => {
        if (currentQuestion) {
            const newUserAnswer = [...userAnswer];

            newUserAnswer[currentQuestion.questionID - 1] = textAnswer;
            setUserAnswer(newUserAnswer);
        }
    }

    useEffect(() => {
        const newQuestion = testData?.find((question: any) => question.questionID === doingQuesId);
        SetCurrentQuestion(newQuestion);
    }, [doingQuesId])

    const HandleNavigateQuestion = (action: 'next' | 'back') => {
        if(action == 'next' && doingQuesId < testData.length){
            dispatch(setDoingQuesId(doingQuesId + 1));
        }
        else if (doingQuesId != 0){
            dispatch(setDoingQuesId(doingQuesId - 1));
        }
    }

    // useEffect(() => {
    //     console.log(userAnswer);
    // }, [userAnswer]);

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
                {currentQuestion?.questionType === QuestionType.SingleAnswer && (
                    <Radio.Group onChange={HandleSingleAnswer()}>
                        {currentQuestion?.answers.map((answer: string, index: number) => (
                            <div className='test-form-single-answer' key={index}>
                                <Radio value={index}> 
                                    {String.fromCharCode(65 + index)}. {answer}
                                </Radio>
                            </div>
                        ))}
                    </Radio.Group>
                    
                )}
                {currentQuestion?.questionType === QuestionType.MultipleAnswer && (
                    <Checkbox.Group onChange={HandleMultipleAnswer}>
                    {currentQuestion?.answers.map((answer: string, index: number) => (
                        <Checkbox value={index} key={index} className="test-form-multiple-answer">
                            {String.fromCharCode(65 + index)}. {answer}
                        </Checkbox>
                        ))}
                    </Checkbox.Group>
                )}
                {currentQuestion?.questionType === QuestionType.Essay && (
                    <TextArea className="test-form-essay-answer"
                        value={userAnswer[doingQuesId]}
                        onChange={(e) => HandleEssayAnswer(e.target.value)}
                        placeholder="Điền câu trả lời"
                    />
                )}
            </div>
            <div className="test-form__question-navigate">
                <ArrowLeftOutlined className="btn-prev-question" onClick={() => {HandleNavigateQuestion('back');}}/>
                <ArrowRightOutlined className="btn-next-question" onClick={() => {HandleNavigateQuestion('next');}}/>
            </div>
        </div>
    );
};

export default TestForm;