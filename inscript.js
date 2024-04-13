function animateProgressBar(progressBar, duration){
    let progress = 0;
    const increment = (1/duration) *100;

    const interval = setInterval(() => {
        progress += increment;
        progressBar.style.width = `${progress}%`;

        if(progress >= 90){
            clearInterval(interval);
        }

    }, 10);
}
    const progressBar = document.querySelectorAll(".progress");
    progressBar.forEach(bar =>{
        animateProgressBar(bar,300 );
    })
