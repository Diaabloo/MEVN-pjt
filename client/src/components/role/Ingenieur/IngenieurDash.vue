<template>
    <div>

        <section class="home-about">

                <div class="image">

                    <img src="./ing.jpg" alt="">

                </div>

                <div class="content">

                    <p>

                        Les ingénieurs hospitaliers assument un rôle vital dans la gestion et la maintenance des infrastructures technologiques et physiques des établissements de santé. Leur expertise couvre un large éventail de domaines, y compris la gestion des systèmes de chauffage, de ventilation et de climatisation, la maintenance des équipements médicaux sophistiqués, la gestion des installations électriques et de la sécurité des bâtiments, ainsi que la supervision des projets de construction et de rénovation. En collaborant étroitement avec les équipes médicales et administratives, les ingénieurs hospitaliers veillent à ce que les installations et équipements répondent aux normes de sécurité et de qualité les plus élevées, et qu'ils soient opérationnels en tout temps pour garantir la continuité des soins aux patients. Leur contribution est cruciale pour assurer le bon fonctionnement des établissements de santé, la sécurité des patients et du personnel, et l'efficacité des opérations hospitalières.
                    </p>

                </div>

        </section>

        <Box/>
    </div>
</template>

<script>

import Box from '../Box.vue'

export default {
    name : 'IngenieurDash',
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