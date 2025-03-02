import React from 'react';

const Header = () => {
    return (
        <header>
            <h>
                <button className='title'>
                    DP's Portfolio
                </button>
                <nav>
                    <button>
                        About me
                    </button>
                    <button>
                        Career
                    </button>
                    <button>
                        Skills
                    </button>
                    <button>
                        Projects
                    </button>
                    <button>
                        Contact
                    </button>
                </nav>
            </h>
        </header>
    );
};

export default Header;