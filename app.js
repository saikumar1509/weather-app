var input=document.querySelector('#cityname');
var btn=document.querySelector('#add');
var output=document.querySelector('#cityoutput');
var descrip=document.querySelector('#description');
var wind=document.querySelector('#wind');
var temp=document.querySelector('#temp');

function conversion(val){
    return (val-273).toFixed(3)
};
apikey='d6f6d757b89a4823575be8406fc3d13e';

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apikey)
    .then(res=>res.json())
    .then(data=>{
        var nameval=data['name']
        var description=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var windspeed=data['wind']['speed']
        

        output.innerHTML=`weather of <span>${nameval}<span>`;
        descrip.innerHTML=`Sky conditions <span>${description}<span>`
        temp.innerHTML=`Temperature: <span>${conversion(temperature)} C<span>`
        wind.innerHTML=`windspeed: <span>${windspeed} km/hr<span>`

    })
    .catch(err => alert('You entered wrong city name'));


});
