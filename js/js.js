document.getElementById('PB').addEventListener('click', projectsCard)
document.getElementById('SB').addEventListener('click', skillsCard)
document.getElementById('QB').addEventListener('click', qualificationsCard)
document.getElementById('AB').addEventListener('click', aboutmeCard)
document.getElementById('LB').addEventListener('click', linkCard)

function clear() {
    document.getElementById('card').innerHTML = '';
}

function projectsCard() {
    var card = '<div class="card" id="InfoCardP"><div class="card-header" id="InfoHeader">Projects</div><div class="card-body"><p class = "card-text">Below is a list of my major projects</p><ul class="list-group list-group-flush"><li class="list-group-item"> <a data-bs-toggle="collapse" href="#collapseIntune" role="button" aria-expanded="false" aria-controls="collapseIntune">Microsoft Intune Rollout</a></li><div class="collapse" id="collapseIntune"><div class="card card-body">Enrolling 100 odd endpoints into Microsoft Intune and applying policys such as regualar virus scans, updates and various attack surface reduction rules.</div></div><li class="list-group-item"> <a data-bs-toggle="collapse" href="#collapseBot" role="button" aria-expanded="false" aria-controls="collapseBot">Microsoft Teams Bot</a></li><div class="collapse" id="collapseBot"><div class="card card-body">Built a Teams bot using Power Virtual Agents to provide helpdesk support looking for general sentiments within key phrases.</div></div><li class="list-group-item"> <a data-bs-toggle="collapse" href="#collapseAuto" role="button" aria-expanded="false" aria-controls="collapseAuto">New Starter Process Automation</a></li><div class="collapse" id="collapseAuto"><div class="card card-body">Using Power Automate to automate all the documentaion for our new starters, seek approval for permissions and email third partys with the information they need.</div></div><li class="list-group-item"><a data-bs-toggle="collapse" href="#collapseShare" role="button" aria-expanded="false" aria-controls="collapseShare">Sharepoint Knowledgebase Creation</a></li><div class="collapse" id="collapseShare"><div class="card card-body">Migrated the old Knowledgebase built in Atlassians Confluence to Microsoft Sharepoint while upgrading and adding multiple features for user engagement.</div></div><li class="list-group-item"><a data-bs-toggle="collapse" href="#collapseHelp" role="button" aria-expanded="false" aria-controls="collapseHelp">Internal Helpdesk Ticket System</a></li><div class="collapse" id="collapseHelp"><div class="card card-body">Combining the Teams bot, Power Automate and Sharepoint, I created a internal helpdesk ticket system to keep track of all internal IT issues.</div></div></ul></div></div>'
    if(document.getElementById('InfoCardP') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }
}

function skillsCard(){
    var card = '<div class = "card" id="InfoCardS"><div class="card-header" id="InfoHeader">Skills</div><div class="card-body"><p class="card-text"><table class="table"><tr><td>Python</td><td>★★★★★</td></tr><tr><td>Office 356</td><td>★★★★★</td></tr><tr><td>Telephony</td><td>★★★★</td></tr><tr><td>Microsoft Azure</td><td>★★★★</td></tr><tr><td>HTML</td><td>★★★</td></tr><tr><td>CSS</td><td>★★★</td></tr><tr><td>JavaScript</td><td>★★</td></tr></table></p></div></div>'
    if(document.getElementById('InfoCardS') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }

}

function aboutmeCard(){
    var card = '<div class="card" id="InfoCardA"><div class="card-header" id="InfoHeader">About Me</div><div class="card-body"><p class="card-text">A fully trained chef turned tech guy, I found a true passion for technology during the pandemic and have never looked back. As the ultimate support player I am always looking for the next way to help those around me while looking to make my way into the world of cyber security and be on the front line against the next wave of cyber attacks..</p><p class="card-text">Hobbies and Interests:</p><ul class="list-group list-group-flush"><li class="list-group-item">Camping</li><li class="list-group-item">Cooking</li><li class="list-group-item">Gaming</li><li class="list-group-item">Gardening</li></ul></div></div>'
    if(document.getElementById('InfoCardA') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }
}

function qualificationsCard() {
    var card = '<div class="card" id="InfoCardQ"><div class="card-header" id="InfoHeader">Qualifications</div><div class="card-body"><ul class="list-group list-group-flush"><li class="list-group-item" id="inprogress">Progress to Cyber Security Degree Completion</li><div class="progress" id="progressbar"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div></div><li class="list-group-item"></li><li class="list-group-item">Level 3 IT Support Technician</li><li class="list-group-item">Dark Web, Anonymity, Privacy & Security Course</li><li class="list-group-item">Cyber Security Bootcamp</li><li class="list-group-item">Python Bootcamp</li><li class="list-group-item">Level 2 Electrical Installation</li><li class="list-group-item">9 A-C GCSEs</li></ul></div></div>'
    if(document.getElementById('InfoCardQ') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }
}

function linkCard() {
    var card = '<div class="card" id="InfoCardL"><div class="card-header" id="InfoHeader">Links and Socials</div><div class="card-body"><p>I dont use much in the way of social media but what I do use is linked below:</p><div class="row"><div class="col-lg-4"><button type="button" class="btn btn-dark" id="sendbtn"> <a id="link" href="mailto:alxi@pm.me">e-mail me</a></button></div><div class="col-lg-4"><button type="button" class="btn btn-dark" id="sendbtn"> <a id="link" href="https://www.linkedin.com/in/daniel-ward-32a531260" target="_blank">LinkedIn</a></button></div><div class="col-lg-4"><button type="button" class="btn btn-dark" id="sendbtn"> <a id="link" href="https://mastodon.social/@alxiden" target="_blank">Mastodon</a></button></div></div></div></div>'
    if(document.getElementById('InfoCardL') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }
}
