import React from 'react';

const Body = () => {
    return (
        <section className="body">
            <div className="body__card-large">
                <svg className="body__icon">
                    <use xlinkHref="/sprite.svg#icon-presentation"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
                <p className="body__text">
                    Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                    distinctio necessitatibus pariatur voluptatibus.
                </p>
            </div>

            <div className="body__card">
                <svg className="body__icon">
                    <use xlinkHref="/sprite.svg#icon-lock"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">
                    Secure payments on nexter
                </h4>
                <p className="body__text">
                    Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
                    quae.
                </p>
            </div>

            <div className="body__card">
                <svg className="body__icon">
                    <use xlinkHref="/sprite.svg#icon-lock"></use>
                </svg>
                <h4 className="heading-4 heading-4--dark">
                    Secure payments on nexter
                </h4>
                <p className="body__text">
                    Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
                    quae.
                </p>
            </div>
        </section>
    );
};

export default Body;