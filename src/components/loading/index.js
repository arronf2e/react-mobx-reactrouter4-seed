import React from 'react';

import './loading.less';

const Loading = () => (
    <div className="loading">
        <div className="lds-css">
            <div style={{width: '100%', height: '100%'}} className="lds-ball">
                <div>

                </div>
            </div>
        </div>
    </div>
)

export default Loading;
