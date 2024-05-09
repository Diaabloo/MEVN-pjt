<template>

        <section class="home-about">

        <div class="image">

            <img src="../assets/about-img.jpg" alt="">

        </div>

        <div class="content">

            <h3>about </h3>
            <p>
                SANTE est une plateforme communautaire dédiée aux étudiants passionnés par le domaine de la santé.
                Notre objectif est de créer un environnement dynamique où les futurs professionnels de la santé
                peuvent se connecter, échanger des idées, partager des ressources et s'inspirer mutuellement
                dans leur parcours académique et professionnel.
            </p>

            <div class="div-btn">
            <router-link to="/login" class="btn">Login</router-link>
            <router-link to="/register" class="btn">Sign up</router-link>
            </div>


        </div>

        </section>

</template>

<script>

    export default{
        name : 'About'
    }

</script>

<style scoped>
section {
    padding: 5rem 10%;
}

.div-btn{
    display: flex;
    justify-content: end;
}

.home-about {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.home-about .image {
    flex: 1 1 41rem;
}

.home-about .image img {
    width: 100%;
}

.home-about .content {
    flex: 1 1 41rem;
    padding: 1.5rem;
    background: lightgray;
}

.home-about .content h3 {
    font-size: 3rem;
    color: black;
}

.home-packages {
    background: lightgray;
}

.home-about .content p {
    font-size: 1rem;
    padding: 1rem 0;
    line-height: 2;
    color: black;
}
.btn{
    display: inline-block;
    background: black;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;

}
.btn:hover {
    background: #1C8EF9;
}

</style>