import ayurDrugs from './ayurDrugs';
import unaniDrugs from './unaniDrugs';
import herbalDrugs from './herbalDrugs';
import homeoDrugs from './homeoDrugs';

const amcDrugsData = [...ayurDrugs, ...unaniDrugs, ...herbalDrugs, ...homeoDrugs];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(amcDrugsData);

export default amcDrugsData