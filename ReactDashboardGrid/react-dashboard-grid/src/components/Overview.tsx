import React from 'react';

function Overview() {
    return (
        <section className="overview">
          <div className="overview__card">
            <svg className="overview__icon">
              <use xlinkHref="/sprite.svg#icon-global"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              World&apos;s best luxury homes
            </h4>
            <p className="overview__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>

        <div className="overview__card">
          <svg className="overview__icon">
            <use xlinkHref="/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
          <p className="overview__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>

        <div className="overview__card">
          <svg className="overview__icon">
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            All homes in in top locations
          </h4>
          <p className="overview__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>

        <div className="overview__card">
          <svg className="overview__icon">
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="overview__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>
    );
}

export default Overview;