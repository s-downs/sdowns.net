window.onresize = resizeProjects;

function resizeProjects () {
    document.querySelectorAll( 'div.project' ).forEach((project) => {
        project.style.height = project.offsetWidth * 0.75 + "px"
    });
};
resizeProjects();