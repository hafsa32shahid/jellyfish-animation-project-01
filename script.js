      // script for jellyfish
      gsap.registerPlugin(ScrollTrigger);

      let animation = gsap.timeline({
        scrollTrigger: {
          trigger: ".video-overlay",
          scroller: "body", // Fixed typo here
          markers: true,
          start: "top 25%",
          end: "+=2300", // Adjust this value based on your needs
          scrub: true, // Optional: enables smooth scrubbing
        },
      });

      animation
        .to(".video-overlay img", {
          duration: 4,
          scale: 1.5,
          x: 400,
          y: 1050,
        })
        .to(".video-overlay img", {
          duration: 3,
          scale: 1.2,
          x: -400,
          y: 2050,
          stagger: 0.2,
        });
    //    script for line strich
      const initial_path = "M 10 100 Q 600 100 1000 100";
      const final_path = "M 10 100 Q 600 100 1000 100";

      const svg_anim = document.querySelector(".svg-curve-anim");
      svg_anim.addEventListener("mousemove", (dets) => {
        const path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 1000 100`;

        gsap.to(".svg-curve-anim svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "bounce.out",
        });
      });
      svg_anim.addEventListener("mouseleave", () => {
        gsap.to(".svg-curve-anim svg path", {
          attr: { d: initial_path },
        });
      });