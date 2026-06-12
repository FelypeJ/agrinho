gsap.from(".hero h1",{
y:100,
opacity:0,
duration:1.5
});

gsap.from(".hero p",{
delay:.5,
opacity:0,
duration:1.5
});

let water=0;
let energy=0;
let trees=0;

setInterval(()=>{

if(water<5000) water+=15;
if(energy<3000) energy+=10;
if(trees<1500) trees+=5;

document.getElementById("water").innerHTML=water;
document.getElementById("energy").innerHTML=energy;
document.getElementById("trees").innerHTML=trees;

},20);

new Chart(document.getElementById('impactChart'),{

type:'line',

data:{
labels:['Jan','Fev','Mar','Abr','Mai','Jun'],
datasets:[{
label:'Economia de Água',
data:[100,300,500,800,1200,1600],
borderColor:'#52b788',
fill:true
}]
},

options:{
responsive:true
}

});
