import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz, selectAnswer, submitQuiz } from './slice/quizSlice';
import { Grid, Typography, Button, Paper, FormControlLabel, Radio, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const questions = useSelector(state => state.quiz.questions)
  const submitted = useSelector(state => state.quiz.submitted)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSelect = (questionId, answer) => {
    dispatch(selectAnswer({ questionId, answer }))
  }

  const handleSubmit = () => {
    dispatch(submitQuiz())
    alert("Submit successfully")
  }

  const handleReset = () => {
    dispatch(resetQuiz())
  }

  const handleQuizReview = () => {
    navigate('/review')
  }

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 4 }} align="center">
        <Typography variant="h4" gutterBottom align="center">
          Quiz
        </Typography>

        {questions.map((question, index) => (
          <div key={question.id} style={{ marginBottom: '30px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Q{index + 1}. {question.text}
            </Typography>

            <Grid container spacing={2} style={{ justifyContent: "center" }}>
              {question.options.map((opt) => (
                <Grid item xs={6} key={opt}>
                  <FormControlLabel
                    value={opt}
                    control={
                      <Radio
                        checked={question.selectedAnswer === opt}
                        onChange={() => handleSelect(question.id, opt)}
                        disabled={submitted}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontWeight: question.selectedAnswer === opt ? 'bold' : 'normal',
                        }}
                      >
                        {opt}
                      </Typography>
                    }
                    sx={{
                      width: '100%',
                      backgroundColor: '#e3f2fd',
                      borderRadius: 2,
                      px: 2,
                      py: 1
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ))}

        <Grid container justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={handleQuizReview}
          >
            Quiz Review
          </Button>
        </Grid>
      </Paper>
    </Container>
  )
}
