const btnNode = document.querySelector('.js-btn');
const trafficLight = document.querySelector('.js-traffic-light')

initLight(trafficLight)

btnNode.addEventListener('click', function() {
    switchLight(trafficLight)
})