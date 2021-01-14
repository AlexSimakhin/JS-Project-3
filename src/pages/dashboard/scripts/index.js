import '../../../css/style.scss';

import * as request from '../../cards/scripts/request';
import { getProfileReq } from '../../cards/scripts/request/getProfileReq';
import * as components from './components';
import Chart from 'chart.js';
import { socketIo } from '../../cards/scripts/socket';
import { onclickBtnSignOut } from '../../cards/scripts/events/onclickBtnSignOut';

const mainInfoSectionWrapp = document.querySelectorAll('.main__info__section__wrapp.chart__section');
// let cardNumbers = [];

request.getCardsReq().then(cb => {
  const { status, data } = cb;

  if (status === 200) {
    components.addUserCards(data);

    // cardNumbers = data.map(item => item.card);

    let newDB = request.getCardNumberReq(data[0].card).then(cb => {
      const { status, data } = cb;

      if (status === 200) {
        return data;
      }
    });

    return newDB;
  }
}).then(item => {
  mainInfoSectionWrapp.forEach(item => {
    if (item.dataset.status === 'download') {
      item.style.display = 'none';
    } else if (item.dataset.status === 'all') {
      item.style.display = 'block';
    }
  });
});

socketIo();
getProfileReq();
onclickBtnSignOut();

const tabsButtons = [
  {
    id: 0,
    name: 'Обзор',
    status: 'all',
  },
  {
    id: 1,
    name: 'По картам',
    status: 'card-balance',
  },
  {
    id: 2,
    name: 'Копилки',
    status: 'pig-balance',
  },
];

mainInfoSectionWrapp.forEach(item => {
  item.onclick = (e) => {
    let target = e.target.closest('.tab');
    if (!target) return;
    if (target.classList.contains('active')) return;
    
    tabsButtons.forEach(item => {
      let currentTabButton = item;

      if (target.innerHTML === currentTabButton.name) {
        mainInfoSectionWrapp.forEach(item => {
          if (item.dataset.status === currentTabButton.status) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }
    });
  };
});

const ctx = document.getElementById('all-chart').getContext('2d');

var gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, 'rgba(109, 210, 48, 0.5)');   
gradient1.addColorStop(1, 'rgba(255,255,255,0)');

var gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
gradient2.addColorStop(0, 'rgba(254, 94, 161, 0.5)');   
gradient2.addColorStop(1, 'rgba(255,255,255,0)');


const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [{
      label: '1 карта',
      backgroundColor: gradient1,
      borderColor: 'rgba(109, 210, 48, 0.75)',
      pointBorderColor: 'rgb(109, 210, 48)',
      pointBackgroundColor: 'rgba(109, 210, 48, 0.75)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointBorderWidth: 1,
      data: [1, 2, 3, 4, 5, 6, 10000],
    }, {
      label: '2 карта',
      backgroundColor: gradient2,
      borderColor: 'rgba(254, 94, 161, 0.70)',
      pointBorderColor: 'rgba(254, 94, 161, 0.70)',
      pointBackgroundColor: 'rgba(254, 94, 161, 0.70)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)',
      pointBorderWidth: 1,
      data: [222, 333, 444, 555, 11111, 55, 4466],
    }],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true,
          },
        },
      ],
      yAxes: [
        {
          ticks:
          {
            beginAtZero: true,
          },
          gridLines:
          {
            display: false,
            drawBorder: true,
          },
        },
      ],
    },
  },
});