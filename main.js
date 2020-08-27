function main() {
    var app = new Vue({
        el: '#app',
        data: {
            name: 'Xuanqi (Kiki) Dai',
            title: "DIGITAL MEDIA & INFO STUDIES",
            social: [
                {
                    icon: "fab fa-linkedin-in",
                    link: "https://www.linkedin.com/in/xuanqi-d-16b8b4174/"
                },
                {
                    icon: "far fa-envelope",
                    link: "mailto:xuanqidai@gmail.com"
                },
                {
                    icon: "far fa-file-alt",
                    link: "https://drive.google.com/file/d/14lMoNNlbOEqxAKVFASvt01xPm6ls8R09/view?usp=sharing"
                }
            ],
            projects: [
                {
                    title: "Song Data",
                    img_path: "img/words.png",
                    description: "Data for a few hundred popular songs from 2012 - 2019 was collected and analysed in order to determine if any interesting correlations could be found. The analysis also demonstrates the effectiveness of Python, APIs, and web scraping when collecting data for research questions.",
                    circle: true,
                    link: "https://kikidai.wordpress.com/2019/11/24/fun-facts-about-data-analysis-project/"
                },
                {
                    title: "ACA Time Map",
                    img_path: "img/timemap.png",
                    description: "Digital mediums are becoming more and more popular and utilized in society, and as an organization with members across the country. Create and modify timelines with TimeMapper to show the history of the ACA.",
                    circle: false,
                    link: "http://timemapper.okfnlabs.org/anon/zdj1jm-timemapper#20"
                },
                {
                    title: "Advertising",
                    img_path: "img/ad.jpg",
                    description: "Advertising project for MoleSkin and Le Petite Prince",
                    circle: false,
                    link: "#"
                },
                {
                    title: "Advertising",
                    img_path: "img/ad1.jpg",
                    description: "Advertising project for MoleSkin and Lego",
                    circle: false,
                    link: "#"
                },
                {
                    title: "Capstone Project 2020",
                    img_path: "img/capstone.png",
                    description: "Created and launched by the 2019-2020 Digital Humanities Capstone class at the University of Ottawa. Seven students combined their diverse educational backgrounds and skills with the help of Professor Jada Watson to develop this storymap on immigration in Ottawa from 2006 to 2016.",
                    circle: false,
                    link: "https://biblio.uottawa.ca/omeka2/arts-digital-humanities/exhibits/show/capstone-2020"
                },
            ],
            video_url: "https://www.youtube.com/embed/jn50JSlmLlU",
            chat: [
                "Can you introduce yourself?",
                "Yes, this is Xuanqi, and you are welcome to call me Kiki.  I am studying Digital Humanities at University of Ottawa. I realized my personal interest in digital humanities after my DH 1000 class, then I added the minor, taken many classes and did some projects in this subject.",

                "What project are you doing now? ",
                "I have just finished my capstone project. In past two semesters, my colleagues and I worked really hard on it. It is a research project related to immigrate to Ottawa. As a data member, I did data analysis and data visualization for language data, places of birth data, and restaurants data to mapping immigration to Ottawa and explore how it has shaped, influenced Ottawa through the development of restaurants, language, places of birth between 1996 and 2016 by using census data.",

                "Do you have any other projects?",
                "Yeah, I have done many projects during my DH studies with different tech tools. I will show you my ACA competition project, which we got second award from uOttawa Venture initiative showcase competition. It is about how to outreach ACA and I made a time mapper for ACA conference. What’s more, after this competition, I learnt SQL database by myself, and here is a demo to show how to use SQL to update contents for my ACA Timemapper. I also want to introduce my song data project for you. It is about using python to demonstrate Spotify popular songs’ features. Please check my projects’ details above.",

                "Do you have any other experience?",
                " I understand DH is an Interdisciplinary subject. I am not only doing some projects in this field, but also try to use my DH knowledge to make more opportunities. For example, I worked as a new media operator for my internship. Besides content writing, translation and video-editing, I also used data analysis skills from DH to calculate active users’ ratio and KPI for data management platform. I am not a nerd on research works, I always wish to do more to fulfill my experience. DH is such a subject which combine tech skills and humanities knowledge, and this really attracts me.",

                "Besides those, what will you do during you are time off?",
                "Besides tech skills, I am a big fan of reading, listening to music and visiting museums. When I am free, I learnt French by some online classes; I went to NAC to enjoy concerts and musicals, such as Rent and Brahms; I went to the Canadian history museum to visit the history wall and stamp collection; I also read different kinds of books in my apartment. From my perspectives, those experience can help me to understand humanities parts better. I also attended lots of DH conferences and workshops, which inspired a lot. Speaking of this, since I am a big fan of Lego, once I went to a Toolbox workshop by Professor Haustein, she works on specific software with Lego to do data visualizations in DH. This is really interesting and gives me new ideas about my further researches.",

                "Anything else you want to share to us?",
                "For my future studies, I always try to build my life. I tried many different programs and finally found DH. I still believe life is not about finding yourself, but also about creating yourself. As an international female student, I extremely hoped that I can inspire more students like me to come to this field and create more specific works with information technology in this brand-new subject."
            ]
        }
    });
}
window.onload = main;
