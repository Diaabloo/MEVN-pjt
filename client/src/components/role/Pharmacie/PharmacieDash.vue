<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./phar.jpg" alt="">

                </div>

                <div class="content">

                    <p>

                        Les pharmaciens hospitaliers occupent une place cruciale dans la prestation des soins de santé au sein des établissements hospitaliers. Leur rôle s'étend bien au-delà de la simple dispensation de médicaments. En effet, ils sont responsables de la gestion des médicaments dans l'hôpital, ce qui implique la vérification des ordonnances médicales, la préparation des doses appropriées et la fourniture d'informations sur l'utilisation et les effets secondaires des médicaments aux patients et au personnel médical. Les pharmaciens d'hôpital jouent également un rôle essentiel dans l'évaluation des interactions médicamenteuses potentielles et dans la gestion des médicaments en stock pour garantir leur disponibilité constante. De plus, ils travaillent en étroite collaboration avec les médecins et les infirmiers pour élaborer des plans de traitement individualisés et optimiser l'efficacité thérapeutique tout en minimisant les risques pour les patients. Grâce à leur expertise en pharmacothérapie et à leur engagement envers la sécurité des patients, les pharmaciens d'hôpital contribuent de manière significative à la qualité des soins et à la santé globale des patients dans les établissements de santé.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'PharmacieDash',
    components : {
        Box,
    }
}
</script>

<style scoped>

.adj{
    margin-bottom: 200px ;
}
.title {
    font-size: 30px;
    background-color: white;
    border-radius: 50px;
    padding: 50px 50px;
    margin: 50px 200px;
}
section {
    padding: 10px 100px;
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
    text-align: justify;
}
</style>