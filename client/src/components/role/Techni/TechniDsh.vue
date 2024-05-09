<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./tech.jpg" alt="">

                </div>

                <div class="content">

                    <p>

                        Les techniciens hospitaliers jouent un rôle essentiel dans le bon fonctionnement des établissements de santé en fournissant un soutien technique indispensable aux divers services médicaux. Leur champ d'expertise peut inclure la maintenance et la réparation des équipements médicaux et des appareils spécialisés, tels que les scanners, les appareils de radiographie et les machines d'assistance respiratoire. En outre, les techniciens hospitaliers peuvent être chargés de la stérilisation des instruments chirurgicaux et de laboratoire, contribuant ainsi à prévenir les infections nosocomiales et à assurer des pratiques médicales sûres. Leur travail est également crucial lorsqu'il s'agit de configurer et de surveiller les équipements utilisés lors d'interventions chirurgicales ou de traitements médicaux complexes. Grâce à leur expertise technique et à leur dévouement, les techniciens d'hôpital jouent un rôle fondamental dans le maintien de la qualité des soins de santé et dans la sécurité des patients au sein des établissements hospitaliers.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'Technicien',
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