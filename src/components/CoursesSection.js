import React from 'react';
import './CoursesSection.css';

function CoursesSection() {
  return (
    <>
      <div className="home courses987">
        <h1 className="our-course">Our Courses</h1>
      </div>
      <div className='course123'>
        <h1 className="h123">Courses We Offer</h1>
        <div className="Parent">
          <div className="Cards-container">
            <img src="/images/cards-1.jpg" alt="cards-1" className="bg bg-1" />
            <div className="Cards cards-1">
              <h1 className="Cards-Heading">Bachelor of Computer Application (BCA)</h1>
              <div className="Cards-p">
                <p>Bachelor of Computer Application (BCA) Course is an three-year undergraduate program
                  after 10+2 where students are prepared for various areas of computer applications including the latest
                  developments in the industry. The course is specially designed for the tech-savvy youth who are interested in
                  making a career in the field of Information Technology (IT). If one wishes to become a Software Developer or
                  Web-Developer/Designer or wants to take up a career in Systems Management, then BCA is the most prominent and
                  best course to get an early start for their careers. The successful completion of this course opens up options
                  such as MCA, MBA etc.
                  <br />
                  The program is divided into six semesters where students get the insight in the field of research and development
                  (R&D) of software with regular interaction from industry & academic professionals through workshops, Guest
                  Lectures and Internships.
                </p>
              </div>
              <div className="Buttons">
                <button type="button" className=" btn50">Apply Now</button>
                <button type="button" className=" btn10">Check Eligibility</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="Parent">
        <div className="Cards-container">

          <div className="Cards cards-2">
            <h1 className="Cards-Heading">Bachelor of Voactional (B.Voc) Software Development</h1>
            <div className="Cards-p">
              <p>Bachelor of Vocational (B.VOC) Software
                Development is a three-year undergraduate program introduced by Guru Gobind Singh Indraprastha University.
                The programme aims to build individual capacities and train persons with adequate employability skills.
                The programme structure attempts to blend appropriate technical knowledge and skills, personal and professional
                skills and substantive ‘hands-on’ and field / site experience required in the trade. Keeping in view the
                demand of the industry & corporates and to provide flexible options for students the programme is designed
                in modular manner where students get multiple entry and exit options at various levels. The learners will have
                flexibility to develop themselves according to their strengths and career interests.
              </p>
              <p>
                1. If the students exits after 1st-year, then He/She will be awarded with a Diploma in IT (SD).
                <br />
                <b>2. If the students exits after 2nd-year </b> then He/She will be awarded with an Advance Diploma in IT (SD).
                <br />
                <b>3. At the End of third year,</b> the Student will be awarded with a degree in B.Voc (SD).
              </p>
              <br />
            </div>
            <div className="Buttons">
              <button type="button" className=" btn50">Apply Now</button>
              <button type="button" className=" btn10">Check Eligibility</button>
            </div>
          </div>
          <img src="/images/cards-2.jpg" alt="cards-1" className="bg bg-2" />
        </div>
      </div>


      <div className="Parent">
        <div className="Cards-container">
          <img src="/images/cards-3.jpg" alt="cards-1" className="bg bg-3" />
          <div className="Cards cards-3">
            <h1 className="Cards-Heading">World Class Skill Center (WCSC)</h1>
            <div className="Cards-p">
              <p>World Class Skill Centre is engaged in empowering students through skill sets
                and on the job training to help them reach their full potential and improve their lives. The Government-aided skill
                centres follows an unique approach to provide world class skills to youth of India by imparting world class
                training, technology and infrastructure.
              </p>
              <p>
                <b>There are total 9 Courses that are offered under WCSC- </b>
                <br />
                1. Hospitality Operations
                <br />
                2. Retail Services
                <br />
                3. Finance Executive
                <br />
                4. Digital Marketing And Web Development
                <br />
                5. Digital Marketing And Data Analytics
                <br />
                6. Sports Digitalization And Performance Management
                <br />
                7. Food Production
                <br />
                8. Beauty And Wellness Consultant
                <br />
                9. Sports Fitness And Yoga Application
              </p>
              <br />
            </div>
            <div className="Buttons">
              <button type="button" className=" btn50">Apply Now</button>
              <button type="button" className=" btn10">Check Eligibility</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default CoursesSection;