(function(){
    'use strict';
    const ctx = document.getElementById("myChart");
    const data = {
        labels: ["Software Entrepreneurship","Artificial Intelligence","Algorithm Design","Premiere League Football","Web App Architecture", "UI/UX Design","Research-Oriented Software"],
        datasets: [
            {
                backgroundColor: "rgba(179,181,198,0.3)",
                borderColor: "#00FFC9",
                pointBackgroundColor: "#00FFC9",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [90, 75, 90, 20, 90, 40, 80]
            }
        ]
    };
    Chart.defaults.global.legend.display = false;
    const myChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options:{
            scale:{
                ticks: {
                    fontSize: 14,
                    beginAtZero: true,
                    fontColor: 'rgba(2, 48, 62, .3)',
                    backdropPadding: 10,
                    maxTicksLimit: 5,
                    backdropColor: 'transparent'
                },
                pointLabels: {
                    fontSize: 22,
                    fontColor: 'rgba(2, 48, 62, .5',
                    fontFamily: 'Raleway',
                    fontStyle: 'bold'  
                }
            }
        }
    });
})();
