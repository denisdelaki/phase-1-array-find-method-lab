// code your solution here

superbowlWin = (record) => {
  
  const winner = record.find((record) => record.result === 'W')
  return !!winner ? winner.year : undefined;
  
};