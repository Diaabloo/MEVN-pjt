<template>

        <section class="services" style="text-align: center;">

            <h1 class="heading-title"> services </h1>

            <div class="box-container">

                <div class="box">
                    <img src="../assets/tp-icon.png" alt="">
                    <h3>TP</h3>
                </div>

                <div class="box">
                    <img src="../assets/book-icon.png" alt="">
                    <h3>Book</h3>
                </div>

                <div class="box">
                    <img src="../assets/exam-icon.png" alt="">
                    <h3>Exams</h3>
                </div>

                <div class="box">
                    <img src="../assets/cour-icon.png" alt="">
                    <h3>Cours</h3>
                </div>

                <div class="box">
                    <img src="../assets/annonce-icon.png" alt="">
                    <h3>Annonce</h3>
                </div>

                <div class="box">
                    <img src="../assets/calan-icon.png" alt="">
                    <h3>Actualite</h3>
                </div>

            </div>

            <h1 class="heading-title" style="margin-top: 50px;"> Pour </h1>

            <div class="box-container">

                <div class="box">
                    <img src="../assets/doctor-icon.png" alt="">
                    <h3>Docteur </h3>
                </div>

                <div class="box">
                    <img src="../assets/inf-icon.png" alt="">
                    <h3>Infermier</h3>
                </div>

                <div class="box">
                    <img src="../assets/pharmacy-icon.png" alt="">
                    <h3>Pharmacie</h3>
                </div>

                <div class="box">
                    <img src="../assets/tech-icon.png" alt="">
                    <h3>Technicien</h3>
                </div>

                <div class="box">
                    <img src="../assets/admin-icon.png" alt="">
                    <h3>Administrateur</h3>
                </div>

                <div class="box">
                    <img src="../assets/ing-icon.png" alt="">
                    <h3>Ingenieur</h3>
                </div>

            </div>

        </section>

</template>

<script>

    export default{
        name : 'Service'
    }

</script>

<style scoped>
.services{
    padding: 5rem 10%;

}

.heading-title{
    margin-bottom: 2rem;
    font-size: 5rem;
    text-transform: uppercase;
    counter-reset: black;
}

.services .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1.5rem;
}

.services .box-container .box {
    padding: 3rem 2rem;
    text-align: center;
    background: white;
    cursor: pointer;
}

.services .box-container .box:hover {
    background: #1C8EF9;
}

.services .box-container .box img {
    height: 5rem;
}

.services .box-container .box h3 {
    color:black;
    font-size: 1.7rem;
    padding-top: 1rem;
}

</style>