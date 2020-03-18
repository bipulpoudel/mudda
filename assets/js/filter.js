var descwindow_state = document.getElementById('filter-window-state');
var descwindow_district = document.getElementById('filter-window-district');
var descwindow_block = document.getElementById('filter-window-block');
var descwindow_panchayat = document.getElementById('filter-window-panchayat');
var descwindow_village = document.getElementById('filter-window-village');

var down_state = document.getElementById('down-btm-state');
var down_district = document.getElementById('down-btm-district');
var down_block = document.getElementById('down-btm-block');
var down_panchayat = document.getElementById('down-btm-panchayat');
var down_village = document.getElementById('down-btm-village');


down_state.addEventListener('click',exp_state);
down_district.addEventListener('click',exp_district);
down_block.addEventListener('click',exp_block);
down_panchayat.addEventListener('click',exp_panchayat);
down_village.addEventListener('click',exp_village);

function exp_state(){
    if(down_state.className === 'fas fa-chevron-down like-button'){   
        descwindow_state.style.display = 'block';
        down_state.className = 'fas fa-chevron-up like-button';
    }
    else{
        descwindow_state.style.display = 'none';
        down_state.className = 'fas fa-chevron-down like-button';
    }
}
function exp_district(){
    if(down_district.className === 'fas fa-chevron-down like-button'){   
        descwindow_district.style.display = 'block';
        down_district.className = 'fas fa-chevron-up like-button';
    }
    else{
        descwindow_district.style.display = 'none';
        down_district.className = 'fas fa-chevron-down like-button';
    }
}
function exp_block(){
    if(down_block.className === 'fas fa-chevron-down like-button'){   
        descwindow_block.style.display = 'block';
        down_block.className = 'fas fa-chevron-up like-button';
    }
    else{
        descwindow_block.style.display = 'none';
        down_block.className = 'fas fa-chevron-down like-button';
    }
}
function exp_panchayat(){
    if(down_panchayat.className === 'fas fa-chevron-down like-button'){   
        descwindow_panchayat.style.display = 'block';
        down_panchayat.className = 'fas fa-chevron-up like-button';
    }
    else{
        descwindow_panchayat.style.display = 'none';
        down_panchayat.className = 'fas fa-chevron-down like-button';
    }
}
function exp_village(){
    if(down_village.className === 'fas fa-chevron-down like-button'){   
        descwindow_village.style.display = 'block';
        down_village.className = 'fas fa-chevron-up like-button';
    }
    else{
        descwindow_village.style.display = 'none';
        down_village.className = 'fas fa-chevron-down like-button';
    }
}