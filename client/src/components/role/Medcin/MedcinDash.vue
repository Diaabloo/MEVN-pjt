<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./doc.jpg" alt="">

                </div>

                <div class="content">

                    <p>

                        Les médecins hospitaliers occupent une position centrale dans la prestation des soins de santé au sein des établissements hospitaliers. Leur rôle est multiple et complexe, allant de la prise en charge directe des patients à la supervision des équipes médicales. Ils diagnostiquent et traitent les affections médicales, prescrivent des médicaments et des traitements, et supervisent les interventions chirurgicales lorsque cela est nécessaire. En outre, les médecins hospitaliers jouent un rôle clé dans la coordination des soins, en collaborant avec d'autres professionnels de la santé tels que les infirmiers, les pharmaciens et les thérapeutes pour élaborer des plans de traitement complets et individualisés pour les patients. Ils sont également responsables de la tenue de dossiers médicaux précis et à jour, ainsi que de la communication avec les patients et leurs familles pour les informer sur leur état de santé et les options de traitement disponibles. Grâce à leur expertise médicale et à leur dévouement, les médecins hospitaliers contribuent de manière significative à la guérison et au bien-être des patients, tout en assurant le bon fonctionnement et la qualité des services de santé dans les hôpitaux.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'MedcinDash',
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