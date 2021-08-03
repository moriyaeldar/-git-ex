'use strict'

$(document).ready(init);
$('.btn btn-primary').click(openContactLink);


function init() {
    creatProjects()
    renderProjs()
}

renderProjs()

function renderProjs() {
    var projects = creatProjects()
    var strHtml = projects.map(function(project) {
        return ` <div class="col-md-4 col-sm-6 portfolio-item">
   <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')"href="#portfolioModal1">
<div class="portfolio-hover">
    <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
    </div>
</div>
<img class="img-fluid" src="img/portfolio/${project.id}.jpeg" alt="">
</a>
<div class="portfolio-caption">
<h4>${project.title}</h4>
<p class="text-muted">${project.desc}</p>
</div>
</div>`
    })

    $('.projects-gallery').html(strHtml)
}

function renderModal(projId) {
    var project = getProjectById(projId)
    var strHtml = ` <div class="modal-dialog">
    <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
            <div class="lr">
                <div class="rl"></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <h2>${project.title}</h2>
                        <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpeg" alt="">
                        <p>${project.desc}</p>
                        <ul class="list-inline">
                            <li>Date: ${project.publishedAt}</li>
                        </ul>
                        <ul>
                        <a href="${project.url}">לפרוייקט המלא לחץ</a>
                        </ul>
                        <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fa fa-times"></i>
            Close Project</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    $('.modal1').html(strHtml)
}

function openContactLink() {
    var mail = $('#email').val();
    var subject = $('#subject').val();
    var msgBody = $('#msg-body').val();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=me@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com'
        (mail, subject, msgBody), "_blank");

}