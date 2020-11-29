import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import dataChart from 'src/assets/json.json';
@Component({
    selector: 'diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
    private chart;
    ngOnInit(): void {
        const canvas = document.getElementById('diagram');
        var data = dataChart;
        let index = 0;
        let curDate = new Date(new Date().getFullYear()+'-'+new Date().getMonth());
        for(let i = 0; i < data.length; i++){
            if(+new Date(data[i].date) === +curDate){
                index = i;
            }
        }
        this.chart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        data[index].production,
                        data[index].nonWill,
                        data[index].agracultural,
                        data[index].population,
                        data[index].losses,
                    ],
                    backgroundColor: [
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 120)',
                        'rgba(255, 159, 12)'
                    ],
                    label: 'Dataset'
                }],
                labels: [
                    'Потребение производств',
                    'Потребление непроизводственных',
                    'Потребление с/х',
                    'Потребление населением',
                    'Потери'
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: 'darkgrey'
                    }
                },
                title: {
                    display: true,
                    fontColor: 'darkgrey',
                    text: 'Зависимость показателей за послеlyий месяц'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                maintainAspectRatio: false
            },
            layout: {
                padding: {
                  left: 20,
                  right: 20,
                  top: 20,
                  bottom: 20
                }
              },
        });
    }
}
