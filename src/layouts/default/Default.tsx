import * as React from 'react';

interface FrontpageProps {
    header?: JSX.Element;
    nav: JSX.Element;
}

export const Default: React.FC<FrontpageProps> = (props) => {
    return (
        <div className="grid__container">
            <div className="top__page">
                <header>
                    {props.header}
                </header>
            </div>

            <article className='weather'>

            </article>
            <div className="introduction__section">
                <nav>
                    {props.nav}
                </nav>
            </div>

            <div className="main__content">
                <main>

                </main>
            </div>

            <div className="end__content">
                <footer>
                </footer>
            </div>
        </div>
    )
};
