// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
   
  ]

  function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
}
