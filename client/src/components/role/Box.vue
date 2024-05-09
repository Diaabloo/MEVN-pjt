<template>

    <div class="box-container">
        <div class="box">
            <h3>Cours</h3>
            <button class="btn">Click</button>
        </div>

        <div class="box">
            <h3>Exams</h3>
            <button class="btn">Click</button>
        </div>

        <div class="box">
            <h3>TP</h3>
            <button class="btn">Click</button>
        </div>

        <div class="box">
            <h3>Book</h3>
            <button class="btn">Click</button>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Box'
}

</script>

<style scoped>

.box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 3rem;
    margin: 20px 100px;
}
.box-container .box {
    padding: 3rem 2rem;
    text-align: center;
    background: white;
    cursor: pointer;
}
/* .box-container .box:hover {
    background: gray;
} */
.box-container .box img {
    height: 5rem;
}
.box-container .box h3 {
    color:black;
    font-size: 1.7rem;
    padding-top: 1rem;
}

.btn {
    background-color: #1C8EF9;
    color: white;
    margin: 10px 10px;
}

.btn:hover{
    background-color: black;
}


</style>
