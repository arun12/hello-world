//Plot band on x axis (can also use Plot lines)
Highcharts.chart('container', {
    xAxis: {
        plotBands: [{ // mark the weekend
            color: '#fff',
            from: Date.UTC(2010, 0, 1),
            to: Date.UTC(2010, 0, 6,23,59,59)
        },{ // mark the weekend
            color: '#000',
            from: Date.UTC(2010, 0, 6,23,59,59),
            to: Date.UTC(2010, 0, 13)
        },{ // mark the weekend
            color: '#fff',
            from: Date.UTC(2010, 0, 7),
            to: Date.UTC(2010, 0, 12,23,59,59)
        }],
        tickInterval: 24 * 3600 * 1000, // one day
        type: 'datetime'
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 24 * 3600 * 1000
    }]
});


//________________________________________________________________________________
//https://jsfiddle.net/yowL86h9/1/  (polygon on specific area)

Highcharts.chart('container', {
    series: [{
        name: 'Polygons',
        type: 'polygon',
        data: [
            [0, 200],
            [2.5, 200],
            [2.5, 250],
            [0, 250],
            null, // allows multiple polygons         
            [6, 100],
            [8, 100],
            [8, 200],
            [6, 200]
        ]
    }, {
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]


});

//__________________________________________________________
//Plot line on x axis
Highcharts.chart('container', {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //jan -> 0, Feb ->1, .........Dec->11  use for value
        plotLines: [{
            color: '#FF0000',
            width: 2,
            value: 0
        },
        {
            color: 'green',
            width: 2,
            value: 4
        },
        {
            color: '#000',
            width: 2,
            value: 8
        },
        {
            color: 'blue',
            width: 2,
            value: 11
        }]
    },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});

_______________________________________________________________________________________
