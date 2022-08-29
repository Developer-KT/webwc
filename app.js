const homeButton = document.querySelector(".home-button")
const servicesButton = document.querySelector(".services-button")
const aboutUsButton = document.querySelector(".about-us-button")
const contactUsButton = document.querySelector(".contact-us-button")

const homePage = document.querySelector(".home-page")
const servicesPage = document.querySelector(".services-page")
const aboutUsPage = document.querySelector(".about-us-page")
const contactUsPage = document.querySelector(".contact-us-page")

const loading1 = document.querySelector(".loading1")
const loading2 = document.querySelector(".loading2")
const loading3 = document.querySelector(".loading3")
const loading4 = document.querySelector(".loading4")

// ---------------------------------------------------------------------- Tabs(buttons)

homeButton.addEventListener('click', () => {

    function initScroll() {
        window.scrollTo(0, 0);
        return
    }
    initScroll()

    homePage.classList.remove("inactive")
    servicesPage.classList.add("inactive")
    aboutUsPage.classList.add("inactive")
    contactUsPage.classList.add("inactive")

    homeButton.classList.add("highlight")
    servicesButton.classList.remove("highlight")
    aboutUsButton.classList.remove("highlight")
    contactUsButton.classList.remove("highlight")

    homePage.classList.add("appear-page")
    servicesPage.classList.remove("appear-page")
    aboutUsPage.classList.remove("appear-page")
    contactUsPage.classList.remove("appear-page")
    loading1.classList.remove("inactive")
    loading2.classList.add("inactive")
    loading3.classList.add("inactive")
    loading4.classList.add("inactive")
    loading5.classList.add("inactive")
    loading6.classList.add("inactive")
})

servicesButton.addEventListener('click', () => {

    function initScroll() {
        window.scrollTo(0, 0);
        return
    }
    initScroll()

    servicesPage.classList.remove("inactive")
    homePage.classList.add("inactive")
    aboutUsPage.classList.add("inactive")
    contactUsPage.classList.add("inactive")

    servicesButton.classList.add("highlight")
    homeButton.classList.remove("highlight")
    aboutUsButton.classList.remove("highlight")
    contactUsButton.classList.remove("highlight")

    servicesPage.classList.add("appear-page")
    homePage.classList.remove("appear-page")
    aboutUsPage.classList.remove("appear-page")
    contactUsPage.classList.remove("appear-page")
    loading2.classList.remove("inactive")
    loading1.classList.add("inactive")
    loading3.classList.add("inactive")
    loading4.classList.add("inactive")
    loading5.classList.add("inactive")
    loading6.classList.add("inactive")
})

aboutUsButton.addEventListener('click', () => {

    function initScroll() {
        window.scrollTo(0, 0);
        return
    }
    initScroll()

    aboutUsPage.classList.remove("inactive")
    homePage.classList.add("inactive")
    servicesPage.classList.add("inactive")
    contactUsPage.classList.add("inactive")

    aboutUsButton.classList.add("highlight")
    homeButton.classList.remove("highlight")
    servicesButton.classList.remove("highlight")
    contactUsButton.classList.remove("highlight")

    aboutUsPage.classList.add("appear-page")
    servicesPage.classList.remove("appear-page")
    homePage.classList.remove("appear-page")
    contactUsPage.classList.remove("appear-page")
    loading3.classList.remove("inactive")
    loading2.classList.add("inactive")
    loading1.classList.add("inactive")
    loading4.classList.add("inactive")
    loading5.classList.add("inactive")
    loading6.classList.add("inactive")
})

contactUsButton.addEventListener('click', () => {

    function initScroll() {
        window.scrollTo(0, 0);
        return
    }
    initScroll()

    contactUsPage.classList.remove("inactive")
    servicesPage.classList.add("inactive")
    aboutUsPage.classList.add("inactive")
    homePage.classList.add("inactive")

    contactUsButton.classList.add("highlight")
    homeButton.classList.remove("highlight")
    servicesButton.classList.remove("highlight")
    aboutUsButton.classList.remove("highlight")

    contactUsPage.classList.add("appear-page")
    servicesPage.classList.remove("appear-page")
    aboutUsPage.classList.remove("appear-page")
    homePage.classList.remove("appear-page")
    loading4.classList.remove("inactive")
    loading2.classList.add("inactive")
    loading3.classList.add("inactive")
    loading1.classList.add("inactive")
    loading5.classList.add("inactive")
    loading6.classList.add("inactive")


    const alertTimeout = setTimeout(function() { alert(`
    Please note:
    We are temporarily unavailable for calls and in-office approaches in 
    South Africa.
    To contact us, please send us an email and we'll get back to you in 
    less than 2 business days. Let's do business!`); }, 5000);
})

//----------------------------------------------------------------------

const seeWork = document.querySelector(".see-work")
const loading5 = document.querySelector(".loading5")

const letsTalk = document.querySelector(".lets-talk")
const loading6 = document.querySelector(".loading6")

seeWork.addEventListener('click', () => {

    function initScroll() {
        window.scrollTo(0, 0);
        return
    }
    initScroll()

    servicesPage.classList.remove("inactive")
    homePage.classList.add("inactive")
    aboutUsPage.classList.add("inactive")
    contactUsPage.classList.add("inactive")

    servicesButton.classList.add("highlight")
    homeButton.classList.remove("highlight")
    aboutUsButton.classList.remove("highlight")
    contactUsButton.classList.remove("highlight")

    servicesPage.classList.add("appear-page")
    homePage.classList.remove("appear-page")
    aboutUsPage.classList.remove("appear-page")
    contactUsPage.classList.remove("appear-page")
    loading5.classList.remove("inactive")
    loading2.classList.add("inactive")
    loading3.classList.add("inactive")
    loading4.classList.add("inactive")
    loading1.classList.add("inactive")
    loading6.classList.add("inactive")
})

letsTalk.addEventListener('click', () => {

    function initScroll() {
        window.scrollTo(0, 0);
        return
    }
    initScroll()

    contactUsPage.classList.remove("inactive")
    homePage.classList.add("inactive")
    aboutUsPage.classList.add("inactive")
    servicesPage.classList.add("inactive")

    contactUsButton.classList.add("highlight")
    homeButton.classList.remove("highlight")
    aboutUsButton.classList.remove("highlight")
    servicesButton.classList.remove("highlight")

    contactUsPage.classList.add("appear-page")
    servicesPage.classList.remove("appear-page")
    aboutUsPage.classList.remove("appear-page")
    homePage.classList.remove("appear-page")
    loading6.classList.remove("inactive")
    loading2.classList.add("inactive")
    loading3.classList.add("inactive")
    loading4.classList.add("inactive")
    loading5.classList.add("inactive")
    loading1.classList.add("inactive")

    const alertTimeout = setTimeout(function() { alert(`
    Please note:
    We are temporarily unavailable for calls and in-office approaches in 
    South Africa.
    To contact us, please send us an email and we'll get back to you in 
    less than 2 business days. Let's do business!`); }, 5000);
})


// ----------------------------------------------------------------------

const letsTalk1 = document.querySelectorAll(".lets-talk1")

letsTalk1.forEach(talk => {

    talk.addEventListener('click', () => {

        function initScroll() {
            window.scrollTo(0, 0);
            return
        }
        initScroll()
    
        contactUsPage.classList.remove("inactive")
        homePage.classList.add("inactive")
        aboutUsPage.classList.add("inactive")
        servicesPage.classList.add("inactive")
    
        contactUsButton.classList.add("highlight")
        homeButton.classList.remove("highlight")
        aboutUsButton.classList.remove("highlight")
        servicesButton.classList.remove("highlight")
    
        contactUsPage.classList.add("appear-page")
        servicesPage.classList.remove("appear-page")
        aboutUsPage.classList.remove("appear-page")
        homePage.classList.remove("appear-page")
        loading6.classList.remove("inactive")
        loading2.classList.add("inactive")
        loading3.classList.add("inactive")
        loading4.classList.add("inactive")
        loading5.classList.add("inactive")
        loading1.classList.add("inactive")
    
        const alertTimeout = setTimeout(function() { alert(`
        Please note:
        We are temporarily unavailable for calls and in-office approaches in 
        South Africa.
        To contact us, please send us an email and we'll get back to you in 
        less than 2 business days. Let's do business!`); }, 5000);
    })
})