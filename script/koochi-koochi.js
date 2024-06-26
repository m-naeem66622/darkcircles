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
            "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>"
    );
    document.querySelector("head").appendChild(favicon);
}

// Handle the login page
if (/https:\/\/lms\.uog\.edu\.pk\/login\/.*/.test(window.location.href)) {
    const welcome = document.querySelector(".welcome");
    if (welcome) {
        document.title = "Welcome back! Login to start learning now!";

        welcome.style.width = "20vw";
        welcome.style.height = "100%";
        welcome.style.backgroundColor = "red !important";
        welcome.style.position = "fixed";
        welcome.style.top = "0";
        welcome.style.left = "0";

        const themBullets = welcome.textContent
            .split("\n")
            .map((line) => line.trim())
            .filter((s) => s);

        let themHTML =
            '<div class="themBulletsContainer"><h2>Instructions</h2><p>Welcome to the thing</p>';
        themBullets.forEach((point, i) => {
            if (i < themBullets.length - 1)
                themHTML += `<div data-number="${i + 1}" class="themBullet">${point.replace("* ", "")}</div>\n`;
        });

        themHTML += "</div>";

        welcome.innerHTML = `
            <div class="themBullets">
                ${themHTML}
            </div>`;

        const loginPanel = document.querySelector("div.logo");
        loginPanel.innerHTML = `<h2 class="loginHeading">Login</h2>`;
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

const koochiKoochi = document.createElement("style");
koochiKoochi.innerHTML = `#page-login-index.moove-login #page-wrapper #page,#page-login-index.moove-login #page-wrapper #page *{background-color:#1a1a1a!important}#page-login-index.moove-login #page-wrapper #page{background-image:none!important}form#login>div{margin-block:1rem!important}form#login input{border:1px solid #444!important;padding:1.5rem 1rem}#page-login-index.moove-login #page-wrapper #page input{background-color:#222!important;border-radius:10px!important}#page-login-index.moove-login #page-wrapper #page .input-group{margin-block:10px!important;align-items:center}#page-login-index.moove-login #page-wrapper #page :is(.themBullets,.themBulletsContainer,.themBullet,.themBulletsContainer h2,.themBulletsContainer p){background-color:inherit!important}#page-login-index.moove-login #page-wrapper #page .themBullets{margin-inline-start:1.5rem;margin-block:4rem;display:grid;gap:.7rem;padding:1rem}#page-login-index.moove-login #page-wrapper #page .themBulletsContainer{display:flex;flex-direction:column;gap:.4rem}#page-login-index.moove-login #page-wrapper #page .themBulletsContainer h2{font-weight:700;font-size:1.4em}#page-login-index.moove-login #page-wrapper #page .themBulletsContainer p{color:#bbb!important;margin-block-end:1.4rem}#page-login-index.moove-login #page-wrapper #page .themBullet{color:#bbb!important;padding-block:0.2rem;padding-inline-start:1.2rem;position:relative}#page-login-index.moove-login #page-wrapper #page .themBullet::before{content:attr(data-number);display:grid;font-size:.8em;place-content:center;position:absolute;top:50%;left:0;translate:-50% -50%;font-family:monospace;width:1.42rem;aspect-ratio:1;border-radius:50%;border:1px solid #aaa}#page-login-index.moove-login #page-wrapper #page .alert-danger,.alert-danger{text-align:center;width:fit-content;margin:0 auto;color:rgb(var(--clr-main))!important;padding:1rem 2rem;border-radius:1rem}#page-login-index.moove-login #page-wrapper #page .loginpanel div.form{min-width:450px!important}#page-login-index.moove-login #page-wrapper #page p.welcome{width:25vw!important;height:100%!important;background-color:#2e2e2e!important;position:fixed!important;top:0!important;left:0!important}#page-login-index.moove-login #page-wrapper #page div[role=main]{position:fixed;top:0;right:0;width:75vw}#page-login-index.moove-login #page-wrapper #page div[role=main]:has(div[role=alertdialog]){width:100vw!important}#page-login-index.moove-login #page-wrapper #page .loginHeading{margin-block-start:2rem;width:100%}form#login{display:grid}.input-group-addon{display:none}.forgetpass p a{color:rgba(var(--clr-main),90%)!important;font-weight:700}fieldset#id_searchbyusername input{width:100%!important;margin:0 auto!important;align-self:center!important}fieldset#id_searchbyusername>div{display:grid!important}#page-login-forgot_password div[role=main]{width:70vw!important;margin:0 auto!important;display:flex!important;align-items:center!important;flex-direction:column!important}#page-login-forgot_password div[role=main]>div{width:50%!important;text-align:center!important}#page-login-forgot_password div[role=main]>form #fitem_id_username{display:grid!important;justify-items:center!important}#page-login-forgot_password div[role=main]>form #fitem_id_username>div{display:block!important;width:672px!important}#page-login-forgot_password div[role=main] label[for=id_username]{display:block!important;width:100%!important;text-align:center}#page-login-forgot_password div[role=main] #fitem_id_submitbuttonusername{display:flex!important;flex-direction:column!important;align-items:center!important;width:100%!important}#page-login-forgot_password div[role=main] #fitem_id_submitbuttonusername>div:first-of-type{width:0!important;flex:0!important}#page-login-forgot_password div[role=main] #fitem_id_submitbuttonusername:nth-child(2){margin:0 auto!important}
.bg-white{background-color:#202020!important}.btn{border-radius:.4rem!important;overflow:hidden!important;text-transform:capitalize!important;transition:background-color 250ms ease!important}.btn-primary,.btn-secondary{padding:10px 20px!important;border-radius:.4rem!important;cursor:pointer!important;font-weight:700!important}#page-login-index.moove-login #page-wrapper #page .btn-primary,.btn-primary{background-color:rgb(var(--clr-main))!important}#page-login-index.moove-login #page-wrapper #page .btn-secondary,.btn-secondary{background-color:rgb(var(--clr-secondary))!important}#page-login-index.moove-login #page-wrapper #page .btn:hover,.btn:hover{background-color:rgba(var(--clr-accent),70%)!important;color:#eee!important}.text-muted{opacity:.75!important}.page-context-header{display:flex;align-items:center}.userpicture{padding:0!important}#region-main .dropdown *,#region-main .dropdown .dropdown-item{background-color:#3e3e3e!important;color:#e3e3e3!important;border-radius:.5rem!important}#region-main .dropdown .dropdown-item:hover,.dropdown-item:hover,.dropdown-item:hover *{background-color:#4e4e4e!important}
.course-summaryitem,.course-summaryitem>div{border-radius:1rem!important}.course-summaryitem{padding:0!important;position:relative!important}.course-summaryitem,.course-summaryitem *,.dashboard-card *{background-color:#2a2a2a!important;cursor:pointer;transition:background-color 250ms ease!important}.dashboard-card{overflow:hidden!important;margin-block:0.5rem!important;border-radius:1rem!important}.dashboard-card .dashboard-card-footer .progress{border:none!important;border-radius:.5rem!important}.dashboard-card .dashboard-card-footer .progress .progress-bar{background-color:#ff4500!important;height:1rem!important}.dashboard-card .dashboard-card-footer .progress .progress-bar[aria-valuenow='100']{background-color:green!important}.course-summaryitem:hover *{background-color:#1a1a1a!important}.course-summaryitem>div{padding:2rem 1rem!important}.course-summaryitem>div,.course-summaryitem>div>div{gap:1rem!important}.course-summaryitem .border{border:none!important;border-radius:10px!important}.progress .progress-bar{position:relative}.progress-circle:before{background-color:#333}.course-summaryitem>div>div>div:last-child *{display:none!important}.course-summaryitem>div>div>div:last-child{--_progress-now:0;--_loader-color:orangered;position:absolute!important;right:10%!important;top:50%!important;translate:-50% -50%!important;width:105px!important;aspect-ratio:1!important;border-radius:50%!important;background-image:conic-gradient(from 0deg,var(--_loader-color) var(--_progress-now),transparent 0)!important;aspect-ratio:1!important}.course-summaryitem>div>div>div:last-child::after{content:attr(data-progress);display:grid!important;place-content:center!important;color:#ddd!important;font-size:1.4em!important;position:absolute!important;right:-45%!important;top:50%!important;translate:-50% -50%!important;width:100px!important;aspect-ratio:1!important;border-radius:50%!important;background-color:#333!important}.course-summaryitem .progress{width:50px!important;aspect-ratio:1!important;background-color:#686868!important}#page-my-index #page-header,#page-my-index #page-header :is(div,a,h1,form){background-color:#2f2f2f!important;z-index:10!important;backdrop-filter:blur(5rem)!important}
:root{--clr-main:59,130,246;--clr-secondary:12,10,9;--clr-accent:41,37,36}body::after{content:'';width:25rem;opacity:.5;aspect-ratio:1;background:#3d2c8d;filter:blur(40rem);pointer-events:none;position:absolute;top:-10%;right:-10%}body#page-login-index::after{left:0!important}body{overflow-x:hidden}*{background-color:#202020!important;color:#e3e3e3!important;border:none!important}table{font-family:system-ui,sans-serif!important;border-radius:1rem!important;overflow:hidden!important;border-collapse:collapse!important}tr:nth-child(odd),tr:nth-child(odd) td{background-color:#333!important}tr,tr *{padding:1rem!important}input{border:1px solid #444!important;border-radius:.5rem!important}
.moodle-dialogue-base .moodle-dialogue *{background-color:#333!important}.moodle-dialogue-base .moodle-dialogue .fp-repo[aria-selected=true] *{background-color:#222!important}.moodle-dialogue-base .moodle-dialogue .btn-primary{background-color:rgb(var(--clr-main))!important}.moodle-dialogue-base .moodle-dialogue .btn-primary:hover{background-color:rgb(var(--clr-secondary))!important}.moodle-dialogue-base .moodle-dialogue .btn-secondary{background-color:rgb(var(--clr-secondary))!important}input[type=file]::file-selector-button{background-color:rgb(var(--clr-main))!important;cursor:pointer;padding:5px 10px;border:none;outline:0;color:#eee!important;transition:background-color .2s}input[type=file]::file-selector-button:hover{background-color:rgb(var(--clr-secondary))!important}
.path-calendar .maincalendar .calendarmonth ul li{border-radius:.2rem!important;background-color:rgba(var(--clr-main),30%)!important;margin:.2rem!important}#page-calendar-view table.minicalendar :is(td.hasevent),#page-calendar-view table.minicalendar :is(td.hasevent) *{background-color:rgba(var(--clr-main),30%)!important}#page-calendar-view table.calendartable *{padding:0!important}#page-calendar-view .maincalendar .calendarmonth ul li *{background-color:transparent!important;padding:.2rem .1rem!important}#page-calendar-view.container-fluid{padding-left:6rem!important}
`;

document.querySelector("head").appendChild(koochiKoochi);
