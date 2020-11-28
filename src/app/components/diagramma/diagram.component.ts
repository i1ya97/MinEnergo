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
        this.chart = new Chart(canvas, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        data[data.length-1].production,
                        data[data.length-1].nonWill,
                        data[data.length-1].agracultural,
                        data[data.length-1].population,
                        data[data.length-1].losses,
                    ],
                    backgroundColor: [
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)',
                        'rgba(255, 159, 64)'
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
                },
                title: {
                    display: true,
                    text: 'Зависимость показателей за послежний месяц'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
}
