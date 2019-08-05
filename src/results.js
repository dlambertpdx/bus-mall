/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import store from './data/store.js';

const ctx = document.getElementById('myChart').getContext('2d');

const labels = [];
const selectedData = [];
const displayedData = [];
const displayRate = store.getDisplayRate();
const selectedRate = store.getSelectedRate();

for(let i = 0; i < selectedRate.length; i++) {
    const selected = selectedRate[i];
    const id = selected.id;
    const quant = selected.quantity;
    selectedData.push(quant);
    console.log(id);
}
for(let i = 0; i < displayRate.length; i++) {
    const selected = displayRate[i];
    const displays = selected.displays;
    labels.push(selected.id);
    displayedData.push(displays);
    console.log(labels);
}

export function resultChart() {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-undef
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'This Round\'s Selections',
                    data: selectedData,
                    backgroundColor: 'rgba(189, 183, 107, .75)'
                },
                {
                    label: 'This Round\'s Displays',
                    data: displayedData,
                    backgroundColor: 'rgba(184, 134, 11, .75);'
                }
            ]
        },
    
        // Configuration options go here
        options: {}
    });

}

