import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const listSNS = [
    "facebook",
    "twitter",
    "google plus",
    "vk",
    "linkedin",
    "instagram",
    "youtube",
];

const ButtonCircularSNS = () => {
    return (
        <div>
            { listSNS.map((v, i) => (
                <Button circular key={ v } color={ v } icon={ v } />
            )) }
        </div>
    );
};

export default ButtonCircularSNS;
