import {homework} from "../../libs/homework";

const autumnOne = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('September') || dateSet.includes('October')) {
        return item;
    }
});

const autumnTwo = homework.filter(item => {
    const {dateSet} = item;

    if(item.dateSet.includes('November') || item.dateSet.includes('December')) {
        return item;
    }
});

const springOne = homework.filter(item => {
    const {dateSet} = item;

    if(item.dateSet.includes('January') || item.dateSet.includes('February') ) {
        return item;
    }
});

const springTwo = homework.filter(item => {
    const {dateSet} = item;

    if(item.dateSet.includes('March') || item.dateSet.includes('April')) {
        return item;
    }
});

const summerOne = homework.filter(item => {
    const {dateSet} = item;

    if(item.dateSet.includes('April') || item.dateSet.includes('May')) {
        return item;
    }
});

const summerTwo = homework.filter(item => {
    const {dateSet} = item;

    if(item.dateSet.includes('June') || item.dateSet.includes('July')) {
        return item;
    }
});



