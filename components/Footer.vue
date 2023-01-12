<template>
    <div id="footer">
        <p class="name"> Made by Samir Sanchez Tejada<i>- Columbia '26</i></p>
        <div class="brace"></div>
    </div>
</template>

<style>
    #footer{
        height: 60px; 
        display:flex;
        flex-direction: column;
        font-family: Roboto;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        /* The rest of the code makes the footer stay at the bottom, feel free to copy it */
        position: fixed;
        bottom: 0;
        width: 100%;
        color: rgb(255, 255, 255);
        background-color: rgb(20, 139, 87);
    }
    .name{
        text-align: center;
        padding-bottom:3px;
        font-size: 40px;
        color: rgb(255, 255, 255);
        font-family: 'Product Sans', sans-serif;
        /*background: radial-gradient(
            rectangle at bottom,
            rgba(0, 128, 172, 1) 0%,
    rgba(0, 128, 172, 1) 0%,
    rgba(0, 128, 172, 0) 0%
        );*/
        
    }
</style>