import { React } from "react";
import '../App.css';

export function AboutMeSummary(){
    return (
        <a href="/aboutme">
        <div className="projects-info">
            <p>
            Hello, I'm Damián, from Buenos Aires, Argentina.
            </p>
            <p>
            I'm recently graduated as a Fullstack Developer and willing to get more experience.
            </p>
            <p>
            I learned Front-end and Back-end...               (click to read more)
            </p>
        </div>
        </a>
    )
}
export function AboutMe(){
    return (
        <div>
        <h2>More About me</h2>
        <p>
        Hello, I'm Damián, from Buenos Aires, Argentina.
</p>
<p>
I'm recently graduated as a Fullstack Developer and willing to get more experience.
</p>
<p>
I learned Front-end and Back-end. I manage tools like React, Redux, CSS, HTML, Express, Sequelize, NodeJs,
Postgres, Postman, HerokuDB, PgAdm, MySQL, Python, Git, GitHub, and AWS-Dbase. Also, I can work with operating systems like Linux, macOS, and Windows.
</p>
<p>
Additionally, I graduated as an Accountant at the University of Buenos Aires, a profession I've been practicing for more than 15 years, and I started studying for an MBA on US21. 
Lastly, I'm a co-owner of HDBroker, an Insurances Broker agency, and  EstudioDA, an Accounting firm.
</p>
<p>
I speak Spanish, English, and Portuguese.
</p>
<p>
If you'd like to engage in conversations, please don't hesitate to reach out.
</p>
<p>
Regards.
</p>
<p>
Damian     </p>
        </div>
    )
}