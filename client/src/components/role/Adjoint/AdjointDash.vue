<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./adj.jpg" alt="">

                </div>

                <div class="content">

                    <p>
                        Les adjoints de sante jouent un rôle essentiel dans le systeme de sante en fournissant un soutien précieux aux professionnels de la sante.
                        Leur domaine d'intervention peut varier en fonction du contexte et de la spécialité, mais généralement, ils assistent les médecins, les infirmières et d'autres membres du personnel médical dans les tâches quotidiennes.
                        Leur travail peut inclure la prise de signes vitaux, la préparation des patients pour les examens médicaux, la gestion des dossiers médicaux, et la fourniture de soins de base tels que l'administration de médicaments ou la réalisation de pansements.
                        En plus de leurs compétences techniques, les adjoints de santé sont souvent formés pour offrir un soutien émotionnel aux patients, les rassurer et répondre à leurs questions.
                        Leur présence contribue à assurer le bon fonctionnement des établissements de santé et à garantir des soins efficaces et attentionnés pour les patients.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'AdjointDash',
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