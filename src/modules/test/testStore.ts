import { createReducer, PayloadAction, Selector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { setSelectedTestId, setUserAnswer, setCurrentQuestion, setDoingQuesId } from './action';

interface IStore {
    tests?: { id: string; label: string; testData: TestDataItem[] }[];
    selectedTestId?: string;
    doingQuesId: number
    userAnswer?: any[];
    currentQuestion?: any;
}

export enum QuestionType {
    SingleAnswer,
    MultipleAnswer,
    Essay
};

interface TestDataItem {
    questionID: number;
    questionContent: string;
    questionRequire: string;
    questionType: QuestionType;
    answers: string[];
    correctAnswer: number;
}

const initialState: IStore = {
    tests: [
        {
            id: 'test001',
            label: 'Đề thi môn Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)',
            testData: [
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
            ]
        }
    ],
    doingQuesId: 1,
    selectedTestId: undefined,
    userAnswer: [],
    currentQuestion: undefined
};

const testStore = createReducer(initialState, (builder) => {
    builder
        .addCase(setSelectedTestId, (state, action: PayloadAction<string>) => {
            state.selectedTestId = action.payload;
        })
        .addCase(setDoingQuesId, (state, action: PayloadAction<number>) => {
            state.doingQuesId = action.payload;
        })
        .addCase(setUserAnswer, (state, action: PayloadAction<any[]>) => {
            state.userAnswer = action.payload;
        })
        .addCase(setCurrentQuestion, (state, action: PayloadAction<any>) => {
            state.currentQuestion = action.payload;
        });
});

export const TestsSelector: Selector<RootState, any> = state => {
    return state.test.tests;
}

export const SelectedTestIdSelector: Selector<RootState, string> = state => {
    return state.test.selectedTestId !== undefined ? state.test.selectedTestId : '';
}

export const DoingQuesIdSelector: Selector<RootState, number> = state => {
    return state.test.doingQuesId;
}

export const TestDataSelector: Selector<RootState, any> = state => {
    const tests = state.test.tests;
    const selectedTestId = state.test.selectedTestId;

    if (!tests || !selectedTestId) {
        return [];
    }

    const selectedTest = tests.find(test => test.id === selectedTestId);

    return selectedTest ? selectedTest.testData : [];
}

export default testStore;