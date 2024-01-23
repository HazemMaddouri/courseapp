<template>
      <div class="container content">
        <header class="hero is-primary">
            <div class="hero-body">
                <h1 class="title"><img style="height:36px" src="./icons/logo-48-48.png"> Je cours...</h1>
                <p class="settings"><i class="fas fa-cog"></i></p>
            </div>
        </header>
        <section class="main-content container content">
            <div class="objectif"></div>
            <p><button class="button start is-danger">Démarrer</button></p>
            <div class="encours">
                <h2 class="jour title">Jour 1</h2>
                <p class="progress-text">Etape 1 sur ?</p>
                <p class="vitesse">Vitesse : ?km/h</p>
                <p class="action">Trot</p>
                <audio src=""></audio>
                <progress class="progress is-large is-success" max="13" value2="0" value="5"></progress>
                
            </div>
            <div class="legend">
            <h3>Légende</h3>
                <table class="table is-striped">
                    <tr>
                        <td>Echauffement</td>
                        <td>Ensemble de <a href="https://www.youtube.com/watch?v=hijkKi4g_q8&ab_channel=MatthieuVerneret" target="_blank">petits exercices</a> assez doux</td>
                    </tr>
                    <tr>
                        <td>Trot</td>
                        <td>Course normale</td>
                    </tr>
                    <tr>
                        <td>Trot lent</td>
                        <td>Limite marche rapide</td>
                    </tr>
                    <tr>
                        <td>Déboulé</td>
                        <td>Accélération constante sur 100 à 200 m.</td>
                    </tr>
                    <tr>
                        <td>Course</td>
                        <td>Trot à vitesses variables</td>
                    </tr>
                    <tr>
                        <td>Sprint</td>
                        <td>Vitese max</td>
                    </tr>
                    <tr>
                        <td>Etirements</td>
                        <td>Ensemble de <a href="https://www.youtube.com/watch?v=rlDv7M_MxLw&ab_channel=LucileWoodward" target="_blank">petits exercices</a> assez doux</td>
                    </tr>
                </table> 
            </div>
        </section>
        <footer class="footer">
            <button class="button reset is-danger">Reset</button>
            <button class="button reset-day is-danger">Reset day</button>
            <button class="button update is-warning">Update</button>
            <button class="button install is-primary"><i class="fas fa-download"></i></button>
        </footer>
    </div>
</template>

<script setup>
</script>