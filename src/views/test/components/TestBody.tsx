import React from "react";

const TestBody: React.FC = () => {
    //Call data from firebase 
    const totalQuestions: number = 20;
    const finishedQuestions: number = 2;

    return (
        <div className='test-page'>
            <div className='test-page__title'>
                <p className="test-page__title__head">Đề thi môn</p>
                <p className="test-page__title__sub">Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)</p>
            </div>
            <div className="test-page__test-sumary">
                <div className="test-page__test-sumary__total-question">
                    Tổng câu hỏi: <span>{totalQuestions}</span>
                </div>
                <div className="test-page__test-sumary__finished-question">
                    Hoàn thành: <span>{finishedQuestions}/{totalQuestions}</span>
                </div>
                <div className="test-page__test-sumary__timer">
                    {/* Timer icon here */}
                    00:05:00
                </div>
                <button type="button" className="btn-submit-test">Nộp bài</button>
            </div>
        </div>
    );
};

export default TestBody;