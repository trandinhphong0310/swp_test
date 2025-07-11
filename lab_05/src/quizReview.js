import { useSelector } from 'react-redux';
import { Container, Paper, Typography, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function QuizReview() {
  const questions = useSelector((state) => state.quiz.questions);
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Quiz Review
      </Typography>

      {questions.map((q, index) => {
        const isCorrect = q.selectedAnswer === q.correctAnswer;

        return (
          <Paper
            key={q.id}
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: isCorrect ? '#dcedc8' : '#ffcdd2',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Q{index + 1}. {q.text}
            </Typography>

            <Grid container spacing={1}>
              {q.options.map((opt) => (
                <Grid item xs={12} sm={6} key={opt}>
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      backgroundColor:
                        q.selectedAnswer === opt
                          ? isCorrect
                            ? '#aed581' // green if correct
                            : '#ef9a9a' // red if wrong
                          : '#e0e0e0',
                      fontWeight: q.selectedAnswer === opt ? 'bold' : 'normal',
                    }}
                  >
                    {opt}
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box mt={2}>
              <Typography variant="body2" fontStyle="italic">
                ✅ Right answer is: <strong>{q.correctAnswer}</strong>
              </Typography>
            </Box>
          </Paper>
        );
      })}
      <Button 
        onClick={handleBack}
        variant='contained' color='primary'>
        Back to Quiz
      </Button>
    </Container>
  );
}
