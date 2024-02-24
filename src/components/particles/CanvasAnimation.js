import React, { useEffect, useRef } from "react";
import $ from "jquery";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  let n = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let requestId;
    let a = false;

    function e(i) {
      return Math.floor(255 * Math.random() + i);
    }

    function h(i, t, o) {
      return a ? "rgba(255, 51, 51, 0.8)" : "rgba(255, 128, 128,0.8)";
    }

    function s(i, t, o, n) {
      return (i * t + o * n) / (t + n);
    }

    function y(i) {
      i = i || 0;
      this.r = e(i);
      this.g = e(i);
      this.b = e(i);
      this.style = h(this.r, this.g, this.b);
    }

    function u() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 2;
      this.color = new y();
    }

    u.prototype = {
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = this.color.style;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
      },
    };

    $("body").on("mousemove", function (i) {
      n.x = i.pageX;
      n.y = i.pageY;
    });

    let d = {
      nb: 350, // Adjust the number of dots
      distance: 80, // Adjust the distance for interaction
      d_radius: 150, // Adjust the radius for interaction
      array: [],
    };

    (function () {
      for (let i = 0; i < d.nb; i++) {
        d.array.push(new u());
      }
    })();

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      distributeDots();
    }

    function distributeDots() {
      for (let i = 0; i < d.nb; i++) {
        const dot = d.array[i];
        dot.x = Math.random() * canvas.width;
        dot.y = Math.random() * canvas.height;
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < d.nb; i++) {
        let o = d.array[i];

        if (o.y < 0 || o.y > canvas.height) {
          o.vx = o.vx;
          o.vy = -o.vy;
        } else if (o.x < 0 || o.x > canvas.width) {
          o.vx = -o.vx;
          o.vy = o.vy;
        }

        o.x += o.vx;
        o.y += o.vy;
      }

      for (let i = 0; i < d.nb; i++) {
        for (let j = 0; j < d.nb; j++) {
          let i_dot = d.array[i];
          let j_dot = d.array[j];

          if (
            i_dot.x - j_dot.x < d.distance &&
            i_dot.y - j_dot.y < d.distance &&
            i_dot.x - j_dot.x > -d.distance &&
            i_dot.y - j_dot.y > -d.distance &&
            i_dot.x - n.x < d.d_radius &&
            i_dot.y - n.y < d.d_radius &&
            i_dot.x - n.x > -d.d_radius &&
            i_dot.y - n.y > -d.d_radius
          ) {
            ctx.beginPath();
            ctx.strokeStyle = (function () {
              let t = i_dot.color;
              let a = j_dot.color;
              let r, e, y, u, c;

              r = t;
              e = a;
              y = s(r?.r, i_dot?.radius, e?.r, j_dot?.radius);
              u = s(r?.g, i_dot?.radius, e?.g, j_dot?.radius);
              c = s(r?.b, i_dot?.radius, e?.b, j_dot?.radius);

              return h(Math.floor(y), Math.floor(u), Math.floor(c));
            })();

            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      for (let i = 0; i < d.nb; i++) {
        d.array[i].draw();
      }

      requestId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CanvasAnimation;
