import React from 'react';

function Tabs() {
  return (
    <>
      <div class='landingtabs'>
        <div
          class='nav flex-column nav-pills'
          id='v-pills-tab'
          role='tablist'
          aria-orientation='vertical'
        >
          <a
            class='nav-link active'
            id='v-pills-qualityeducation-tab'
            data-toggle='pill'
            href='#v-pills-qualityeducation'
            role='tab'
            aria-controls='v-pills-qualityeducation'
            aria-selected='true'
          >
            <div className='landingtabs_bar'></div>
            Quality Education
          </a>

          <a
            class='nav-link'
            id='v-pills-qualifiedteachers-tab'
            data-toggle='pill'
            href='#v-pills-qualifiedteachers'
            role='tab'
            aria-controls='v-pills-qualifiedteachers'
            aria-selected='false'
          >
            <div className='landingtabs_bar'></div>
            Qualified Teachers
          </a>
          <a
            class='nav-link'
            id='v-pills-expandnetwork-tab'
            data-toggle='pill'
            href='#v-pills-expandnetwork'
            role='tab'
            aria-controls='v-pills-expandnetwork'
            aria-selected='false'
          >
            <div className='landingtabs_bar'></div>
            Expand Network
          </a>
          <a
            class='nav-link'
            id='v-pills-learningtailored-tab'
            data-toggle='pill'
            href='#v-pills-learningtailored'
            role='tab'
            aria-controls='v-pills-learningtailored'
            aria-selected='false'
          >
            <div className='landingtabs_bar'></div>
            Learning is Tailored
          </a>
          <a
            class='nav-link'
            id='v-pills-onetutoring-tab'
            data-toggle='pill'
            href='#v-pills-onetutoring'
            role='tab'
            aria-controls='v-pills-onetutoring'
            aria-selected='false'
          >
            <div className='landingtabs_bar'></div>
            One-on-one Tutoring
          </a>
        </div>
      </div>
      <div class='landingcontent'>
        <div class='tab-content' id='v-pills-tabContent'>
          <div
            class='tab-pane fade show active'
            id='v-pills-qualityeducation'
            role='tabpanel'
            aria-labelledby='v-pills-qualityeducation-tab'
          >
            <h2 className='landingcontent_title'>Quality Education</h2>
            <p className='landingcontent_description'>
              CLC Online Learning makes quality education accessible to you.
              Learn the internationally accepted curriculum anytime from
              anywhere.
            </p>
            <img
              alt='landingcontent_image'
              className='landingcontent_image'
              src='./assets/images/img-2.jpg'
            />
          </div>
          <div
            class='tab-pane fade'
            id='v-pills-qualifiedteachers'
            role='tabpanel'
            aria-labelledby='v-pills-qualifiedteachers-tab'
          >
            <h2 className='landingcontent_title'> Qualified Teachers</h2>
            <p className='landingcontent_description'>
              Live sessions and tutoring from experienced and qualified
              international teachers who are experts in their relative subject.
            </p>
            <img
              alt='landingcontent_image'
              className='landingcontent_image'
              src='./assets/images/qualified_teachers.jpg'
            />
          </div>
          <div
            class='tab-pane fade'
            id='v-pills-expandnetwork'
            role='tabpanel'
            aria-labelledby='v-pills-expandnetwork-tab'
          >
            <h2 className='landingcontent_title'>Expand Network</h2>
            <p className='landingcontent_description'>
              Get a chance to expand your network by learning with international
              students and teachers from all over the world.
            </p>
            <img
              alt='landingcontent_image'
              className='landingcontent_image'
              src='./assets/images/expand_network.jpg'
            />
          </div>
          <div
            class='tab-pane fade'
            id='v-pills-learningtailored'
            role='tabpanel'
            aria-labelledby='v-pills-learningtailored-tab'
          >
            <h2 className='landingcontent_title'>Learning is Tailored</h2>
            <p className='landingcontent_description'>
              CLC Online Learning is tailored to your ease! Learn at a schedule
              that is tailored exclusively according to your schedule.
            </p>
            <img
              alt='landingcontent_image'
              className='landingcontent_image'
              src='./assets/images/learning_is_tailored.jpg'
            />
          </div>
          <div
            class='tab-pane fade'
            id='v-pills-onetutoring'
            role='tabpanel'
            aria-labelledby='v-pills-onetutoring-tab'
          >
            <h2 className='landingcontent_title'>One-on-one Tutoring</h2>
            <p className='landingcontent_description'>
              Choose what suits your needs better : Small group sessions or
              one-on-one tutoring.
            </p>
            <img
              alt='landingcontent_image'
              className='landingcontent_image'
              src='./assets/images/one_on_one tutoring.jpg'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
