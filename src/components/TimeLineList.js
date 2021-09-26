import React from 'react';
import { Container} from 'react-bootstrap';

import { useSpring, animated } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'
import TimelineListItem from "./TimeLineListItem";

function TimelineList(props) {

  const { ref, inView } = useInView({
    rootMargin: '-150px'
  });

  const showProject = useSpring(
    {
      to: {
        opacity: inView ? 1 : 0
      },
      from: {
        opacity: 0,
      },
      config: { duration: 600 },

    });
  return (
    <div ref={ref} name="header">
      <div className="year mb-5">
        <span>
            2021
        </span>
      </div>
      <TimelineListItem category="School" subject="Diploma software developer niveau 4" color={{color: '#E55934'}}/>
      <TimelineListItem category="School" subject="Start HBO opleiding informatica" color={{color: '#E55934'}}/>
      <TimelineListItem category="Werk" subject="Junior webdeveloper baan" color={{color: '#198754'}}/>
      <TimelineListItem category="Project" subject="Theetuindemeeze.nl ontwikkeld" color={{color: '#ffff33'}}/>
      <TimelineListItem category="Focus" subject="PHP, CakePHP, Java, Spring Boot" color={{color: '#0d6efd'}}/>
      
      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2020
        </span>
      </div>
      <TimelineListItem category="School" subject="Stage junior webdeveloper" color={{color: '#E55934'}}/>
      <TimelineListItem category="School" subject="Tweede jaar softwaredeveloper niveau 4" color={{color: '#E55934'}}/>
      <TimelineListItem category="Werk" subject="Bijbaan Wordpress theme developer" color={{color: '#198754'}}/>
      <TimelineListItem category="Project" subject="Onlinekookboek.com ontwikkeld" color={{color: '#ffff33'}}/>
      <TimelineListItem category="Focus" subject="PHP, Databases" color={{color: '#0d6efd'}}/>


      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2019
        </span>
      </div>
      <TimelineListItem category="School" subject="Start softwaredeveloper niveau 4" color={{color: '#E55934'}}/>
      <TimelineListItem category="Werk" subject="Bijbaan wordpress theme developer" color={{color: '#198754'}}/>
      <TimelineListItem category="Project" subject="chanelkapsteraanhuis.nl ontwikkeld" color={{color: '#ffff33'}}/>
      <TimelineListItem category="Focus" subject="HTML, CSS, Javascript" color={{color: '#0d6efd'}}/>


      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2018
        </span>
      </div>
      <TimelineListItem category="School" subject="Diploma ICT beheer niveau 3" color={{color: '#E55934'}}/>
      <TimelineListItem category="School" subject="Stage Waterschappen servicedesk" color={{color: '#E55934'}}/>
      <TimelineListItem category="School" subject="Stage gemeente Goes systeembeheer" color={{color: '#E55934'}}/>
      <TimelineListItem category="Focus" subject="ICT systeembeheer" color={{color: '#0d6efd'}}/>
      
      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2017
        </span>
      </div>
      <TimelineListItem category="School" subject="Start ICT beheer niveau 3" color={{color: '#E55934'}}/>
      <TimelineListItem category="School" subject="Stage computer reparatie bedrijf " color={{color: '#E55934'}}/>
      <TimelineListItem category="Focus" subject="Hardware en software basis" color={{color: '#0d6efd'}}/>
      
      
    </div>
  );
}

export default TimelineList;
