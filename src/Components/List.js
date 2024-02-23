import React, {useState} from 'react';
import data from './data';


const List = () => {
const [people, setPeople] = useState(data)


return (
    <section className='cards'>
      <h1 className='header'>{people.length} Birthdays Today</h1>
      
      <main className='peoples-card'>
        {people.map((person) => {
            const {id, image, name, age} = person
                return(
                        <article key={id} className = "list-of-people">
                            <div className = "persons-profile">
                                <img className='people-img' src={image} alt={name} title = {name}/>
                                <div>
                                    <h3>{name}</h3>
                                    <p>{age} years</p>
                                </div>
                                    
                            </div>
                        </article>
            )}
            
          )} 
      </main>
      {people.length===0? <button className='btn' onClick={() => setPeople(data)}> Refresh</button> : <button className='btn' onClick={() => setPeople([])}>Clear all</button>}
            
    </section>
  );
};

export default List;




