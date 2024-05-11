const koochiKoochi = document.createElement("style");
koochiKoochi.innerHTML = `
    body::after {
        content: '';
        width: 25rem;
        opacity: 0.5;
        aspect-ratio: 1;
        background: #5421d8;
        filter: blur(40rem);
        pointer-events: none;
        position: absolute;
        top: -10%;
        right: -10%;
    }

    body#page-login-index::after {
        display: none !important;
    }

    body {
        overflow-x: hidden;
    }

    * {
        background-color: #202020 !important;
        color: #e3e3e3 !important;
        border: none !important;
    }

    .bg-white {
        background-color: #202020 !important;
    }
    .course-summaryitem,
    .course-summaryitem > div {
        border-radius: 1rem !important;
    }

    .course-summaryitem {
        padding: 0 !important;
        position: relative !important;
    }
    
    .course-summaryitem,
    .course-summaryitem *,
    .dashboard-card * {
        background-color: #2a2a2a !important;
        cursor: pointer;

        transition: background-color 250ms ease !important;
    }

    .dashboard-card {
        overflow: hidden !important;
        margin-block: 0.5rem !important;
        border-radius: 1rem !important;
    }

    .dashboard-card .dashboard-card-footer .progress {
        border: none !important;
        border-radius: 0.5rem !important;
    }

    .dashboard-card .dashboard-card-footer .progress .progress-bar {
        background-color: orangered !important;
        height: 1rem !important;
    }
    
    .dashboard-card .dashboard-card-footer .progress .progress-bar[aria-valuenow='100'] {
        background-color: green !important;
    }

    .course-summaryitem:hover * {
        background-color: #1a1a1a !important;
    }

    .course-summaryitem > div {
        padding: 2rem 1rem !important;
    }

    .course-summaryitem > div,
    .course-summaryitem > div > div {
        gap: 1rem !important;
    }

    .course-summaryitem .border {
        border: none !important;
        border-radius: 10px !important;
    }

    .progress .progress-bar {
        position: relative;
    }

    .course-summaryitem > div > div > div:last-child * {
        display: none !important;
    }

    .course-summaryitem > div > div > div:last-child {
        --_progress-now: 0;
        --_loader-color: orangered;
        position: absolute !important;
        right: 10% !important;
        top: 50% !important;
        translate: -50% -50% !important;
        width: 105px !important;
        aspect-ratio: 1 !important;
        border-radius: 50% !important;

        background-image: conic-gradient(from 0deg, var(--_loader-color) var(--_progress-now), transparent 0%); !important;
        aspect-ratio: 1 !important;
    }

    .course-summaryitem > div > div > div:last-child::after {
        content: attr(data-progress);
        display: grid !important;
        place-content: center !important;
        color: #ddd !important;
        font-size: 1.4em !important;
        position: absolute !important;
        right: -45% !important;
        top: 50% !important;
        translate: -50% -50% !important;
        width: 100px !important;
        aspect-ratio: 1 !important;
        border-radius: 50% !important;

        background-color: #333 !important;
    }

    .course-summaryitem .progress {
        width: 50px !important;
        aspect-ratio: 1 !important;
        background-color: #686868 !important;
    }

    #page-login-index.moove-login #page-wrapper #page,
    #page-login-index.moove-login #page-wrapper #page * {
        background-color: transparent !important;
        z-index: 5;
    }

    #page-login-index.moove-login #page-wrapper #page {
        background-image: url(https://i.imgur.com/j9t9Muy.jpeg) !important;
        background-position: center !important;
        background-size: cover;
        background-repeat: no-repeat;
    }

    #page-login-index.moove-login #page-wrapper #page::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black !important;
        opacity: 0.7;
        z-index: 1;
    }

    .btn-secondary,
    .btn-primary {
        padding: 10px 20px !important;
        border-radius: 10px !important;
        cursor: pointer !important;
        text-transform: uppercase !important;
        font-weight: bold !important;
        transition: background-color 250ms ease !important;
    }
    
    .btn-primary,
    #page-login-index.moove-login #page-wrapper #page .btn-primary {
        background-color: #d47b05 !important;
        color: #222 !important;
    }

    form#login > div {
        margin-block: 1rem !important;
    }
    
    .btn-secondary,
    #page-login-index.moove-login #page-wrapper #page .btn-secondary {
        background-color: #0058ad !important;
    }
    
    .btn-primary:hover,
    #page-login-index.moove-login #page-wrapper #page .btn-primary:hover {
        background-color: #ad6200 !important;
    }
    
    .btn-secondary:hover,
    #page-login-index.moove-login #page-wrapper #page .btn-secondary:hover {
        background-color: #00478c !important;
    }

    .text-muted {
        opacity: 0.75 !important;
    }

    #page-login-index.moove-login #page-wrapper #page input {
        background-color: #222 !important;
        border-radius: 10px !important;
    }
    
    #page-login-index.moove-login #page-wrapper #page .input-group {
        margin-block: 10px !important;
        align-items: center;
    }

    #page-my-index #page-header,
    #page-my-index #page-header :is(div, a, h1, form) {
        background-color: #2f2f2f !important;
        z-index: 10 !important;
        backdrop-filter: blur(5rem) !important;
    }

    .page-context-header {
        display: flex;
        align-items: center;
    }

    table {
        font-family: system-ui, sans-serif !important;
        border-radius: 1rem !important;
        overflow: hidden !important;
        border-collapse: collapse !important;
    }

    tr:nth-child(2n+1),
    tr:nth-child(2n+1) td {
        background-color: #333 !important;
    }
    
    table,
    table * {
        padding: 1rem !important;
    }

    .btn {
        border-radius: 10px !important;
        overflow: hidden !important;
    }

    .themBullets {
        display: grid;
        gap: 0.5rem;
        padding: 1rem;
    }
    
    #page-login-index.moove-login #page-wrapper #page .themBullet {
        background-color: #83264542 !important;
        backdrop-filter: blur(3px);
        color: #aaa !important;
        list-style: none;
        border-radius: 1rem;
        padding-block: 1rem;
        padding-inline: 2rem;
    }

    .userpicture {
        padding: 0 !important
    }

    #region-main .dropdown *,
    #region-main .dropdown .dropdown-item {
        background-color: #3e3e3e !important;
        color: #e3e3e3 !important;
        border-radius: 0.5rem !important;
    }

    #region-main .dropdown .dropdown-item:hover,
    .dropdown-item:hover,
    .dropdown-item:hover * {
        background-color: #4e4e4e !important;
    }
`.replaceAll(/[\t|\n]/g, ""); // gonna have to find a better way to minify this thing

async function do_da_course_clickable_thing_and_add_progress_for_summary_view() {
    let haventGotProgress = true;

    while (haventGotProgress) {
        Array.from(
            document.getElementsByClassName("course-summaryitem")
        )?.forEach((element, i) => {
            element.addEventListener("click", (e) =>
                e.target.querySelector("a")?.click()
            );

            const progress = document
                .querySelectorAll(".course-summaryitem")
                [i]?.querySelectorAll("div")[14];

            const actualProgress = progress
                ?.querySelector(".progress")
                .querySelector("div")
                .getAttribute("aria-valuenow");

            progress?.style.setProperty(
                "--_progress-now",
                `${actualProgress}%`
            );

            progress?.setAttribute("data-progress", `${actualProgress}%`);

            progress?.style.setProperty(
                "--_loader-color",
                `${actualProgress == 100 ? "green" : "orangered"}`
            );

            haventGotProgress = !Boolean(actualProgress);
        });
        await new Promise((dontmatter) => setTimeout(dontmatter, 1 * 1000));
    }
}

function do_da_favicon_and_the_title_thing() {
    if (document.querySelector(".page-header-headings h1"))
        document.title = `${document.querySelector(".page-header-headings h1").textContent}`;

    const favicon = document.createElement("link");
    favicon.setAttribute("rel", "shortcut icon");
    favicon.setAttribute("type", "image/x-icon");
    favicon.setAttribute(
        "href",
        document.querySelector(".avatars img")?.src ??
            "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>♥️</text></svg>"
    );
    document.querySelector("head").appendChild(favicon);
}

// Handle the login page
if (/https:\/\/lms\.uog\.edu\.pk\/login\/.*/.test(window.location.href)) {
    const welcome = document.querySelector(".welcome");
    if (welcome) {
        welcome.style.position = "fixed";
        welcome.style.top = "5%";
        welcome.style.left = "5%";

        const themBullets = welcome.textContent
            .split("\n")
            .map((line) => line.trim())
            .filter((s) => s);

        let themHTML = "";
        themBullets.forEach((point, i) => {
            if (i < 3)
                themHTML += `<li class="themBullet">${point.replace("* ", "")}</li>\n`;
        });

        welcome.innerHTML = `
            <div class="themBullets">
                ${themHTML}
            </div>`;
    }
}

// Handle the home page
if (/^https:\/\/lms\.uog\.edu\.pk\/my\/.*/.test(window.location.href)) {
    if (document.querySelector(".page-header-headings h1"))
        document.title = `${document.querySelector(".page-header-headings h1").textContent.split(" ")[0]}'s Dashboard`;

    // TODO: make it work without being this weird
    // For when switching between other views
    // we still wanna render the progress
    // and do the rest of the things
    document
        .querySelectorAll('div[data-region="filter"] a.dropdown-item')
        .forEach((filter) => {
            filter.addEventListener("click", (e) => {
                if (
                    e.target.dataset.value === "summary" ||
                    document.querySelector("a.active[data-value='summary']")
                ) {
                    do_da_course_clickable_thing_and_add_progress_for_summary_view();
                }
            });
        });

    do_da_course_clickable_thing_and_add_progress_for_summary_view();
}

do_da_favicon_and_the_title_thing();
document.querySelector("head").appendChild(koochiKoochi);
