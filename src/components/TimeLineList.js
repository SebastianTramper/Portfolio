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
      <TimelineListItem category="School" subject="Diploma software developer niveau 4"/>
      <TimelineListItem category="School" subject="Start HBO opleiding informatica"/>
      <TimelineListItem category="Werk" subject="Junior softwaredeveloper baan"/>
      <TimelineListItem category="Project" subject="Theetuindemeeze.nl ontwikkeld"/>
      <TimelineListItem category="Focus" subject="PHP, CakePHP, Java, Spring Boot"/>

      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2020
        </span>
      </div>
      <TimelineListItem category="School" subject="Stage junior webdeveloper"/>
      <TimelineListItem category="School" subject="Tweede jaar softwaredeveloper niveau 4"/>
      <TimelineListItem category="Werk" subject="Bijbaan Wordpress theme developer"/>
      <TimelineListItem category="Project" subject="Onlinekookboek.com ontwikkeld"/>
      <TimelineListItem category="Focus" subject="PHP, Databases"/>


      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2019
        </span>
      </div>
      <TimelineListItem category="School" subject="Start softwaredeveloper niveau 4"/>
      <TimelineListItem category="Werk" subject="Bijbaan wordpress theme developer"/>
      <TimelineListItem category="Project" subject="chanelkapsteraanhuis.nl ontwikkeld"/>
      <TimelineListItem category="Focus" subject="HTML, CSS, Javascript"/>


      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2018
        </span>
      </div>
      <TimelineListItem category="School" subject="Diploma ICT beheer niveau 3"/>
      <TimelineListItem category="School" subject="Stage Waterschappen servicedesk"/>
      <TimelineListItem category="School" subject="Stage gemeente Goes systeembeheer"/>
      <TimelineListItem category="Focus" subject="ICT systeembeheer"/>
      
      <div className="year mb-5 mt-lg-11 pt-5">
        <span>
            2017
        </span>
      </div>
      <TimelineListItem category="School" subject="Start ICT beheer niveau 3"/>
      <TimelineListItem category="School" subject="Stage computer reparatie bedrijf "/>
      <TimelineListItem category="Focus" subject="Hardware en software basis"/>
      

    </div>
  );
}

export default TimelineList;
