import './index.css'

function OnePage(){
    return(
        <div>
            <div className='navBar'>
                <a href = "">Home</a>
                <a href = "#aboutPage">About me</a>
                <a href = "#skillsSection">Skills</a>
                <a href = "#contactSection">Contact me</a>
            </div>
            <h1>Hello, I am <b className='faithName'>Faith Wachira</b></h1>

            <div className='home'>

                <p className='pTag'>A budding software developer with a passion for <br/>Data 
                    development.As I currently pursue software development,<br/> I enjoy taking 
                    up challenges that will improve my knowledge and <br/> abilities and eventually 
                    position me for professional success.<button>Contact me</button>
</p>


                <div>
                    <img src='images/faithWachira.jpg' className='faithImage'></img>

                </div>



            </div>
            <div>
                <h1 id='aboutPage'>About Me</h1>
                <div className='aboutSection'>
                    <img src='images/faithWachira.jpg' className='faithImageAbout'></img>
                    <p className='about'>
                    I am driven and motivated by the strong desire to have a positive influence 
                    with a profound passion in Data and Software Architecture, Back-end Development
                    and Front-end Development. My objective is to produce work that not only 
                    surpasses expectations but also makes a lasting impression, regardless of 
                    whether I'm querying database using SQL, enhance the back-end systems to 
                    guarantee optimal performance, or designing a visually appealing website.
                    <div className='projects'>
                        <h1>10+ </h1>
                        <p className='completedProjects'>Completed Projects</p>
                    </div>
                    <button className='btnContact'>Contact me</button>

                    

                    </p>

                    <div>
                        <p>

                        </p>
                    </div>
                </div>

                <div>
                    <h1 id='skillsSection'>Skills</h1>
                    <p>HTML</p>
        <div class="containerSkills">
             <div class="skills html">90%</div>
        </div>

        <p>CSS</p>
        <div class="containerSkills">
        <div class="skills css">80%</div>
        </div>

        <p>JavaScript</p>
        <div class="containerSkills">
        <div class="skills js">85%</div>
        </div>

        <p>SQL</p>
            <div class="containerSkills">
            <div class="skills sql">60%</div>
            </div>

        
        <p>Python</p>
            <div class="containerSkills">
            <div class="skills python">90%</div>
        </div>

        <p>React</p>
            <div class="containerSkills">
            <div class="skills react">60%</div>
            </div>

        <p>Kotlin</p>
            <div class="containerSkills">
            <div class="skills kotlin">70%</div>
            </div>
                </div>
            </div>
            <div class="fcf-body">

<div id="fcf-form">
<h3 class="fcf-h3" id='contactSection'>Contact me</h3>

<form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">
    
    <div class="fcf-form-group">
        <label for="Name" class="fcf-label">Your name</label>
        <div class="fcf-input-group">
            <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
        </div>
    </div>

    <div class="fcf-form-group">
        <label for="Email" class="fcf-label">Your email address</label>
        <div class="fcf-input-group">
            <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
        </div>
    </div>

    <div class="fcf-form-group">
        <label for="Message" class="fcf-label">Your message</label>
        <div class="fcf-input-group">
            <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
        </div>
    </div>

    <div class="fcf-form-group">
        <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
    </div>


</form>
</div>

</div>



        </div>

        
    )
}

export default OnePage;