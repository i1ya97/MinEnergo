import { DataService } from './../../../data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import dataChart from 'src/assets/json.json';
@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    private chart: Chart;
    constructor(private dataService: DataService) { }
    ngOnInit(): void {
        this.dataService.updateChart.subscribe(() => {
            this.createChart();
        })
        this.createChart();

    }
    createChart() {
        const canvas = document.getElementById('chart');
        var data = dataChart;
        var labels = [];
        var obtainingEnergi = [];
        var consumotion = [];
        var production = [];
        var nonWill = [];
        var agracultural = [];
        var population = [];
        var losses = [];
        data.forEach(point => {
            if (+new Date(point.date) < +this.dataService.end && +new Date(point.date) > +this.dataService.start || (!this.dataService.start && !this.dataService.end)) {
                labels.push(point.date);
                obtainingEnergi.push(point.obtainingEnergi);
                consumotion.push(point.consumotion);
                production.push(point.production);
                nonWill.push(point.nonWill);
                agracultural.push(point.agracultural);
                population.push(point.population);
                losses.push(point.losses);
            }
        })
        this.chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Потребление',
                    data: obtainingEnergi,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1,
                    yAxisID: "y-axis-1",
                }, {
                    label: 'Генерация',
                    data: consumotion,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1,
                    yAxisID: "y-axis-1",
                }, {
                    label: 'Потребение производств',
                    data: production,
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Потребление непроизводственных',
                    data: nonWill,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Потребление с/х',
                    data: agracultural,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Потребление населением',
                    data: population,
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Потери',
                    data: losses,
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        },
                        position: 'right',
                        id: "y-axis-2"
                    },
                    {
                        ticks: {
                            beginAtZero: false
                        }
                    }],
                },
                hover: {
                    enabled: false
                },
                responsiveAnimationDuration: 0,
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        fontColor: 'darkgrey'
                    }
                }

            }
        });
    }
}
