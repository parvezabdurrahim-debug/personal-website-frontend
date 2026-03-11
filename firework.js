const canvas = document.getElementById('fireworkCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min,max){ return Math.random()*(max-min)+min; }

class Firework{
    constructor(x,y){
        this.x = x; this.y = y;
        this.particles = [];
        for(let i=0;i<50;i++){
            this.particles.push({
                x:this.x,
                y:this.y,
                dx:random(-3,3),
                dy:random(-5,-1),
                alpha:1
            });
        }
    }
    draw(){
        this.particles.forEach(p=>{
            ctx.fillStyle = `rgba(255,${Math.floor(random(128,255))},0,${p.alpha})`;
            ctx.fillRect(p.x,p.y,2,2);
            p.x+=p.dx; p.y+=p.dy; p.alpha-=0.02;
        });
    }
}

const fireworks = [];
for(let i=0;i<5;i++){
    fireworks.push(new Firework(random(100,canvas.width-100),random(100,canvas.height-200)));
}

function animate(){
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    fireworks.forEach(f=>f.draw());
    requestAnimationFrame(animate);
}
animate();
