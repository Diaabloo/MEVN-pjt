<template>

    <footer class="footer">

            <div class="box-container">

                <div class="box">
                    <h4 class="foot">quick links</h4>
                    <router-link to="/"> <i class="fas fa-angle-right"></i> HOME</router-link>
                    <router-link to="/"> <i class="fas fa-angle-right"></i> ABOUT</router-link>
                    <router-link to="/login"> <i class="fas fa-angle-right"></i> Login</router-link>
                    <router-link to="/register"> <i class="fas fa-angle-right"></i> Signup</router-link>
                </div>

                <div class="box">
                    <h4 class="foot">contact info</h4>
                    <a href="#"> <i class="fas fa-phone"></i> +212 000-00000 </a>
                    <a href="#"> <i class="fas fa-envelope"></i> sante@gmail.com </a>
                    <a href="#"> <i class="fa-solid fa-map-location-dot"></i> souissi -Rabat Maroc  </a>
                </div>

                <div class="box">
                    <h4 class="foot">follow us</h4>
                    <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                    <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
                    <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
                </div>

            </div>

            <div class="credit"> created by <span>AMINE EL ALAMI</span> |<i class="fa-solid fa-copyright"></i> </div>

    </footer>

</template>

<script>

    export default{
        name : 'Footer'
    }

</script>



<style scoped>

.footer {
    background: url(../assets/footer-bg.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    padding: 2rem 8%;
    color: lightgray;
}

.footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1.5rem;
    margin-right: 250px;
}

.foot {
    color: white;
    font-size: 2.5rem;
    padding-bottom: 2rem;
}

.footer .box-container .box a {
    color: white;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    display: block;
}

.footer .box-container .box a i {
    color: #1C8EF9;
    padding-right: .5rem;
    transition: .2s linear;
}

.footer .box-container .box a:hover i {
    padding-right: 2rem;
}

.footer .credit {
    text-align: center;
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: .1rem solid white;
    font-size: 2rem;
    color: white;
}

.footer .credit span {
    color: #1C8EF9;
}

.footer .fa-copyright {
    color: black;
    font-size: 15px;
    margin-left: 3px;
}

</style>