const mainSection = document.getElementById("main-section")
const homeBtn = document.getElementById("home-btn")

document.addEventListener('click', function(e) {
    console.log(e.target.data)
})
mainSection.innerHTML = getIndexHtml()

function getIndexHtml() {
    return `
    <section class="hero">
                    <p class="date">july 23, 2022</p>
                    <h1>My new journey as a bootcamp student.</h1>
                    <p class="hero-desc">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                </section>
                <div class="blogs-container">
                    <section class="blog">
                        <img src="/images/article-image-01.png">
                        <p class="blog-date">JULY 23, 2022</p>
                        <h1>Blog One</h1>
                        <p class="blog-desc">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                    </section>
                    <section class="blog">
                        <img src="/images/article-image-02.png">
                        <p class="blog-date">JULY 23, 2022</p>
                        <h1>Blog Two</h1>
                        <p class="blog-desc">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                    </section>
                    <section class="blog">
                        <img src="/images/article-image-03.png">
                        <p class="blog-date">JULY 23, 2022</p>
                        <h1>Blog Three</h1>
                        <p class="blog-desc">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                    </section>
                    <button class="btn-main"><a href="#">View More</a></button>
                </div>`
}