<template>
    <div>
        <h1 class="title" ,style="text-align:center">Samir Sanchez Tejada</h1>
            <p><img src="IMG_2977.jpg" alt="Samir" style="float:left;width:350px;height:350px; padding-left:150px"></p>
            <p class="aboutme"> 
                ABOUT ME 
               <br>
                  👋 Hi, I’m @Samir0051
               <br>
                👀 I’m interested in exploring computer science and its many facets
                <br>
                🌱 I’m currently learning data structures and algorithms
                <br>
                📫 How to reach me: ses2313@columbia.edu
            </p>
            <div class="element">
                <div class="preview">
                    <div class="description">
                        <h4>Resume</h4>
                        <p>This is about Samir!</p>
                    </div>
                    <div id="contentframe" style="position:relative; top: 250px; left: 50px;"></div>
                    <div class="wrapper">
                    <iframe src="Resume_Samir_SanchezTejada.pdf" width="500px" height="500px"></iframe>
                    </div>
            </div>
            <h2 class="title2" ,style="text-align:center">Projects</h2>
            <div class="row">
                <div class="item-1 col">
                    <a href='https://github.com/Samir0051/SingleCellSegmentation'><img class="alignnone size-full wp-image-342" src="projects.png" alt="" width="150" height="150"/></a>
                    Single Cell Segmentation
                </div>
                <div class="item-2 col">
                    <a href='https://github.com/Samir0051/LuckyBird'><img class="alignnone size-full wp-image-342" src="projects.png" alt="" width="150" height="150"/></a>
                    Lucky Bird
                </div>
                <div class="item-3 col">
                    <a href='https://github.com/Samir0051/BrickBreaker'><img class="alignnone size-full wp-image-342" src="projects.png" alt="" width="150" height="150"/></a>
                    Brick Breaker
                </div>
                <div class="item-4 col">
                    <a href='https://github.com/Samir0051/Wordle'><img class="alignnone size-full wp-image-342" src="projects.png" alt="" width="150" height="150"/></a>
                    Wordle
                </div>
                <div class="item-5 col">
                    <a href='https://github.com/Samir0051/mywebsite'><img class="alignnone size-full wp-image-342" src="projects.png" alt="" width="150" height="150"/></a>
                    Personal Website
                </div>
            </div>
        </div>
	</div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/product-sans') ;
.title{
    text-align: center;
	font-size: 40px;
	color: rgb(20, 139, 87);
    font-family: 'Product Sans', sans-serif;
}
.title2{
    text-align: center;
	font-size: 30px;
	color: rgb(20, 139, 87);
    font-family: 'Product Sans', sans-serif;
}
.aboutme{
    text-align: center;
    padding-top:50px;
	font-size: 30px;
	color: rgb(76, 84, 85);
    font-family: 'Product Sans', sans-serif;
}
.homepagetext{
    text-align: center;
	font-size: 18px;
	color: rgb(20, 139, 87);
    font-family: 'Product Sans', sans-serif;
}

.padding{ 
padding-top:100px;
}
.padding2{
align-items: normal;
margin:100px;
padding-left:300px;
padding-bottom:300px;
}
.project1{
    padding-left:25px;
    font-size: 15px;
	color: rgb(20, 139, 87);
    font-family: 'Product Sans', sans-serif;
}
.project2{
    padding-left:200px;
    font-size: 15px;
	color: rgb(20, 139, 87);
    font-family: 'Product Sans', sans-serif;
}

.row{
display:flex;
flex-wrap: wrap;
justify-content:center;
padding-bottom:50px;
}

.col{
flex: 0 0 calc(10%);
margin: 50px;
text-align: center;
}
.description{
padding-left:100px;
padding-top:200px;
text-align: left;
font-size: 18px;
color: rgb(20, 139, 87);
font-family: 'Product Sans', sans-serif;
}
#contentframe {
    padding-top:180px;
    margin-left:750px;
}
</style>