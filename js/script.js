const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


const serviceSteps =
    document.querySelectorAll(".service-step");

const stageVisuals =
    document.querySelectorAll(".stage-visual");


function activateService(index) {

    serviceSteps.forEach((step) => {
        step.classList.remove("active");
    });

    stageVisuals.forEach((visual) => {
        visual.classList.remove("active");
    });


    const progressDots =
        document.querySelectorAll(".progress-dot");

    progressDots.forEach((dot) => {
        dot.classList.remove("active");
    });


    serviceSteps[index]
        .classList.add("active");

    stageVisuals[index]
        .classList.add("active");


    if (progressDots[index]) {
        progressDots[index]
            .classList.add("active");
    }

}


const serviceObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const index =
                        Number(
                            entry.target.dataset.step
                        );

                    activateService(index);

                }

            });

        },

        {
            threshold: 0.55
        }

    );


serviceSteps.forEach((step) => {
    serviceObserver.observe(step);
});
const supportForm =
    document.querySelector("#supportForm");

const formStatus =
    document.querySelector("#formStatus");


if (supportForm) {

    supportForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            formStatus.textContent =
                "Form submission will be enabled when Dymonnd IT goes live.";

        }
    );

}
const menuToggle =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");


if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("open");


        menuToggle.classList.toggle(
            "active",
            isOpen
        );


        document.body.classList.toggle(
            "menu-open",
            isOpen
        );


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            menuToggle.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}