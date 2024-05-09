<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./inf.jpg" alt="">

                </div>

                <div class="content">

                    <p>
                        Les infirmiers hospitaliers jouent un rôle central dans la prestation des soins de santé au sein des établissements hospitaliers. Leur responsabilité principale est d'assurer le suivi et la coordination des soins aux patients, en collaboration étroite avec les médecins et autres membres de l'équipe médicale. Les infirmiers dispensent les traitements prescrits, administrent les médicaments, surveillent les signes vitaux et fournissent un soutien émotionnel et psychologique aux patients et à leurs familles. Ils sont également chargés de l'éducation des patients sur leur état de santé, les traitements recommandés et les mesures d'auto-soins. En outre, les infirmiers hospitaliers jouent un rôle crucial dans la prévention des infections nosocomiales en respectant des protocoles stricts d'hygiène et de contrôle des infections. Leur présence continue et leur vigilance contribuent à garantir des soins de qualité, la sécurité des patients et le bon fonctionnement des services hospitaliers.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'InfirmierDash',
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