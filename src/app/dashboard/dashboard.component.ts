import { Component, OnInit } from "@angular/core";
import * as Chartist from "chartist";
import {valuesByDay, valuesToday} from '../../values';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on("draw", function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === "point") {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on("draw", function (data) {
      if (data.type === "bar") {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease",
          },
        });
      }
    });

    seq2 = 0;
  }

  today = {
    confirmados: 0,
    suspeitos: 0,
    descartados: 0,
    confirmadosM: 0,
    confirmadosF: 0,
    confirmadosInternacoes: 0,
    suspeitosInternacoes: 0,
    descartadosInternacoes: 0,
  };
  lastWeek = {
    confirmados: 0,
    suspeitos: 0,
    descartados: 0,
    confirmadosM: 0,
    confirmadosF: 0,
  };
  taxas = {
    confirmado: 0,
    suspeito: 0,
    descartado: 0,
  };

  valuesByDay = [];

  loadData() {
    this.today = valuesToday.today;
    this.taxas.confirmado = Number.parseFloat(valuesToday.taxas.confirmado.toFixed(2));
    this.taxas.suspeito = Number.parseFloat(valuesToday.taxas.suspeito.toFixed(2));
    this.taxas.descartado = Number.parseFloat(valuesToday.taxas.descartado.toFixed(2));
    this.lastWeek = valuesToday.lastWeek;

    this.valuesByDay = valuesByDay;
  }

  ngOnInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    this.loadData();
    const dataDailySalesChart: any = {
      labels: this.valuesByDay.map(value => (value.date.toLocaleDateString())).reverse(),
      series: [this.valuesByDay.map(value => (value.confirmados))],
    };

    const optionsDailySalesChart: any = {
      axisX: {
        showGrid: false,
      },
      low: Math.min.apply(Math, this.valuesByDay.map(function(o) { return o.confirmados; })) - 50,
      high: Math.max.apply(Math, this.valuesByDay.map(function(o) { return o.confirmados; })) + 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    var dailySalesChart = new Chartist.Bar(
      "#dailySalesChart",
      dataDailySalesChart,
      optionsDailySalesChart
    );

    this.startAnimationForBarChart(dailySalesChart);

    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: this.valuesByDay.map(value => (value.date.toLocaleDateString())).reverse(),
      series: [this.valuesByDay.map(value => (value.mortes))],
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: Math.min.apply(Math, this.valuesByDay.map(function(o) { return o.mortes; })) - 50,
      high: Math.max.apply(Math, this.valuesByDay.map(function(o) { return o.mortes; })) + 50,  // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    var completedTasksChart = new Chartist.Line(
      "#completedTasksChart",
      dataCompletedTasksChart,
      optionsCompletedTasksChart
    );

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);

    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    var datawebsiteViewsChart = {
      labels: this.valuesByDay.map(value => (value.date.toLocaleDateString())).reverse(),
      series: [this.valuesByDay.map(value => (value.suspeitos))],
    };
    var optionswebsiteViewsChart = {
      axisX: {
        showGrid: false,
      },
      low: Math.min.apply(Math, this.valuesByDay.map(function(o) { return o.suspeitos; })) - 50,
      high: Math.max.apply(Math, this.valuesByDay.map(function(o) { return o.suspeitos; })) + 50,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    var responsiveOptions: any[] = [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ];
    var websiteViewsChart = new Chartist.Bar(
      "#websiteViewsChart",
      datawebsiteViewsChart,
      optionswebsiteViewsChart,
      responsiveOptions
    );

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  }
}
