gsap.from(".hero h1",{
duration:1.5,
y:100,
opacity:0
});

gsap.from(".hero p",{
duration:2,
opacity:0
});

let water=0;
let energy=0;
let co2=0;

setInterval(()=>{

if(water<10000) water+=25;
if(energy<5000) energy+=12;
if(co2<3000) co2+=8;

document.getElementById("water").innerText=water;
document.getElementById("energy").innerText=energy;
document.getElementById("co2").innerText=co2;

},20);

new Chart(
document.getElementById("chart"),
{
type:"line",
data:{
labels:[
"Jan","Fev","Mar",
"Abr","Mai","Jun"
],
datasets:[{
label:"Economia de Água",
data:[
200,
500,
900,
1500,
2500,
4000
],
borderColor:"#52b788",
backgroundColor:
"rgba(82,183,136,.3)",
fill:true
}]
}
});