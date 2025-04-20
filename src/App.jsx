import './App.css';
import { Data } from './api-ref.js';
import React from 'react';
import { Button, Card, CardContent, Menu, MenuItem, Paper, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const dates = [['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница']];

function App() {
  const [anchorElGrade, setAnchorElGrade] = React.useState(null);
  const [anchorElDay, setAnchorElDay] = React.useState(null);
  const [currentData, setCurrentData] = React.useState(Data);
  const [currentDay, setCurrentDay] = React.useState('MONDAY');
  const openGrade = Boolean(anchorElGrade);
  const openDay = Boolean(anchorElDay);
  const handleClickGrade = (event) => {
    setAnchorElGrade(event.currentTarget);
  };
  const handleCloseGrade = (ctx) => {
    if(ctx.target.id!='') setCurrentData(Data.filter((item) => item.grade == ctx.target.id));
    setAnchorElGrade(null);
  };
  const handleClickDay = (event) => {
    setAnchorElDay(event.currentTarget);
  };
  const handleCloseDay = (ctx) => {
    if(ctx.target.id!='') setCurrentDay(ctx.target.id);
    setAnchorElDay(null);
  };
  
  return (
    <div>
      <Button
        aria-controls={openGrade ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openGrade ? 'true' : undefined}
        onClick={handleClickGrade}
      >
        Выберите класс
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElGrade}
        open={openGrade}
        onClose={handleCloseGrade}
      >
        {
          Data.map(item => <MenuItem id={item.grade} onClick={(ctx) => handleCloseGrade(ctx)}>
            {item.grade}
          </MenuItem>)
        }
      </Menu>
      <Button
        aria-controls={openDay ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openDay ? 'true' : undefined}
        onClick={handleClickDay}
      >
        Выберите день недели
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElDay}
        open={openDay}
        onClose={handleCloseDay}
      >
        <MenuItem 
          id={dates[0][new Date(Date.now()).getDay() - 1]} 
          onClick={(ctx) => handleCloseDay(ctx)}
        >
          Сегодня
        </MenuItem>
        <MenuItem id={dates[0][0]} onClick={(ctx) => handleCloseDay(ctx)}>Понедельник</MenuItem>
        <MenuItem id={dates[0][1]} onClick={(ctx) => handleCloseDay(ctx)}>Вторник</MenuItem>
        <MenuItem id={dates[0][2]} onClick={(ctx) => handleCloseDay(ctx)}>Среда</MenuItem>
        <MenuItem id={dates[0][3]} onClick={(ctx) => handleCloseDay(ctx)}>Четверг</MenuItem>
        <MenuItem id={dates[0][4]} onClick={(ctx) => handleCloseDay(ctx)}>Пятница</MenuItem>
      </Menu>
      <Card>
        Класс: {currentData[0].grade} • День: {dates[1][dates[0].indexOf(currentDay)]}
        <CardContent>
          <TableContainer component={Paper}>
            {
              currentData[0].subjects
                .filter(item => item.subjectDay == currentDay)
                .map(item => 
                  <TableRow>
                    <TableCell>
                      {
                        currentData[0].subjects
                        .filter(item => item.subjectDay == currentDay)
                        .indexOf(item) + 1
                      }
                    </TableCell>
                    <TableCell align='right'>{item.lesson}</TableCell>
                    <TableCell align='right'>{item.room}</TableCell>
                  </TableRow>
                )
            }
          </TableContainer>    
        </CardContent>
      </Card>
    </div>
  )
}

export default App
