import React, {useEffect, useMemo, useState} from 'react';
import {Button, CircularProgress, Container, Grid, Stack, Step, StepLabel, Stepper, Typography} from "@mui/material";

enum Page {
    INTRO,
    LOADING,
    GAME,
    FINISHED
}

function App() {
    const [page, setPage] = useState(Page.INTRO)
    const [correct, setCorrect] = useState(0);
    useEffect(() => {
        if (page === Page.LOADING) setTimeout(() => setPage(Page.GAME), 5000);
    }, [page]);

    function handleFinish(c: number){
        setCorrect(c)
        setPage(Page.FINISHED)
    }

    if (page === Page.INTRO) {
        return (
            <Stack pt={8} alignItems="center">
                <Typography variant="h3">
                    Welcome!
                </Typography>
                <img style={{width: 300}} src="4542742.jpg" alt=""/>
                <Button onClick={() => setPage(Page.LOADING)} variant="contained">Get started</Button>
            </Stack>
        );
    }

    if (page === Page.LOADING) {
        return <Stack pt={8} alignItems="center">
            <Typography variant="h3">
                Generating your tasks!
            </Typography>
            <img style={{width: 300}} src="4542742.jpg" alt=""/>
            <CircularProgress/>
        </Stack>
    }

    if(page === Page.FINISHED){
        return <Stack pt={8} alignItems="center">
            <Typography variant="h3">
                Good Job!
            </Typography>
            <Typography variant="h4">You answered {correct} out of 5 questions right!</Typography>
            <img style={{width: 300}} src="4542742.jpg" alt=""/>
            <Button onClick={() => setPage(Page.LOADING)} variant="contained">Play again</Button>

        </Stack>
    }

    return <QuestionPage onFinish={handleFinish}/>

}

const allQuestions = [
    {
        "problem": "If a box contains 24 pencils and you take out 8 pencils, how many pencils are left in the box?",
        "options": ["8", "12", "16", "24"],
        "answer": "16"
    },
    {
        "problem": "What is the sum of 35 and 12?",
        "options": ["27", "47", "57", "71"],
        "answer": "47"
    },
    {
        "problem": "If a square has a side length of 5 units, what is its area?",
        "options": ["10", "15", "20", "25"],
        "answer": "25"
    },
    {
        "problem": "A book costs $18. If Emily pays with a $20 bill, how much change will she receive?",
        "options": ["$2", "$10", "$16", "$18"],
        "answer": "$2"
    },
    {
        "problem": "If a clock shows 3:45 PM, what time will it be after 2 hours and 30 minutes?",
        "options": ["5:15 PM", "6:15 PM", "6:45 PM", "7:15 PM"],
        "answer": "6:15 PM"
    },
    {
        "problem": "What is the value of 5²?",
        "options": ["10", "15", "20", "25"],
        "answer": "25"
    },
    {
        "problem": "If 1/4 of a pizza is left and it is divided into 8 equal slices, how many slices are there?",
        "options": ["2", "4", "6", "8"],
        "answer": "2"
    },
    {
        "problem": "Sara has 15 stickers. If she gives away 7 stickers, how many stickers does she have left?",
        "options": ["5", "7", "8", "15"],
        "answer": "8"
    },
    {
        "problem": "What is the difference between 48 and 23?",
        "options": ["15", "25", "35", "48"],
        "answer": "25"
    },
    {
        "problem": "If a triangle has a base of 6 units and a height of 4 units, what is its area?",
        "options": ["8", "12", "16", "24"],
        "answer": "12"
    },
    {
        "problem": "If a box contains 24 pencils and you take out 8 pencils, how many pencils are left in the box?",
        "options": ["8", "12", "16", "24"],
        "answer": "16"
    },
    {
        "problem": "What is the sum of 35 and 12?",
        "options": ["27", "47", "57", "71"],
        "answer": "47"
    },
    {
        "problem": "If a square has a side length of 5 units, what is its area?",
        "options": ["10", "15", "20", "25"],
        "answer": "25"
    },
    {
        "problem": "A book costs $18. If Emily pays with a $20 bill, how much change will she receive?",
        "options": ["$2", "$10", "$16", "$18"],
        "answer": "$2"
    },
    {
        "problem": "If a clock shows 3:45 PM, what time will it be after 2 hours and 30 minutes?",
        "options": ["5:15 PM", "6:15 PM", "6:45 PM", "7:15 PM"],
        "answer": "6:15 PM"
    },
    {
        "problem": "What is the value of 5²?",
        "options": ["10", "15", "20", "25"],
        "answer": "25"
    },
    {
        "problem": "If 1/4 of a pizza is left and it is divided into 8 equal slices, how many slices are there?",
        "options": ["2", "4", "6", "8"],
        "answer": "2"
    },
    {
        "problem": "Sara has 15 stickers. If she gives away 7 stickers, how many stickers does she have left?",
        "options": ["5", "7", "8", "15"],
        "answer": "8"
    },
    {
        "problem": "What is the difference between 48 and 23?",
        "options": ["15", "25", "35", "48"],
        "answer": "25"
    },
    {
        "problem": "If a triangle has a base of 6 units and a height of 4 units, what is its area?",
        "options": ["8", "12", "16", "24"],
        "answer": "12"
    },
    {
        "problem": "If a bag contains 18 marbles and you take out 6 marbles, how many marbles are left in the bag?",
        "options": ["6", "8", "12", "18"],
        "answer": "12"
    },
    {
        "problem": "What is the product of 7 and 9?",
        "options": ["14", "27", "63", "72"],
        "answer": "63"
    },
    {
        "problem": "If a rectangle has a length of 10 units and a width of 4 units, what is its perimeter?",
        "options": ["14", "20", "24", "40"],
        "answer": "28"
    },
    {
        "problem": "What is the value of 9³?",
        "options": ["81", "243", "729", "2,187"],
        "answer": "729"
    }
];

function getRandom(length: number) {
    return Math.floor(Math.random() * (length));
}

function getRandomSample<T>(array: T[], size: number) {
    const length = array.length;

    for (let i = size; i--;) {
        const index = getRandom(length);
        const temp = array[index];
        array[index] = array[i];
        array[i] = temp;
    }

    return array.slice(0, size);
}
function QuestionPage({onFinish}: any) {
    const questions = useMemo(() => getRandomSample(allQuestions, 5), []);
    const [idx, setIdx] = useState(0);
    const question = questions[idx];
    const [mode, setMode] = useState("answer");
    const [succcess, setSuccess] = useState([false, false, false, false, false])

    function handleClick(option: string){
        setMode("solution")
        if(option === question.answer){
            setSuccess(prev => {
                prev[idx] = true;
                return prev;
            })
        }
    }

    function handleNext(){
        setMode("answer")
        setIdx(p => p+1)
    }

    function handleFinish(){
        onFinish(succcess.filter(a => a).length);
    }

    return <Container maxWidth="sm" sx={{pt: 10}}>
        <Stepper activeStep={idx}>
            {
                questions.map((q, i) => <Step completed={succcess[i]} key={i}>
                <StepLabel error={idx > i && !succcess[i]}><span></span></StepLabel>
            </Step>)
            }
        </Stepper>

        <h2>{question.problem}</h2>

        <Grid spacing={1} container>
            {question.options.map(option => <Grid item xs={6}>
                <Button color={mode==="answer" ? "primary" : (option===question.answer?"success":"error")} onClick={() => handleClick(option)} size="large" fullWidth
                        variant="contained">{option}</Button>
            </Grid>)}
        </Grid>

        {
            mode === "solution" && idx!==4 && <Button onClick={handleNext} fullWidth sx={{mt: 4}} variant="contained">Next question</Button>
        }

        {
            mode === "solution" && idx===4 && <Button onClick={handleFinish} fullWidth sx={{mt: 4}} variant="contained">Finish</Button>
        }
    </Container>;
}

export default App;
