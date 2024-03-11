import React, { useState } from "react";

import TestForm from "./TestForm";
import SubmitTestForm from "./SubmitTestForm";

import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "src/firebase";

import { Modal } from "antd";

const TestBody: React.FC = () => {
    const navigate = useNavigate();

    //Call data from firebase 
    const totalQuestions: number = 20;
    const finishedQuestions: number = 2;

    const [isSubmitFormOpen, setIsSubmitFormOpen] = useState<boolean>(false);

    const OpenSubmitForm = () => {
        setIsSubmitFormOpen(true)
    }

    const HandleCloseForm = () => {
        setIsSubmitFormOpen(false);
    }

    const HandleSubmitTest = () => {
        setIsSubmitFormOpen(false);
        //Update user's answer
        navigate('/process')
    }

    // const TestAddDoc = async () => {
    //     try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //     console.error("Error adding document: ", e);
    //     }
    // }

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
                <button onClick={OpenSubmitForm} type="button" className="btn-submit-test">Nộp bài</button>
            </div>
            <Modal className="modal-submit-test"
                open={isSubmitFormOpen}
                centered
                footer={null}
                modalRender={() => <SubmitTestForm HandleCloseForm={HandleCloseForm} HandleSubmitTest={HandleSubmitTest}/>}
            />
            <TestForm/>
        </div>
    );
};

export default TestBody;