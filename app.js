var view = 1;
var size = 'M';
var frame = 1;
var finish = 'matte';
var preview = document.querySelectorAll('.preview-box');
var mainHolder = document.querySelector('.mainview');
var main = document.querySelector('.mainview-box');
var mainImage = main.querySelector('img');
var mainGloss = document.querySelector('.mainview-gloss');
var frameList = document.querySelectorAll('.frame-item');
var sizeList = document.querySelectorAll('.size-item');
var zoomed = document.querySelector('.zoomed');
var zoomedBackfall = document.querySelector('.zoomed-backfall');
// var zoomWrapper = document.querySelector('.zoomed-wrapper');
var zoomedContent = document.querySelector('.zoomed-content');

function setView(value){
    view = value;
    preview.forEach(function(element){
        element.classList.remove('active');
    });
    preview[view - 1].classList.add('active'); 
    setMainView();
}

function setSize(value){
    size = value;
    sizeList.forEach(function(element){
        element.classList.remove('active');
        element.classList.add('border');
    });

    var finishItems = document.querySelectorAll('.finish-item');
    finishItems.forEach(function(element, index){
        if(size == 'XL'){
            element.querySelector('input').checked = false;
        }
        element.classList.remove('area-disabled');
    });
    frameList.forEach(function(element){
        element.classList.remove('area-disabled');
    });

    if(value == 'M'){
        sizeList[0].classList.remove('border');
        sizeList[0].classList.add('active');
    }else if(value == 'L'){
        sizeList[1].classList.remove('border');
        sizeList[1].classList.add('active');
    }
    else if(value == 'XL'){
        sizeList[2].classList.remove('border');
        sizeList[2].classList.add('active');

        finish = 'matte';
        finishItems.forEach(function(element, index){
            if(index == 0){
                element.querySelector('input').checked = true;
            }else{
                element.querySelector('input').checked = false;
                element.classList.add('area-disabled');
            }
        });
        frame = 1;
        frameList.forEach(function(element, index){
            if(index == 0){
                element.classList.add('active');
            }else{
                element.classList.remove('active');
                element.classList.add('area-disabled');
            }
        });
    }
    setMainView();
    setPreview();
    setSizePreview();
}

function setFrame(value){
    frame = value;
    frameList.forEach(function(element){
        element.classList.remove('active');
    });
    frameList[frame - 1].classList.add('active');
    setMainView();
    setPreview();
    setSizePreview();
}

function setFinish(value){
    finish = value;
    setMainView();
    setPreview();
    setSizePreview();
}

function setSizePreview(){
    sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-two');
    sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-two');

    sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-three');
    sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-three');
    
    sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-four');
    sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-four');
    
    sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-five');
    sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.remove('frame-five');
    if(frame > 1){
        sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').style.padding = '1%';
        sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').style.padding = '1%';
        switch(frame){
            case 2:{
                sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-two');
                sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-two');
            }
            break;
            case 3:{
                sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-three');
                sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-three');
            }
            break;
            case 4:{
                sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-four');
                sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-four');
            }
            break;
            case 5:{
                sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-five');
                sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').classList.add('frame-five');
            }
            break;
        }
    }else{
        sizeList[0].querySelector('.size-preview').querySelector('.size-preview-inner').style.padding = '0%';
        sizeList[1].querySelector('.size-preview').querySelector('.size-preview-inner').style.padding = '0%';
    }

    if(finish != 'matte'){
        var sizePreviewGloass = document.querySelectorAll('.size-preview-gloss');
        sizePreviewGloass.forEach(function(element){
            element.classList.add('gloss');
        });
    }else{
        var sizePreviewGloass = document.querySelectorAll('.size-preview-gloss');
        sizePreviewGloass.forEach(function(element){
            element.classList.remove('gloss');
        });
    }
}

function setPreview(){

    preview[0].querySelector('.preview-box-inner').classList.remove('crosshair');
    preview[1].querySelector('.preview-box-inner').classList.remove('crosshair');
    preview[2].querySelector('.preview-box-inner').classList.remove('crosshair');

    preview[0].querySelector('img').style.transform = 'scale(1)';
    preview[1].querySelector('img').style.transform = 'scale(1)';
    preview[2].querySelector('img').style.transform = 'scale(1)';

    preview[2].querySelector('img').style.transformOrigin = '50% 50% 0';

    if(finish == 'matte'){
        var previewGloss = document.querySelectorAll('.preview-gloss');
        previewGloss.forEach(function(element){
            element.classList.remove('gloss');
        });
    }else{
        var previewGloss = document.querySelectorAll('.preview-gloss');
        previewGloss.forEach(function(element){
            element.classList.add('gloss');
        });
    }

    preview[0].querySelector('.preview-box-inner').classList.remove('frame-two');
    preview[1].querySelector('.preview-box-inner').classList.remove('frame-two');
    preview[2].querySelector('.preview-box-inner').classList.remove('frame-two');
    preview[0].querySelector('.preview-box-inner').classList.remove('frame-three');
    preview[1].querySelector('.preview-box-inner').classList.remove('frame-three');
    preview[2].querySelector('.preview-box-inner').classList.remove('frame-three');
    preview[0].querySelector('.preview-box-inner').classList.remove('frame-four');
    preview[1].querySelector('.preview-box-inner').classList.remove('frame-four');
    preview[2].querySelector('.preview-box-inner').classList.remove('frame-four');
    preview[0].querySelector('.preview-box-inner').classList.remove('frame-five');
    preview[1].querySelector('.preview-box-inner').classList.remove('frame-five');
    preview[2].querySelector('.preview-box-inner').classList.remove('frame-five');
    preview[0].querySelector('.preview-box-inner').style.padding = '0%';
    preview[1].querySelector('.preview-box-inner').style.padding = '0%';
    preview[2].querySelector('.preview-box-inner').style.padding = '0%';


    if(size != 'XL'){
        switch(frame){
            case 2:{
                preview[0].querySelector('.preview-box-inner').classList.add('frame-two');
                preview[1].querySelector('.preview-box-inner').classList.add('frame-two');
                preview[2].querySelector('.preview-box-inner').classList.add('frame-two');
            }
            break;
            case 3:{
                preview[0].querySelector('.preview-box-inner').classList.add('frame-three');
                preview[1].querySelector('.preview-box-inner').classList.add('frame-three');
                preview[2].querySelector('.preview-box-inner').classList.add('frame-three');
            }
            break;
            case 4:{
                preview[0].querySelector('.preview-box-inner').classList.add('frame-four');
                preview[1].querySelector('.preview-box-inner').classList.add('frame-four');
                preview[2].querySelector('.preview-box-inner').classList.add('frame-four');
            }
            break;
            case 5:{
                preview[0].querySelector('.preview-box-inner').classList.add('frame-five');
                preview[1].querySelector('.preview-box-inner').classList.add('frame-five');
                preview[2].querySelector('.preview-box-inner').classList.add('frame-five');
            }
            break;
        }
    }
    
    switch(size){
        case 'M':{
            preview[0].style.backgroundImage = "url('images/wall-empty.jpg')";

            preview[1].style.backgroundImage = "url('images/wall-frames.jpg')";

            preview[2].style.backgroundImage = "url('images/interior.jpg')";
            preview[2].querySelector('.preview-box-inner').style.width = '20%';
            preview[2].querySelector('.preview-box-inner').style.left = '25%';
            preview[2].querySelector('.preview-box-inner').style.top = '10%';
            preview[2].querySelector('.preview-box-inner').style.transform = 'translate(0%, 0%) perspective(0px) rotateY(0deg) scaleX(1)';
            
            if(frame > 1){
                preview[0].querySelector('.preview-box-inner').style.padding = '3%';
                preview[1].querySelector('.preview-box-inner').style.padding = '3%';
                preview[2].querySelector('.preview-box-inner').style.padding = '1%';
            }
        }
        break;
        case 'L':{
            preview[0].style.backgroundImage = "url('images/wall-empty.jpg')";

            preview[1].style.backgroundImage = "url('images/wall-frames-2x.jpg')";

            preview[2].style.backgroundImage = "url('images/interior.jpg')";
            preview[2].querySelector('.preview-box-inner').style.width = '27%';
            preview[2].querySelector('.preview-box-inner').style.left = '25%';
            preview[2].querySelector('.preview-box-inner').style.top = '10%';
            preview[2].querySelector('.preview-box-inner').style.transform = 'translate(0%, 0%) perspective(0px) rotateY(0deg) scaleX(1)';
            
            if(frame > 1){
                preview[0].querySelector('.preview-box-inner').style.padding = '3%';
                preview[1].querySelector('.preview-box-inner').style.padding = '3%';
                preview[2].querySelector('.preview-box-inner').style.padding = '1%';
            }
        }
        break;
        case 'XL':{
            preview[0].style.backgroundImage = "url('images/wall-empty.jpg')";
            preview[0].querySelector('.preview-box-inner').classList.add('crosshair');

            preview[1].style.backgroundImage = "url('images/wall-frames.jpg')";
            preview[1].querySelector('img').style.transform = 'scale(2.0)';
            preview[1].querySelector('img').style.transformOrigin = '0% 100%';

            preview[2].style.backgroundImage = "url('images/interior-2x.jpg')";
            preview[2].querySelector('.preview-box-inner').style.width = '33%';
            preview[2].querySelector('.preview-box-inner').style.left = '25%';
            preview[2].querySelector('.preview-box-inner').style.top = '10%';
            preview[2].querySelector('.preview-box-inner').style.transform = 'translate(0%, 0%) perspective(0px) rotateY(0deg) scaleX(1)'
            preview[2].querySelector('.preview-box-inner').classList.add('crosshair');
        }
        break;
    }
}


function setMainView(){
    main.classList.remove('crosshair');
    main.classList.remove('frame-two');
    main.classList.remove('frame-three');
    main.classList.remove('frame-four');
    main.classList.remove('frame-five');
    main.style.padding = '0%';
    mainImage.style.transform = 'scale(1)';
    mainImage.style.transformOrigin = '50% 50% 0';

    document.querySelector('.mainview-info-container').classList.add('d-none');

    if(finish == 'matte'){
        mainGloss.classList.remove('gloss');
    }else{
        mainGloss.classList.add('gloss');
    }
    if(size != 'XL'){
        switch(frame){
            case 2:{
                main.classList.add('frame-two');
            }
            break;
            case 3:{
                main.classList.add('frame-three');
            }
            break;
            case 4:{
                main.classList.add('frame-four');
            }
            break;
            case 5:{
                main.classList.add('frame-five');
            }
            break;
        }    
    }
    switch(view){
        case 1:{
            if(size == 'M'){
                main.style.width = '50%';
                main.style.left = '50%';
                main.style.top = '50%';
                main.style.transform = 'translate(-50%, -50%) perspective(0px) rotateY(0deg) scaleX(1)';
                mainHolder.style.backgroundImage = "url('images/wall-empty.jpg')";
                if(frame > 1){
                    main.style.padding = '3% 3.7%';
                }
            }else if(size == 'L'){
                main.style.width = '60%';
                main.style.left = '50%';
                main.style.top = '50%';
                main.style.transform = 'translate(-50%, -50%) perspective(0px) rotateY(0deg) scaleX(1)';
                mainHolder.style.backgroundImage = "url('images/wall-empty.jpg')";
                if(frame > 1){
                    main.style.padding = '3% 3.7%';
                }
            }else if(size == 'XL'){
                main.style.width = '60%';
                main.style.left = '50%';
                main.style.top = '50%';
                main.classList.add('crosshair');
                main.style.transform = 'translate(-50%, -50%) perspective(0px) rotateY(0deg) scaleX(1)';
                mainHolder.style.backgroundImage = "url('images/wall-empty.jpg')";
            }
        }
        break;
        case 2:{
            main.style.width = '50%';
            main.style.left = '50%';
            main.style.top = '50%';
            mainImage.style.transformOrigin = '0% 100%';
            main.style.transform = 'translate(-40%, -50%) perspective(2000px) rotateY(55deg) scaleX(1.25)';
            document.querySelector('.mainview-info-container').classList.remove('d-none');
            if(size == 'M'){
                mainHolder.style.backgroundImage = "url('images/wall-frames.jpg')";
                if(frame > 1){
                    main.style.padding = '3%';
                }
            }else if(size == 'L'){
                mainHolder.style.backgroundImage = "url('images/wall-frames-2x.jpg')";
                if(frame > 1){
                    main.style.padding = '3%';
                }
            }else if(size == 'XL'){
                mainImage.style.transform = 'scale(2)';
                mainHolder.style.backgroundImage = "url('images/wall-frames.jpg')";
            }
        }
        break;
        case 3:{
            if(size == 'M'){
                main.style.width = '20%';
                main.style.left = '25%';
                main.style.top = '10%';
                main.style.transform = 'translate(0%, 0%) perspective(0px) rotateY(0deg) scaleX(1)';
                mainHolder.style.backgroundImage = "url('images/interior.jpg')";
                if(frame > 1){
                    main.style.padding = '1%';
                }
            }else if(size == 'L'){
                main.style.width = '27%';
                main.style.left = '25%';
                main.style.top = '10%';
                main.style.transform = 'translate(0%, 0%) perspective(0px) rotateY(0deg) scaleX(1)';
                mainHolder.style.backgroundImage = "url('images/interior.jpg')";
                if(frame > 1){
                    main.style.padding = '2%';
                }
            }else if(size == 'XL'){
                main.style.width = '30%';
                main.style.left = '25%';
                main.style.top = '10%';
                main.classList.add('crosshair');
                main.style.transform = 'translate(0%, 0%) perspective(0px) rotateY(0deg) scaleX(1)';
                mainHolder.style.backgroundImage = "url('images/interior-2x.jpg')";
            }
        }
        break;
    }
}

window.onload = function(){
    var images = document.querySelectorAll('.plateImage');
    images.forEach(function(element){
        var img = document.createElement('img');
        img.src = mainImage.src;
        element.appendChild(img);
    });
    mainHolder.addEventListener('mousemove', function(event){
        if(view == 1){
            var magnification = 2;
            mainHolder.style.cursor = 'none';
            zoomedBackfall.style.opacity = '1';
            var rect = mainHolder.getBoundingClientRect();
            var zoomrect = zoomed.getBoundingClientRect();
            var x = parseInt(event.clientX - rect.left);    
            var y = parseInt(event.clientY - rect.top);
            var leftPercentage = (x*100)/rect.width;
            var topPercentage = (y*100)/rect.height;
            var zoom = {
                width: rect.width * magnification,
                height: rect.height * magnification,
                left: leftPercentage,
                top: topPercentage
            };
            zoomed.style.left = x+'px';
            zoomed.style.top = y+'px';
            zoomedContent.style.width = rect.width+'px';
            zoomedContent.style.height = rect.height+'px';
            zoomedContent.style.left = ((zoomrect.width/2) - x)+'px';
            zoomedContent.style.top = ((zoomrect.height/2) - y)+'px';

            zoomedBackfall.querySelector('.plateImage').style.left = '-'+zoom.left+'%';
            zoomedBackfall.querySelector('.plateImage').style.top = '-'+zoom.top+'%';
            zoomedBackfall.querySelector('.plateImage').style.width = zoom.width+'px';
            zoomedBackfall.querySelector('.plateImage').style.height = zoom.height+'px';

            zoomedContent.querySelector('.plateImage').style.left = '-'+zoom.left+'%';
            zoomedContent.querySelector('.plateImage').style.top = '-'+zoom.top+'%';
            zoomedContent.querySelector('.plateImage').style.width = zoom.width+'px';
            zoomedContent.querySelector('.plateImage').style.height = zoom.height+'px';
        }
    });
    mainHolder.addEventListener('mouseleave', function(event){
        mainHolder.style.cursor = 'auto';
        zoomed.style.left = '-100%';
        zoomed.style.top = '-100%';
        zoomedBackfall.style.opacity = '0';
    });

    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    });
    document.onkeydown = function (e) {
        return false;
    }
}