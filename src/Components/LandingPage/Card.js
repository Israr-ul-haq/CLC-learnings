import React from 'react';

function Card() {
  return (
    <section className='competence competencelandingpage'>
      <div className='container'>
        <div className='competence__content'>
          <div className='competencebottom'>
            <div className='clcfullcard'>
              <div className='clcfullcard'>
                <div className='row clcfullcard__row'>
                  <div className='col-md-6 clcfullcard__column wow flip-in-ver-left'>
                    <div className='clcfullcard__iamgecontainer'>
                      <img
                        className='clcfullcard__image'
                        src='./assets/images/card_image.png'
                        alt='card_image'
                      />
                    </div>
                  </div>
                  <div className='col-md-6 clcfullcard__column'>
                    <div className='clcfullcard__content'>
                      <h3 className='clcfullcard__title wow focus-in-contract'>
                        WHY STUDENTS TEND TO SCORE LESS IN{' '}
                        <span className='w_color'>O/A LEVELS?</span>
                      </h3>
                      <p className='clcfullcard__subtitle wow fade-in-bottom'>
                        Students on O and A levels are young who have just
                        started exploring the world. They are more likely to be
                        distracted from the studies and score less. It is
                        necessory that at this critical point the student does
                        not lose interest in his studies.At CLC Online Learning,
                        We make sure that every subject is taught in a way that
                        is entertaining yet informational and the teachers are
                        friendly and unique in their teaching methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
