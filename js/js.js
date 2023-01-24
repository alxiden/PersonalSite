document.getElementById('R1').addEventListener('click', projectsCard)
document.getElementById('L1').addEventListener('click', skillsCard)
document.getElementById('R2').addEventListener('click', qualificationsCard)
document.getElementById('L2').addEventListener('click', aboutmeCard)
document.getElementById('bottombox').addEventListener('click', projectsCard)

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
    var card = '<div class="card" id="InfoCardA"><div class="card-header" id="InfoHeader">About Me</div><div class="card-body"><p class="card-text">A fully trained chef turned tech guy, I found a true passion for technology during the pandemic and have never looked back since. Looking to make my way into the world of cyber security and be on the front line against the next wave of cyber attacks. As the ultimate support player I am always looking for the next way to help those around me.</p><p class="card-text">Hobbies and Interests:</p><ul class="list-group list-group-flush"><li class="list-group-item">Camping</li><li class="list-group-item">Cooking</li><li class="list-group-item">Gaming</li><li class="list-group-item">Gardening</li></ul></div></div>'
    if(document.getElementById('InfoCardA') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }
}

function qualificationsCard() {
    var card = ''
    if(document.getElementById('InfoCardQ') == null){
        document.getElementById('card').innerHTML = card;
        document.getElementById('InfoCard').style.visibility = 'visible'}
    else{
        clear()
    }
}