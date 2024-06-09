import React from 'react';
import './timeline.css'

const eventsData = [
    {date: "May 2024", 
    description: "Repurposing Earlyscreen Model code to fit mobile data. Assessing performance trained on LEAF data, tested on mobile data.",},

    {date: "Feb 2024", 
    description: "Following advice from Professor Karkar, I have begun development of a portfolio webpage to document career progress.",},

    {date: "Jan 2024", 
    description: "Begun assisting Manasa Kalanadhabhatta on processing participant data collected from Earlyscreen application"},

    {date: "Dec 2023", 
    description: "Graduated From University of Massachusetts, Amherst with a M.S. degree in Computer Science."},

    {date: "Jul 2022", 
    description: "Working with Adam Grabell and SEED Labs to port their frustration games over from E-Prime to Unity\
                  To allow for remote data collection from participants for their Earlyscreen Project."},

    {date: "Jan 2022", 
    description: "Beginning M.S. program for the Computer Science department at University of Massachusetts, Amherst."},

    {date: "Jul 2021", 
    description: "Working with MyConnectUSA as a Student Intern on the development team to develop the functionality for their\
                  social media website geared towards finding localized resources for families with disabilities."},

    {date: "May 2020", 
    description: "Graduated From University of Massachusetts, Amherst with a B.S. degree in Computer Science."},
    
];

const Timeline = () => {
    return (
    <section id='time'>
      <div className='table-header'>
        <h3>Career Highlights</h3>
        <h6>(scroll for more)</h6>
      </div>
      <div className id="table_structure">
        <table>
          <thead>
          </thead>
          <tbody>
            {eventsData.map((event, index) => (
              <tr key={index}>
                <td>{event.date}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    );
  }

export default Timeline;
