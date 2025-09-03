const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
    // maskSize: isMobile ? "50vw" : "0vw", // 50vw se for mobile, 20vw se for desktop
gsap.to(".hero", {
  height: "50vh",
  
  scrollTrigger: {
    scrub: 1,
    trigger: "h1",
    start: "top 35%",
    end: "top -20%",
    markers: false,
  },
});