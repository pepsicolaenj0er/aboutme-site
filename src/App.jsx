import { useEffect } from 'react';
import './App.css';

export default function App() {

  useEffect(() => {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dotsCount = 200;
    const dots = [];

    for (let i = 0; i < dotsCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <canvas id="bgCanvas" style={{position: 'fixed', top: 0, left: 0, zIndex: -1}}></canvas>

      <div className='header'>
        <img src="/zxczxcursed.mp4" alt="roflanebalo" className='lico'/>
        <h1>Maxim Lyan</h1>
        <p>Web Solutions Developer</p>

        <div className="biography"> 
          <h2>ABOUT ME:</h2>
          <p>
            I create modern, reliable, and user-friendly digital products.
            I focus on detail, clarity, 
            and delivering results that are not only functional but also comfortable for users and easy to 
            maintain and scale in the future.
          </p>

          <div className='mail'>
            <a href="mailto:maximka.lyan@bk.ru" className='mail-btn'>My Email</a>
          </div>

          <div className='tgicon'>
            <a href="https://t.me/eternalharvest">
              <img src="telegram.svg" alt="tglogo" width="30" height="30"/>
            </a>
          </div>

          <div className='giticon'>
            <a href="https://github.com/pepsicolaenj0er">
              <img src="github-color.svg" alt="gitlogo" width="30" height="30"/>
            </a>
          </div>

          <div className='Project-Involvement'>
            <h2>HOW I WORK</h2>
            <p>
              I can join a project at any stage — 
              from the initial concept and structure to 
              refinement, optimization, and ongoing support.
            </p>

            <div className='Services'>
              <h3>What I Do:</h3>

              <ul className="Frontend">
                <h4>Frontend</h4>
                <li>Build responsive and interactive user interfaces</li>
                <li>Optimize performance and loading speed</li>
                <li>Implement smooth UX interactions and visual elements</li>
              </ul>

              <ul className='Backend'>
                <h4>Backend</h4>
                <li>Develop server logic and manage databases</li>
                <li>Work with APIs and integrate third-party services</li>
                <li>Ensure security, stability, and data consistency</li>
              </ul>

              <ul className="Technologies">
                <h4>Technologies</h4>
                <li>Use modern development tools and frameworks</li>
                <li>Version control, testing, debugging, and code optimization</li>
                <li>Automate tasks and improve development workflow</li>
              </ul>

              <ul className="Other">
                <h4>Other</h4>
                <li>Conduct code reviews and fix bugs</li>
                <li>Improve architecture and project logic</li>
                <li>Provide guidance and support throughout the project lifecycle</li>
              </ul>

              <div className='Footer'>
                <p>all rights reserved</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
