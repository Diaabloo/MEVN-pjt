<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./admin.jpg" alt="">

                </div>

                <div class="content">

                    <p>
                        Les administrations hospitalières jouent un rôle crucial dans la gestion efficace et efficiente des établissements de santé. Leur responsabilité principale est de superviser tous les aspects non cliniques de l'hôpital, y compris la gestion financière, les ressources humaines, l'approvisionnement en équipements médicaux et la planification stratégique. Les administrateurs d'hôpitaux collaborent avec les médecins, les infirmières et d'autres professionnels de la santé pour s'assurer que les services fournis répondent aux normes de qualité et de sécurité les plus élevées. Ils doivent également veiller à ce que l'hôpital reste conforme aux réglementations gouvernementales et aux exigences en matière de soins de santé. En outre, les administrateurs d'hôpitaux sont souvent chargés de développer des politiques et des protocoles pour améliorer l'efficacité opérationnelle et garantir une utilisation judicieuse des ressources. Leur rôle est donc essentiel pour assurer le bon fonctionnement de l'établissement, la satisfaction des patients et la prestation de soins de qualité.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'AdminDash',
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