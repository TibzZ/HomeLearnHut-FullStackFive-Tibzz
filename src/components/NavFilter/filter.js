import {homework} from "../../libs/homework";

export const autumnOne = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('September') || dateSet.includes('October')) {
        return item;
    }
});

export const autumnTwo = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('November') || dateSet.includes('December')) {
        return item;
    }
});

export const springOne = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('January') || dateSet.includes('February') ) {
        return item;
    }
});

export const springTwo = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('March') || dateSet.includes('April')) {
        return item;
    }
});

export const summerOne = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('April') || dateSet.includes('May')) {
        return item;
    }
});

export const summerTwo = homework.filter(item => {
    const {dateSet} = item;

    if(dateSet.includes('June') || dateSet.includes('July')) {
        return item;
    }
});



