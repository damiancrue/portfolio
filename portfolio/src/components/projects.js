import work from './mywork'
import '../App.css';


export function Projects(){

// console.log(work[1])
    return (
        <div className='container-projects'>
            <h3 className='title'>Projects</h3>
        {
        work.map((i)=> 
            // console.log(i)
            <a href={'/mywork/'+i.id}>
            <div className='projects-info' key={i.id}>
            <div >
            <h3 className='title'>{i.name}</h3>
            <p>{i.detail}</p>
            </div>
            <img className='img-gral' src={i.img} alt='no cargo la imagen'/>
        </div>
            </a>
            )
        }
        </div>
    
        )
    }