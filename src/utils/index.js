export const getPositivityRate = (data, i) => {
    var dates = Object.keys(data)
    var today = dates[i];
    var yesterday = dates[i-1];

    var todayRate, newRate;
    if(yesterday) {
        todayRate = data[today].newConfirmed / data[today].newTests * 100;
        todayRate = Math.round(todayRate * 10) / 10;

        var yesterdayRate = data[yesterday].newConfirmed / data[yesterday].newTests * 100;
        yesterdayRate = Math.round(yesterdayRate * 10) / 10;
        
        newRate = todayRate - yesterdayRate;
        newRate = Math.round(newRate * 10) / 10;
    } else {
        todayRate = data[today].newConfirmed / data[today].newTests * 100;
        todayRate = Math.round(todayRate * 10) / 10;
        newRate = 0.0;
    }
    
    return {positivityRate: todayRate, newPositivityRate: newRate};
};

export const objectIsEmpty = (object) => {
    return object ? Object.keys(object).length === 0 : true;
}